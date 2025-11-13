import { useEffect, useState } from "react";
import useAxios from "../../Hooks/AxiosN";
import BillCard from "../../Component/BillCard/BillCard";
import Loader from "../../Component/Loader/Loader";

const Bills = () => {
  const fetchbills = useAxios();
  const [bills, setBills] = useState();
  const [category, setCategory] = useState("All Bills");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Fetch bills data from API

    fetchbills
      .get("/bills")
      .then((response) => {
        setBills(response.data);
        setLoading(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [fetchbills]);

  const handleFilter = (event) => {
    const selectedCategory = event.target.value;
    // Filter bills based on selected category
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
    setLoading(false);
    fetchbills
      .get(`/bills?category=${selectedCategory}`)
      .then((response) => {
        setBills(response.data);
        setLoading(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <section className="allbills ">
        <div className="filter ">
          <h3>Filter</h3>
          <div className="divider"></div>
          <select
            defaultValue="Catagory"
            className="select"
            onChange={handleFilter}
          >
            <option disabled={true}>Catagory</option>
            <option value="Electricity">Electricity</option>
            <option value="Gas">Gas</option>
            <option value="Water">Water</option>
            <option value="Internet">Internet</option>
          </select>
        </div>
        <h2 className="text-4xl font-bold mb-10  text-center">{category}</h2>
        <div className="card-wrpper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? (
            bills.map((bill, id) => <BillCard bill={bill} key={id} />)
          ) : (
            <Loader></Loader>
          )}
        </div>
      </section>
    </>
  );
};

export default Bills;
