"use client";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";
ChartJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);
const salesData = [
  { hour: "5 AM", sales: 27 },
  { hour: "8 AM", sales: 19 },
  { hour: "11 AM", sales: 20 },
  { hour: "2 PM", sales: 25 },
  { hour: "5 PM", sales: 21 },
  { hour: "8 PM", sales: 28 },
  { hour: "11 PM", sales: 29 },
  { hour: "2 AM", sales: 21 },
];

export default function LineChart() {
  const data = {
    labels: salesData.map((data) => data.hour),
    datasets: [
      {
        label: "Revenue",
        data: salesData.map((data) => data.sales),
        borderColor: "#FCC54C",
        borderWidth: 2,
        pointBorderColor: "#FCC54C",
        pointBorderWidth: 0,
        tension: 0.4,
        fill: false,
      },
    ],
  };
  const options = {
    plugins: { legend: false },
    responsive: true,
    scales: {
      y: {
        grid: { drawOnChartArea: false },
        ticks: { display: false },
        title: {
          display: true,
        },
        min: 15,
      },
      x: {
        grid: { drawOnChartArea: false },
        ticks: { font: { size: 10, weight: "bold" } },
        title: {
          display: true,
        },
      },
    },
  };
  return (
    <div>
      <div
        style={{
          width: "900px",
          height: "400px",
          padding: "20px",
          cursor: "pointer",
        }}
      >
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
