import { useEffect } from "react";
import MyBillTable from "../../Component/MyBillTable/MyBillTable.jsx";
import useAxios from "../../Hooks/AxiosN.jsx";
import { useState } from "react";

const MyBill = () => {
  const mybillfetch = useAxios();
  const [bills, setBills] = useState([]);

  useEffect(() => {
    mybillfetch.get("/payment").then((response) => {
      setBills(response.data);
    });
  }, [mybillfetch]);

  const handleCancel = (billId) => {
    console.log(billId);
    const newBills = bills.filter((bill) => bill._id !== billId);
    setBills(newBills);
    mybillfetch.delete(`/payment/${billId}`);
    console.log(bills);
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
          <button className="btn btn-primary">Add New</button>
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
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyBill;
