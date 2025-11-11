import { NavLink } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className=" bg-base-200 text-base-content p-10">
        <div className="footer footer-max sm:footer-horizontal ">
          <aside>
            <NavLink to="/" className=" text-2xl">
              <h1 className="text-2xl font-extrabold ">
                Bill <span className="text-primary">Management</span>
              </h1>
            </NavLink>
            <p>
              manage monthly utility bills such as Electricity, Gas, Water, and
              Internet
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
