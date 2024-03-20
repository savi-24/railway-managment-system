import React from "react";
import Navbar from "./Navbar";

function Homepage() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
        backgroundImage: "url('hometrain.jpg')",

        backgroundSize: "cover",
        color: "white",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Navbar />
    </div>
  );
}

export default Homepage;
