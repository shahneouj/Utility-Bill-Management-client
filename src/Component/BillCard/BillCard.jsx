import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaTags } from "react-icons/fa";

const BillCard = ({ bill }) => {
  const { title, category, location, date, image } = bill;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-200 w-full max-w-sm">
      <div className="card-body text-base-content">
        <img src={image} alt="" className="max-h-[250px]" />
        <h2 className="card-title text-lg font-semibold">{title}</h2>
        <div className="space-y-2 mt-2 text-sm">
          <div className="flex items-center gap-2">
            <FaTags className="text-primary" />
            <span>{category}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-secondary" />
            <span>{location}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-accent" />
            <span>{date}</span>
          </div>
        </div>

        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary btn-sm">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default BillCard;
