import React from "react";
import Navbar from "./Navbar";

const Awareness = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", color: "#333", lineHeight: "1.6" }}>
      <Navbar />

      <h2 style={{ color: "#2d6a4f", textAlign: "center", marginBottom: "20px" }}>Why Say No to Paper Cups?</h2>

      <div style={{ backgroundColor: "#e1f7d5", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>🚨 Health Risks:</p>
        <p>
          Paper cups contain harmful chemicals like <strong>BPA</strong> and <strong>microplastics</strong> that can leach into your drink, posing serious health risks such as hormone disruption and digestive issues.
        </p>
      </div>

      <div style={{ backgroundColor: "#f4f4f4", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>🌍 Environmental Impact:</p>
        <p>
          Paper cups are <strong>single-use</strong>, contributing to massive environmental waste. They often contain plastic linings, making them non-biodegradable.
        </p>
      </div>

      <h3 style={{ color: "#2d6a4f", textAlign: "center" }}>Did You Know?</h3>
      <ul style={{ listStyleType: "circle", paddingLeft: "20px", fontSize: "18px" }}>
        <li>🚯 <strong>500 billion</strong> paper cups are used globally each year.</li>
        <li>♻️ Most cups end up in landfills as their plastic coatings prevent recycling.</li>
        <li>🌱 Producing paper cups requires cutting down millions of trees annually.</li>
        <li>🔥 Paper cup waste contributes to increased carbon emissions.</li>
      </ul>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h3 style={{ color: "#2d6a4f" }}>What Can You Do?</h3>
        <p style={{ fontSize: "18px" }}>🌱 Switch to reusable cups! Carry your own and reduce waste.</p>
        <p style={{ fontSize: "18px" }}>💡 Support eco-friendly alternatives like bamboo or metal cups.</p>
        <p style={{ fontSize: "18px" }}>📣 Spread awareness! Encourage friends and family to avoid paper cups.</p>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          style={{
            backgroundColor: "#2d6a4f",
            color: "white",
            padding: "12px 25px",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "5px",
            transition: "0.3s"
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1b4d3e")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2d6a4f")}
        >
          Join the Movement
        </button>
      </div>
    </div>
  );
};

export default Awareness;
