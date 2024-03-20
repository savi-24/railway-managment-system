import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function Train_details() {
  const location = useLocation();
  const { selectedStation } = location.state;
  console.log(selectedStation);
  const [trainDetails, setTrainDetails] = useState([]);

  useEffect(() => {
    console.log(selectedStation);
    if (selectedStation) {
      // Fetch train details for the selected station
      axios
        .post(`http://localhost:8081/api/train_details`, {
          station: selectedStation,
        })
        .then((res) => {
          setTrainDetails(res.data);
        })
        .catch((error) => {
          console.error(
            "There was an error fetching the train details:",
            error
          );
        });
    }
  }, [selectedStation]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "lightblue",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div
        style={{
          width: "75%",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "beige",
          borderRadius: "5px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Train Details for {selectedStation}
        </h1>
        <table style={{ width: "100%" }}>
          <thead>
            <tr style={{ height: "100px" }}>
              <th style={{ textAlign: "center" }}>Train Number</th>
              <th style={{ textAlign: "center" }}>Train Name</th>
              <th style={{ textAlign: "center" }}>Arrival Time</th>
              <th style={{ textAlign: "center" }}>Departure Time</th>
              <th style={{ textAlign: "center" }}>Day</th>
            </tr>
          </thead>
          <tbody>
            {trainDetails.map((train, index) => (
              <tr key={index}>
                <td>{train.train_no}</td>
                <td>{train.train_name}</td>
                <td>{train.arrivalTime}</td>
                <td>{train.departureTime}</td>
                <td>{train.day}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Train_details;
