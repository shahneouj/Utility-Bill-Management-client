import React from "react";
import Slider from "../../Component/Slider/Slider";

const Home = () => {
  return (
    <>
      <section className="full-section md:pb-20">
        <Slider />
      </section>
      <section className="catagory py-10 md:py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-2">Electricity</h2>
              <p className="text-gray-600">Manage your electricity bills</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-2">Water</h2>
              <p className="text-gray-600">Manage your water bills</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-2">Gas</h2>
              <p className="text-gray-600">Manage your gas bills</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-2">Wifi Bill</h2>
              <p className="text-gray-600">Manage your gas bills</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
