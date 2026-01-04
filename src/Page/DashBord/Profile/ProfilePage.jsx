import React, { useContext } from "react";
import {
  FiMail,
  FiPhone,
  FiGlobe,
  FiEdit,
  FiEye,
  FiMessageCircle,
  FiUser,
} from "react-icons/fi";
import { AuthContext } from "../../../Context/AuthContext";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Personal Details</h1>
        <p className="text-sm text-base-content/60">
          Dashboard › Profile
        </p>
      </div>

      {/* Profile Overview */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Card */}
        <div className="card bg-base-100 shadow-sm">
          <div className="h-32 bg-gradient-to-r from-indigo-600 to-indigo-400 relative rounded-t-xl">
            <img
              src={user?.photoURL || "https://i.pravatar.cc/150"}
              alt="avatar"
              className="w-24 h-24 rounded-full border-4 border-base-100 absolute -bottom-12 left-6 object-cover"
            />
          </div>

          <div className="card-body pt-16">
            <h2 className="text-xl font-bold">
              {user?.displayName || "User Name"}
            </h2>
            <p className="text-sm text-base-content/60">
              {user?.email}
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <FiUser /> Account Status:
                <span className="badge badge-success badge-sm">Active</span>
              </p>
              <p className="flex items-center gap-2">
                <FiGlobe /> Language: English
              </p>
            </div>
          </div>
        </div>

        {/* Right Details */}
        <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <DetailCard title="Contact Information">
            <Detail label="Email" value={user?.email} icon={<FiMail />} />
            <Detail label="Phone" value="+880 1XXXXXXXXX" icon={<FiPhone />} />
            <Detail label="Address" value="Bangladesh" />
          </DetailCard>

          <DetailCard title="Personal Information">
            <Detail label="Full Name" value={user?.displayName} />
            <Detail label="Username" value={user?.email?.split("@")[0]} />
            <Detail label="Member Since" value="2024" />
          </DetailCard>
        </div>
      </div>

      {/* Activity Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MiniStat
          title="Profile Views"
          value="24k"
          subtitle="Last 30 days"
          icon={<FiEye size={22} />}
        />
        <MiniStat
          title="Messages"
          value="1.2k"
          subtitle="Unread messages"
          icon={<FiMessageCircle size={22} />}
        />
      </div>
    </div>
  );
};

/* ---------------- Components ---------------- */

const DetailCard = ({ title, children }) => (
  <div className="card bg-base-100 shadow-sm">
    <div className="card-body">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold">{title}</h3>
        <button className="btn btn-ghost btn-xs">
          <FiEdit />
        </button>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  </div>
);

const Detail = ({ label, value, icon }) => (
  <div className="flex items-center gap-3 text-sm">
    {icon && <span className="text-base-content/60">{icon}</span>}
    <span className="font-medium">{label}:</span>
    <span className="text-base-content/70">{value || "Not set"}</span>
  </div>
);

const MiniStat = ({ title, value, subtitle, icon }) => (
  <div className="card bg-base-100 shadow-sm">
    <div className="card-body flex justify-between items-center">
      <div>
        <p className="text-sm">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
        <p className="text-xs text-base-content/60">{subtitle}</p>
      </div>
      <div className="w-12 h-12 bg-base-200 rounded-full flex items-center justify-center">
        {icon}
      </div>
    </div>
  </div>
);

export default ProfilePage;
