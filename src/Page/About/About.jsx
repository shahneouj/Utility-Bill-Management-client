export default function About() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>

          <p className="mb-4">
            Our Utility Bill Management System is designed to make paying and
            managing utility bills simple, fast, and secure. Users can easily
            view bills, download statements, and pay utility bills online.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="card bg-base-200 p-4">
              <h3 className="font-semibold text-lg">View Bills</h3>
              <p className="text-sm">
                Access electricity, gas, water, and internet bills anytime.
              </p>
            </div>

            <div className="card bg-base-200 p-4">
              <h3 className="font-semibold text-lg">Secure Payments</h3>
              <p className="text-sm">
                Pay bills safely using modern and secure payment methods.
              </p>
            </div>

            <div className="card bg-base-200 p-4">
              <h3 className="font-semibold text-lg">Bill History</h3>
              <p className="text-sm">
                Track previous bills and payment history in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
