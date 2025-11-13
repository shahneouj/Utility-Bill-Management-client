import React from "react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import UpdateBill from "../UpdateBill/UpdataBill";

const MyBillTable = ({ bill, handleCancel }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newUpdate, setNewUpdate] = useState(bill);
  const handleClose = () => {
    setIsEditing(false);
  };
  const handleEdit = () => {
    setIsEditing(true);
  };

  // const handleSave = () => {
  //   // Implement save logic here
  //   setIsEditing(false);
  // };

  return (
    <>
      <tr className="hover:bg-base-200 transition-all">
        <td className="px-4 py-3">{newUpdate.username}</td>
        <td className="px-4 py-3">{newUpdate.email}</td>
        <td className="px-4 py-3 font-semibold text-success">
          ${newUpdate.amount}
        </td>
        <td className="px-4 py-3">{newUpdate.address}</td>
        <td className="px-4 py-3">{newUpdate.phone}</td>
        <td className="px-4 py-3">
          {new Date(newUpdate.date).toLocaleDateString()}
        </td>
        <td className="px-4 py-3 flex justify-center gap-3">
          <button
            onClick={handleEdit}
            className="btn btn-sm btn-outline btn-info"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => {
              handleCancel(bill._id);
            }}
            className="btn btn-sm btn-outline btn-error"
          >
            <FaTrash />
          </button>
        </td>
      </tr>

      <UpdateBill
        setNewUpdate={setNewUpdate}
        bill={bill}
        isOpen={isEditing}
        onClose={handleClose}
      />
    </>
  );
};

export default MyBillTable;
