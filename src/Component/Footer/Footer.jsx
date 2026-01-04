import { NavLink } from "react-router";

const Footer = () => {
  const linkClass = ({ isActive }) =>
    `link link-hover ${isActive ? "text-primary font-semibold" : ""}`;

  return (
    <footer className="bg-base-200 text-base-content p-10 mt-10">
      <div className="footer grid md:grid-cols-4 footer-max footer-vertical">
        {/* Logo & Description */}
        <aside>
          <NavLink to="/" className="text-2xl">
            <h1 className="text-2xl font-extrabold">
              Bill <span className="text-primary">Management</span>
            </h1>
          </NavLink>
          <p>
            Manage monthly utility bills such as Electricity, Gas, Water, and
            Internet
          </p>
        </aside>

        {/* Services */}
        <nav>
          <h6 className="footer-title">Services</h6>
          <NavLink to="/services/electricity" className={linkClass}>
            Electricity Bill
          </NavLink>
          <NavLink to="/services/gas" className={linkClass}>
            Gas Bill
          </NavLink>
          <NavLink to="/services/water" className={linkClass}>
            Water Bill
          </NavLink>
          <NavLink to="/services/internet" className={linkClass}>
            Internet Bill
          </NavLink>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title">Company</h6>
          <NavLink to="/about" className={linkClass}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
          <NavLink to="/careers" className={linkClass}>
            Jobs
          </NavLink>
          <NavLink to="/press-kit" className={linkClass}>
            Press Kit
          </NavLink>
        </nav>

        {/* Legal */}
        <nav>
          <h6 className="footer-title">Legal</h6>
          <NavLink to="/terms" className={linkClass}>
            Terms of Use
          </NavLink>
          <NavLink to="/privacy-policy" className={linkClass}>
            Privacy Policy
          </NavLink>
          <NavLink to="/cookie-policy" className={linkClass}>
            Cookie Policy
          </NavLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
