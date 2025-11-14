import { useEffect } from "react";
import MyBillTable from "../../Component/MyBillTable/MyBillTable.jsx";
import useAxios from "../../Hooks/AxiosN.jsx";
import { useState } from "react";
import { jsPDF } from "jspdf";
import Swal from "sweetalert2";
import autoTable from "jspdf-autotable";

const MyBill = () => {
  const mybillfetch = useAxios();
  const [bills, setBills] = useState([]);
  const totalBills = bills.length;

  const totalAmount = bills.reduce((sum, bill) => {
    return sum + Number(bill.amount);
  }, 0);
  useEffect(() => {
    mybillfetch.get("/payment").then((response) => {
      setBills(response.data);
    });
  }, [mybillfetch]);
  const downloadBillsTablePdf = () => {
    if (!bills || bills.length === 0) return;

    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text("My Paid Bills", 14, 15);

    doc.setFontSize(11);
    doc.text("Payment details", 14, 23);

    // Table headers
    const tableColumn = [
      "Username",
      "Email",
      "Amount",
      "Address",
      "Phone",
      "Date",
    ];

    // Table rows
    const tableRows = bills.map((bill) => [
      bill.username,
      bill.email,
      `$${bill.amount}`,
      bill.address,
      bill.phone,
      new Date(bill.date).toLocaleDateString(),
    ]);

    // Auto table
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 30,
      styles: {
        lineWidth: 0.2,
        cellPadding: 3,
      },
      headStyles: {
        fillColor: [240, 240, 240], // light gray like UI
        textColor: 0,
        fontStyle: "bold",
      },
      alternateRowStyles: {
        fillColor: [255, 255, 255],
      },
      tableLineColor: [200, 200, 200],
      tableLineWidth: 0.2,
    });

    // Save
    doc.save("Bills_Table.pdf");
  };

  const handleCancel = async (billId) => {
    await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newBills = bills.filter((bill) => bill._id !== billId);
        setBills(newBills);

        mybillfetch.delete(`/payment/${billId}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <section>
      <div className="p-6 bg-base-100 rounded-2xl shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-base-content">
              My Paid Bills
            </h2>
            <p className="text-sm text-base-content/60">payment details</p>
          </div>
          <button className="btn btn-primary" onClick={downloadBillsTablePdf}>
            Download PDF
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-base-300">
          <table className="table w-full">
            <thead className="bg-base-200 text-base-content">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Username</th>
                <th className="px-4 py-3 text-left font-semibold">Email</th>
                <th className="px-4 py-3 text-left font-semibold">Amount</th>
                <th className="px-4 py-3 text-left font-semibold">Address</th>
                <th className="px-4 py-3 text-left font-semibold">Phone</th>
                <th className="px-4 py-3 text-left font-semibold">Date</th>
                <th className="px-4 py-3 text-center font-semibold">Action</th>
              </tr>
            </thead>

            <tbody>
              {bills && bills.length > 0 ? (
                bills.map((bill, index) => (
                  <MyBillTable
                    bill={bill}
                    key={index}
                    handleCancel={handleCancel}
                  />
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-6 text-base-content/60 italic"
                  >
                    No bills found
                  </td>
                </tr>
              )}
              <tr className="p-4 mb-4 bg-base-200 rounded-xl flex justify-between">
                <td>
                  <p className="text-lg font-semibold">
                    Total Bills Paid:{" "}
                    <span className="text-primary">{totalBills}</span>
                  </p>
                  <p className="text-lg font-semibold">
                    Total Amount:{" "}
                    <span className="text-primary">
                      ৳{totalAmount.toLocaleString()}
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyBill;
