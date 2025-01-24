import React from "react";
import Navbar from "./Navbar";

const Awareness = () => {
  return (
    <div style={{ padding: "20px" }}>
        <Navbar></Navbar>
      <h2>Why Say No to Paper Cups?</h2>
      <p>Paper cups contain harmful chemicals like BPA and microplastics that pose health risks.</p>
      <p>They are single-use, contributing to massive environmental waste.</p>
      <h3>Did You Know?</h3>
      <ul>
        <li>500 billion cups are used globally each year.</li>
        <li>Most cups end up in landfills due to plastic linings.</li>
      </ul>
    </div>
  );
};

export default Awareness;
