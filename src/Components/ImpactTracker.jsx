import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// ✅ Register the required scales and components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ImpactTracker = () => {
  // ✅ Chart Data
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Impact Score",
        data: [30, 50, 80, 40, 70], // Sample data
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1
      }
    ]
  };

  // ✅ Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Impact Tracker"
      }
    },
    scales: {
      x: {
        type: "category", // Ensure category scale is used for x-axis
        title: {
          display: true,
          text: "Months"
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Impact Score"
        }
      }
    }
  };

  return (
    <div style={{ width: "80%", margin: "auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Impact Tracker</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ImpactTracker;
