import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Station() {
  const navigate = useNavigate(); // Hook for navigation

  const [station, setStation] = useState([]);
  const [selectedStation, setSelectedStation] = useState("");

  useEffect(() => {
    // Fetch station names from the server

    axios
      .get("http://localhost:8081/api/station")
      .then((res) => {
        console.log(res.data);

        setStation(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the station data:", error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect to stationDetail.jsx passing selected station as query parameter
    navigate("/train/details", { state: { selectedStation: selectedStation } });
  };

  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "lightblue" }}
    >
      <Navbar />
      <div
        style={{
          maxWidth: "600px",
          margin: "50px auto",
          padding: "20px",
          backgroundColor: "#f0f0f0",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Select Station</h1>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="stationSelect"
            style={{ display: "block", marginBottom: "10px" }}
          >
            Select Station:
          </label>
          <select
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              color: "black",
            }}
            id="stationSelect"
            name="station"
            onChange={(e) => setSelectedStation(e.target.value)}
          >
            <option value="">Select a station</option>
            {station.map((station, index) => (
              <option key={index} value={station}>
                {station}
              </option>
            ))}
          </select>
          <button
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
            }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Station;
