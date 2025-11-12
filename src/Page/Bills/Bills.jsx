import { useEffect, useState } from "react";
import useAxios from "../../Hooks/AxiosN";
import BillCard from "../../Component/BillCard/BillCard";

const Bills = () => {
  const fetchbills = useAxios();
  const [bills, setBills] = useState();
  useEffect(() => {
    // Fetch bills data from API

    fetchbills
      .get("/bills")
      .then((response) => {
        setBills(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [fetchbills]);

  return (
    <>
      <section className="allbills ">
        <h2 className="text-4xl font-bold mb-10  text-center">All Bills</h2>
        <div className="card-wrpper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bills && bills.map((bill, id) => <BillCard bill={bill} key={id} />)}
        </div>
      </section>
    </>
  );
};

export default Bills;
