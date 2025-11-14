import React, { useState } from "react";
import { FaMoneyBillWave, FaCreditCard, FaTimes } from "react-icons/fa";
import useAxios from "../../Hooks/AxiosN";
import toast from "react-hot-toast";
const UpdateBill = ({ bill, isOpen, onClose, user, setNewUpdate }) => {
  const [isLoading, setIsLoading] = useState(false);
  const update = useAxios();
  // New state for additional fields
  const [formData, setFormData] = useState({
    email: user?.email || "",
    username: bill.username || "",
    address: bill.address || "",
    phone: bill.phone || "",
  });
  if (!isOpen) return null;

  const onCloseClick = () => {
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateBill = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await update.patch(`/payment/${bill._id}`, formData);
      setNewUpdate(formData);
      onClose();
      toast.success("Update Successfully");
    } catch (error) {
      toast.error("Update error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-base-100 rounded-2xl shadow-xl w-11/12 max-w-md p-6 relative">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-base-content/60 hover:text-error"
            onClick={onCloseClick}
          >
            <FaTimes size={18} />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <FaMoneyBillWave className="text-success text-2xl" />
            <h2 className="text-xl font-bold text-base-content">
              Pay Bill – {bill?.title}
            </h2>
          </div>

          {/* Bill Info */}
          <div className="bg-base-200 p-3 rounded-xl mb-4">
            <p className="text-sm">
              <strong>Category:</strong> {bill?.category}
            </p>
            <p className="text-sm">
              <strong>Amount:</strong> ${bill?.amount}
            </p>
            <p className="text-sm">
              <strong>Due Date:</strong>{" "}
              {new Date(bill?.date).toLocaleDateString()}
            </p>
          </div>

          {/* Payment Form */}
          <form onSubmit={handleUpdateBill} className="space-y-3">
            {/* Auto-filled Fields */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                value={bill.email}
                readOnly
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Bill ID</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={bill?._id || ""}
                readOnly
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Amount</label>
              <input
                type="text"
                className="input input-bordered w-full"
                defaultValue={`$${bill?.amount}`}
                onChange={handleChange}
              />
            </div>

            {/* User Fields */}
            <div>
              <label className="block mb-1 font-medium">Username</label>
              <input
                type="text"
                name="username"
                className="input input-bordered w-full"
                placeholder="Enter your name"
                value={bill.username}
                readOnly
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Address</label>
              <input
                type="text"
                name="address"
                className="input input-bordered w-full"
                placeholder="Enter your address"
                defaultValue={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                className="input input-bordered w-full"
                placeholder="Enter phone number"
                defaultValue={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                className="btn btn-outline btn-error"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`btn btn-success ${isLoading ? "loading" : ""}`}
              >
                {isLoading ? "Processing..." : "Update"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateBill;
