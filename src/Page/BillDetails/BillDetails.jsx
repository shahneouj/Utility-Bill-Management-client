import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../../Hooks/AxiosN";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTag,
  FaMoneyBill,
} from "react-icons/fa";
import Loader from "../../Component/Loader/Loader";
import PayBillModal from "../../Component/PayBillModal/PayBillModal";
import { AuthContext } from "../../Context/AuthContext";
import { use } from "react";

const BillDetails = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const [bill, setBill] = useState(null);
  const billDetails = useAxios();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    billDetails.get(`/bills/${id}`).then((response) => {
      setBill(response.data);
    });
  }, [billDetails, id]);

  const handlePayBill = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!bill) return <Loader />;

  return (
    <section className="billdetals">
      <PayBillModal
        bill={bill}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        user={user}
      />
      <div className="max-w-3xl mx-auto bg-base-100 shadow-xl rounded-2xl p-4 sm:p-6 lg:p-8 my-6 md:my-10 border border-base-200">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 border-b border-base-300 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-base-content flex items-center gap-2">
              🧾 {bill.title}
            </h2>
            <p className="text-sm text-base-content/70">
              Bill Details Overview
            </p>
          </div>
        </div>

        {/* Info Section */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 bg-base-200 p-3 rounded-xl">
            <FaTag className="text-primary text-xl" />
            <div>
              <p className="text-sm text-base-content/60">Category</p>
              <p className="font-semibold">{bill.category}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-base-200 p-3 rounded-xl">
            <FaMapMarkerAlt className="text-secondary text-xl" />
            <div>
              <p className="text-sm text-base-content/60">Location</p>
              <p className="font-semibold">{bill.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-base-200 p-3 rounded-xl">
            <FaMoneyBill className="text-success text-xl" />
            <div>
              <p className="text-sm text-base-content/60">Amount</p>
              <p className="font-semibold">${bill.amount}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-base-200 p-3 rounded-xl">
            <FaCalendarAlt className="text-info text-xl" />
            <div>
              <p className="text-sm text-base-content/60">Date</p>
              <p className="font-semibold">
                {new Date(bill.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="my-6">
          <img
            src={bill.image}
            alt={bill.title}
            className="w-full h-64 object-cover border border-base-200 rounded-xl shadow-sm"
          />
        </div>

        {/* Description */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2 text-base-content">
            Description
          </h3>
          <p className="text-base-content/80 leading-relaxed">
            {bill.description}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end gap-3 border-t border-base-300 pt-4">
          <button
            onClick={handlePayBill}
            className="btn btn-outline btn-primary btn-sm"
          >
            Pay Bill
          </button>
        </div>
      </div>
    </section>
  );
};

export default BillDetails;
