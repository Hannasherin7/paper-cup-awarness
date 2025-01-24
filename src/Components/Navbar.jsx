import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-around", padding: "10px", background: "#4CAF50", color: "white" }}>
      <Link to="/h" style={{ color: "white", textDecoration: "none" }}>HOME</Link>
      <Link to="/aw" style={{ color: "white", textDecoration: "none" }}>Awareness</Link>
      <Link to="/gamification" style={{ color: "white", textDecoration: "none" }}>Gamification</Link>
      <Link to="/impact" style={{ color: "white", textDecoration: "none" }}>Impact Tracker</Link>
      <Link to="/community" style={{ color: "white", textDecoration: "none" }}>Community</Link>
    </nav>
  );
};

export default Navbar;
