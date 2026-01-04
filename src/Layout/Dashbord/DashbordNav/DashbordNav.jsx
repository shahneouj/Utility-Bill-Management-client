import { use, useEffect, useState } from "react";
import {
  FiMenu,
  FiGrid,
  FiBarChart2,
  FiShoppingCart,
  FiMessageCircle,
  FiUsers,
  FiCalendar,
  FiFileText,
  FiChevronRight,
  FiLayers,
  FiZap,
  FiEdit,
  FiPieChart,
  FiTable,
  FiMapPin,
} from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router";
import { AuthContext } from "../../../Context/AuthContext";
const DashbordNav = ({ children }) => {
  const { logout, user } = use(AuthContext);


  const [isdark, setIsdark] = useState(
    JSON.parse(localStorage.getItem("isdark")) ?? false
  );

  useEffect(() => {
    localStorage.setItem("isdark", JSON.stringify(isdark));
  }, [isdark]);
  return (
    <div className="drawer lg:drawer-open">
      {/* Drawer Toggle */}
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col">
        {/* Top Navbar */}
        <div className="navbar bg-base-100 border-b px-4">
          {/* Left */}
          <div className="navbar-start">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-ghost btn-square lg:hidden"
            >
              <FiMenu size={22} />
            </label>
            <h1 className="text-lg font-semibold ml-2">Dashboard</h1>
          </div>

          {/* Right */}
          <div className="navbar-end">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                <img
                  src={user?.photoURL}
                  title={user?.displayName}
                  alt="User Avatar"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Theme Toggle (kept from your code) */}
        <label className="swap swap-rotate bg-primary fixed right-0 top-1/2 -translate-y-1/2 z-50 text-primary-content p-3 rounded-l-3xl">
          <input
            type="checkbox"
            className="theme-controller"
            value="dim"
            checked={isdark}
            onChange={() => setIsdark(!isdark)}
          />

          <svg
            className="swap-off h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 5a7 7 0 100 14 7 7 0 000-14z" />
          </svg>

          <svg
            className="swap-on h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </label>
        {/* Page Content */}
        <div className="px-20 py-10">
          {children}

        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay lg:hidden" />

        <aside className="w-64 min-h-full bg-base-100 border-r">
          {/* Logo */}
          <div className="px-6 py-5 text-xl font-bold flex items-center gap-2">
            <NavLink to="/" className="text-xl font-extrabold">
              Bill <span className="text-primary">Management</span>
            </NavLink>
          </div>

          {/* Menu */}
          <ul className="menu px-4 text-sm w-full space-y-4">
            <li className="menu-title">Navigation</li>

            <li>
              <NavLink
                to="/dashbord"
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-lg text-base font-semibold
                  transition-all duration-300 w-full
                  ${isActive
                    ? "bg-primary text-primary-content shadow-md scale-[1.03]"
                    : "text-base-content hover:bg-primary/10 hover:text-primary hover:translate-x-1"
                  }
      `
                }
              >
                <FiGrid size={20} />
                <span>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashbord/profile"
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-lg text-base font-semibold
                  transition-all duration-300 w-full
                  ${isActive
                    ? "bg-primary text-primary-content shadow-md scale-[1.03]"
                    : "text-base-content hover:bg-primary/10 hover:text-primary hover:translate-x-1"
                  }
      `
                }
              >
                < FaUserCircle size={20} />
                <span>Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashbord/my-bills" className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-lg text-base font-semibold
                  transition-all duration-300 w-full
                  ${isActive
                  ? "bg-primary text-primary-content shadow-md scale-[1.03]"
                  : "text-base-content hover:bg-primary/10 hover:text-primary hover:translate-x-1"
                }
      `
              }>
                <FiFileText />
                My Bills
              </NavLink>
              {/* /dashbord */}
            </li>

          </ul>
        </aside>
      </div>
    </div>
  );
};

export default DashbordNav;
