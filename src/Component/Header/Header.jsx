import React, { useEffect, useState, use } from "react";
import { NavLink, Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import {
  FiHome,
  FiFileText,
  FiInfo,
  FiMail,
  FiLogOut,
} from "react-icons/fi";

const Header = () => {
  const { logout, user } = use(AuthContext);
  const navigate = useNavigate();

  const [isdark, setIsdark] = useState(
    JSON.parse(localStorage.getItem("isdark")) ?? false
  );

  useEffect(() => {
    localStorage.setItem("isdark", JSON.stringify(isdark));
  }, [isdark]);

  const handelLogout = async () => {
    await logout();
    navigate("/");
  };

  const navClass = ({ isActive }) =>
    `nav-top-item ${isActive ? "nav-top-active" : ""}`;

  return (
    <header className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <NavLink to="/" className="text-xl font-extrabold">
            Bill <span className="text-primary">Management</span>
          </NavLink>

          {/* Navigation */}
          <nav className="hidden md:flex nav-top-container">
            <NavLink to="/" className={navClass}>
              <FiHome />
              Home
            </NavLink>

            <NavLink to="/all-bills" className={navClass}>
              <FiFileText />
              Bills
            </NavLink>

            {user && (
              <NavLink to="/my-bills" className={navClass}>
                <FiFileText />
                My Bills
              </NavLink>
            )}

            <NavLink to="/about" className={navClass}>
              <FiInfo />
              About
            </NavLink>

            <NavLink to="/contactus" className={navClass}>
              <FiMail />
              Contact
            </NavLink>
          </nav>

          {/* Right Side: User */}
          <div className="flex items-center gap-3">
            {user ? (
              <>
                <img
                  src={user.photoURL}
                  title={user.displayName}
                  className="w-9 h-9 rounded-full border"
                />
                <button
                  onClick={handelLogout}
                  className="btn btn-sm btn-primary flex items-center gap-1"
                >
                  <FiLogOut />
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-sm btn-primary">
                  Login
                </Link>
                <Link to="/register" className="btn btn-sm btn-outline">
                  Register
                </Link>
              </>
            )}
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
    </header>
  );
};

export default Header;
