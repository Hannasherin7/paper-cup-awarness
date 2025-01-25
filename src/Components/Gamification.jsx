import React, { useState } from "react";

const Gamification = () => {
  const [points, setPoints] = useState(0);
  const rewardThreshold = 100; // Example: Redeem rewards at 100 points

  const scanQR = () => {
    setPoints(points + 10);
    alert("🎉 QR Code Scanned! You earned 10 points.");
  };

  // Dynamic encouragement messages
  const getEncouragementMessage = () => {
    if (points >= rewardThreshold) {
      return "🌟 Congrats! You've earned enough points for a reward!";
    } else if (points >= 50) {
      return "🚀 You're halfway to your reward! Keep going!";
    } else if (points > 0) {
      return "🎯 Great start! Keep scanning QR codes for more points.";
    } else {
      return "Start earning points by scanning QR codes!";
    }
  };

  return (
    <div style={{
      padding: "20px",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      color: "#333",
      backgroundColor: "#f0f8ea",
      borderRadius: "10px",
      maxWidth: "600px",
      margin: "auto",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
    }}>
      {/* Title */}
      <h2 style={{ color: "#2d6a4f", marginBottom: "15px" }}>
        🌱 Earn Rewards for Sustainable Choices!
      </h2>

      {/* Educational Content */}
      <p style={{ fontSize: "18px", marginBottom: "10px" }}>
        Paper cups contribute to environmental waste. Using reusable cups helps reduce pollution and saves trees! Earn points for making sustainable choices.
      </p>

      <p style={{ fontSize: "16px", color: "#555", fontStyle: "italic" }}>
        Did you know? <br /> Over **500 billion paper cups** are used annually, and most end up in landfills!
      </p>

      {/* QR Code Scan Button */}
      <button
        onClick={scanQR}
        style={{
          padding: "12px 20px",
          background: "#4CAF50",
          color: "white",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          marginTop: "15px",
          transition: "0.3s"
        }}
        onMouseOver={(e) => (e.target.style.background = "#3a8d40")}
        onMouseOut={(e) => (e.target.style.background = "#4CAF50")}
      >
        📷 Scan QR Code
      </button>

      {/* User Points Display */}
      <h3 style={{
        marginTop: "20px",
        color: "#2d6a4f",
        fontSize: "22px",
        fontWeight: "bold"
      }}>
        Your Points: {points} 🌟
      </h3>

      {/* Progress Bar */}
      <div style={{
        width: "80%",
        backgroundColor: "#ddd",
        borderRadius: "10px",
        height: "15px",
        margin: "auto",
        overflow: "hidden",
        position: "relative"
      }}>
        <div style={{
          width: `${Math.min((points / rewardThreshold) * 100, 100)}%`,
          height: "100%",
          backgroundColor: "#4CAF50",
          borderRadius: "10px",
          transition: "width 0.5s ease"
        }}></div>
      </div>

      <p style={{
        marginTop: "10px",
        fontSize: "16px",
        fontWeight: "bold",
        color: points >= rewardThreshold ? "#4CAF50" : "#555"
      }}>
        {getEncouragementMessage()}
      </p>

      {/* Leaderboard Section */}
      <div style={{
        marginTop: "30px",
        padding: "15px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)"
      }}>
        <h3 style={{ color: "#2d6a4f" }}>🏆 Top Users</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ fontSize: "16px", fontWeight: "bold" }}>🥇 Alice - 150 pts</li>
          <li style={{ fontSize: "16px", fontWeight: "bold" }}>🥈 Bob - 130 pts</li>
          <li style={{ fontSize: "16px", fontWeight: "bold" }}>🥉 Charlie - 110 pts</li>
        </ul>
        <p style={{ fontSize: "14px", fontStyle: "italic", color: "#555" }}>
          Keep scanning QR codes to climb the leaderboard!
        </p>
      </div>
    </div>
  );
};

export default Gamification;
