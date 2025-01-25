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

// ✅ Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ImpactTracker = () => {
  // ✅ Chart Data with extended months
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Impact Score",
        data: [30, 50, 80, 40, 70, 90, 60, 110, 120, 150, 180, 200], // Extended sample data
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        borderRadius: 5
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
        text: "📊 Monthly Impact Tracker",
        font: {
          size: 18
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
          font: {
            size: 14
          }
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Impact Score",
          font: {
            size: 14
          }
        }
      }
    }
  };

  // ✅ Dynamic Insights Based on Data
  const insights = [
    "📈 Steady growth in impact over the months!",
    "🚀 Highest impact recorded in December!",
    "🔽 Slight dip in April - time to boost awareness!",
    "🌱 Sustainable efforts are increasing rapidly!"
  ];

  return (
    <div style={{
      width: "80%",
      margin: "auto",
      padding: "30px",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f9ff",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
    }}>
      {/* Title */}
      <h2 style={{ color: "#2c3e50", marginBottom: "10px" }}>
        🌍 Impact Tracker: Measuring Change
      </h2>

      {/* Description */}
      <p style={{ fontSize: "16px", color: "#555", marginBottom: "20px" }}>
        Tracking the positive environmental impact of reducing paper cup usage.  
        See how small actions add up over time! 📊
      </p>

      {/* Chart */}
      <div style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "10px" }}>
        <Bar data={data} options={options} />
      </div>

      {/* Key Insights */}
      <div style={{
        marginTop: "30px",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)"
      }}>
        <h3 style={{ color: "#2c3e50", marginBottom: "10px" }}>📢 Key Insights</h3>
        <ul style={{ listStyleType: "none", padding: 0, color: "#555", fontSize: "16px" }}>
          {insights.map((insight, index) => (
            <li key={index} style={{ marginBottom: "5px" }}>✅ {insight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImpactTracker;
