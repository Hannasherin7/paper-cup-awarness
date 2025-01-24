import React, { useState } from "react";

const Gamification = () => {
  const [points, setPoints] = useState(0);

  const scanQR = () => {
    setPoints(points + 10);
    alert("QR Code Scanned! You earned 10 points.");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Earn Rewards for Sustainable Choices!</h2>
      <p>Use a reusable cup and scan the QR code to earn points.</p>
      <button onClick={scanQR} style={{ padding: "10px", background: "#4CAF50", color: "white", border: "none" }}>Scan QR Code</button>
      <h3>Your Points: {points}</h3>
    </div>
  );
};

export default Gamification;
