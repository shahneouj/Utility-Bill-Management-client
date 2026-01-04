import "../../../utils/chartSetup";
import { Line, Doughnut } from "react-chartjs-2";
import {
  FiZap,
  FiWifi,
  FiDroplet,
  FiHome,
  FiDollarSign,
} from "react-icons/fi";

const StatCard = ({ title, value, change, icon, positive }) => (
  <div className="card bg-base-100 shadow-sm">
    <div className="card-body">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-base-content/60">{title}</p>
          <h2 className="text-2xl font-bold mt-1">{value}</h2>
          <p
            className={`text-sm mt-1 ${positive ? "text-success" : "text-error"
              }`}
          >
            {change}
          </p>
        </div>
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
      </div>
    </div>
  </div>
);

const DashboardOverview = () => {
  /* ===== Line Chart: Monthly Bills ===== */
  const monthlyBillData = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ],
    datasets: [
      {
        label: "Total Bill Amount ($)",
        data: [180, 220, 260, 240, 210, 230, 250, 200, 190, 170, 160, 150],
        borderColor: "#6366f1",
        backgroundColor: "rgba(99,102,241,0.15)",
        tension: 0.4,
        fill: true,
        pointRadius: 4,
      },
    ],
  };

  const monthlyBillOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        grid: { color: "rgba(0,0,0,0.05)" },
        ticks: { stepSize: 50 },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  /* ===== Doughnut Chart: Bill Type Split ===== */
  const billTypeData = {
    labels: ["Electricity", "Gas", "Water", "Internet"],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: [
          "#6366f1",
          "#22c55e",
          "#38bdf8",
          "#facc15",
        ],
        borderWidth: 0,
      },
    ],
  };

  const billTypeOptions = {
    plugins: {
      legend: {
        position: "bottom",
        labels: { boxWidth: 12 },
      },
    },
    cutout: "70%",
  };

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-semibold">
          Monthly Bill Overview 💡
        </h1>
        <p className="text-base-content/60">
          Track and analyze your utility bill payments
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          title="Total Bills Paid"
          value="$1,850.00"
          change="▲ 5.2% from last month"
          positive
          icon={<FiDollarSign size={22} />}
        />
        <StatCard
          title="Electricity Bill"
          value="$740.00"
          change="▲ 3.1% this month"
          positive
          icon={<FiZap size={22} />}
        />
        <StatCard
          title="Gas Bill"
          value="$460.00"
          change="▼ 1.4% this month"
          positive={false}
          icon={<FiHome size={22} />}
        />
        <StatCard
          title="Internet Bill"
          value="$280.00"
          change="▲ 0.9% this month"
          positive
          icon={<FiWifi size={22} />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="xl:col-span-2 card bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="font-semibold text-lg mb-4">
              Monthly Total Bills
            </h2>
            <Line
              data={monthlyBillData}
              options={monthlyBillOptions}
            />
          </div>
        </div>

        {/* Doughnut Chart */}
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body items-center">
            <h2 className="font-semibold text-lg mb-4">
              Bill Distribution
            </h2>
            <Doughnut
              data={billTypeData}
              options={billTypeOptions}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
