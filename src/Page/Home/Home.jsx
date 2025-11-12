import Slider from "../../Component/Slider/Slider";
import { FaBoltLightning } from "react-icons/fa6";
import { MdWaterDrop } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import useAxios from "../../Hooks/AxiosN";
import { useEffect, useState } from "react";
import BillCard from "../../Component/BillCard/BillCard.jsx";
import {
  FaUserPlus,
  FaFileInvoiceDollar,
  FaSearchDollar,
  FaComments,
} from "react-icons/fa";
const Home = () => {
  const [data, setData] = useState([]);
  const fetch = useAxios();
  useEffect(() => {
    // Fetch data or perform any necessary actions
    fetch
      .get("/bills?limit=6")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [fetch]);

  return (
    <>
      <section className="full-section md:pb-20">
        <Slider />
      </section>
      <section className="catagory py-10 md:py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Utility Bills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className=" p-4 rounded shadow-2xl  card bg-base-100 ">
              <FaBoltLightning className="text-4xl text-yellow-400 mb-2" />
              <h2 className="text-xl font-bold mb-2 card-title">Electricity</h2>
              <p className="text-base-content">
                tay on top of your monthly electricity usage and payments. View
                your energy consumption, track past bills, and make instant
                payments securely — all from one dashboard. Never miss a due
                date again.
              </p>
            </div>
            <div className="p-4 rounded shadow-2xl card bg-base-100">
              <MdWaterDrop className="text-4xl text-blue-400 mb-2" />
              <h2 className="text-xl font-bold mb-2 card-title">Water</h2>
              <p className="text-base-content">
                Keep your water payments organized and hassle-free. View your
                billing cycle, see detailed usage records, and pay on time to
                avoid late charges. Refreshingly simple and paperless.
              </p>
            </div>
            <div className="bg-base-100 p-4 rounded shadow-2xl card">
              <FaFireAlt className="text-4xl text-red-600 mb-2" />
              <h2 className="text-xl font-bold mb-2 card-title">Gas</h2>
              <p className="text-base-content">
                Manage your household or business gas expenses effortlessly.
                Check your current meter readings, monitor your payment history,
                and pay your monthly gas bill with just a few clicks.
              </p>
            </div>
            <div className="bg-base-100 p-4 rounded shadow-2xl card">
              <FaWifi className="text-4xl text-purple-600 mb-2" />
              <h2 className="text-xl font-bold mb-2 card-title">Wifi Bill</h2>
              <p className="text-base-content">
                Enjoy uninterrupted connectivity by managing all your broadband
                or Wi-Fi bills in one place. Pay online instantly, track
                previous payments, and get reminders before the due date.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="recent-bills ">
        <h2 className="text-4xl font-bold mb-4  text-center">Recent Bills</h2>
        <div className="card-wrpper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((bill, id) => (
            <BillCard key={id} bill={bill} />
          ))}
        </div>
      </section>
      <section className=" bg-linear-to-b from-primary to-base-100 rounded-2xl">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">How It Works</h2>
          <p className="text-base text-white/80 mb-12">
            Manage your utility bills easily in four simple steps.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white mb-3">
                  <FaUserPlus size={22} />
                </div>
                <h3 className="card-title text-base-content">
                  1. Create Account
                </h3>
                <p className="text-sm text-base-content/70">
                  Sign up in minutes and set up your utility profile securely.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white mb-3">
                  <FaFileInvoiceDollar size={22} />
                </div>
                <h3 className="card-title text-base-content">
                  2. Add Your Bills
                </h3>
                <p className="text-sm text-base-content/70">
                  Enter your electricity, gas, water, or internet bills easily.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white mb-3">
                  <FaSearchDollar size={22} />
                </div>
                <h3 className="card-title text-base-content">3. Pay & Track</h3>
                <p className="text-sm text-base-content/70">
                  Pay bills instantly and monitor all payments in one dashboard.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white mb-3">
                  <FaComments size={22} />
                </div>
                <h3 className="card-title text-base-content">
                  4. Download Reports
                </h3>
                <p className="text-sm text-base-content/70">
                  Download monthly or yearly PDF reports of your payment
                  history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feedback">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-base-content mb-10">
            What Our Users Say
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <p className="text-sm italic">
                  "This system made paying bills so easy! No more waiting in
                  lines — I can manage everything from my phone."
                </p>
                <h3 className="font-semibold mt-4 text-base-content">
                  — Ayesha K.
                </h3>
                <p className="text-xs text-base-content/60">Home User</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <p className="text-sm italic">
                  "I love how clean and responsive the UI is. The reports
                  feature is super useful for monthly expense tracking."
                </p>
                <h3 className="font-semibold mt-4 text-base-content">
                  — Tanvir H.
                </h3>
                <p className="text-xs text-base-content/60">Freelancer</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <p className="text-sm italic">
                  "Reliable and secure. I can pay all my utility bills in one
                  place and even download receipts anytime."
                </p>
                <h3 className="font-semibold mt-4 text-base-content">
                  — Rafiul I.
                </h3>
                <p className="text-xs text-base-content/60">Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
