import { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext.jsx";
import useAxios from "../../Hooks/AxiosN.jsx";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router";
import { AiFillWindows } from "react-icons/ai";
const Register = () => {
  const { createUser, user, setUser, updateUser, googleLogin } =
    use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const userpost = useAxios();
  const handleUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photourl.value;
    createUser(email, password);
    updateUser({ displayName: name, photoURL: photoUrl })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoUrl });
        userpost.post("/user", { email, name, password, photoUrl });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const google = () => {
    googleLogin().then((res) => {
      const newUser = {
        name: res.displayName,
        email: res.email,
        image: res.photoURL,
      };
      userpost.post("/user", newUser).then(() => {
        console.log("user", newUser);
        navigate(location?.state || "/");
      });
    });
  };
  return (
    <>
      <section className="full-section grid grid-cols-1 md:grid-cols-2 w-full h-dvh  pb-0">
        <div className=" card self-center justify-center bg-base-100 shadow-xl border border-base-300 w-full max-w-md mx-auto p-6 rounded-2xl">
          <form onSubmit={handleUser}>
            <fieldset className=" ">
              <h2 className="text-2xl font-bold text-center text-base-content mb-6">
                Create an Account
              </h2>

              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text font-medium">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text font-medium">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photourl"
                  placeholder="Paste your photo URL"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control mb-2">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Optional error message */}
              {/* {error && <p className="text-error text-sm mt-2">{error}</p>} */}

              <div className="mt-4 flex justify-between items-center">
                <Link to="/login" className="link link-primary text-sm">
                  Already have an account? Login here
                </Link>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full mt-6 font-semibold"
              >
                Register
              </button>
            </fieldset>
            {/* Google */}
          </form>
          <button
            onClick={google}
            className="btn bg-white mt-4 text-black border-black"
          >
            <FcGoogle className="mr-2" />
            Login with Google
          </button>
        </div>

        <div className="relative bg-gradient-to-b from-primary to-blue-400 w-full h-full flex items-center justify-center overflow-hidden">
          {/* Decorative glowing circles */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-200/40 rounded-full blur-3xl animate-pulse"></div>

          {/* Text / illustration */}
          <div className="relative z-10 text-center text-base-100 px-8">
            <h1 className="text-4xl font-extrabold mb-3 drop-shadow-lg">
              Bill Master Pro
            </h1>
            <p className="text-base max-w-sm mx-auto opacity-90">
              Manage and pay all your bills easily in one place. Secure, fast,
              and intuitive 💳
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
