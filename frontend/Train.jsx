import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Train() {
  const navigate = useNavigate(); // Hook for navigation
  const [train, setTrain] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/train")
      .then((res) => {
        setTrain(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the train data:", error);
      });
  }, []);

  const handleSeatClick = (trainDetails) => {
    navigate("/seats", { state: { trainDetails } });
  };

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div style={styles.container}>
        <h1>Train</h1>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Seats</th>
              <th>Train Number</th>
              <th>Train Name</th>
              <th>Source Station</th>
              <th>Destination Station</th>
              <th>No of Seats</th>
              <th>Available Seats</th>
            </tr>
          </thead>
          <tbody>
            {train.map((train, index) => (
              <tr key={index}>
                <td>
                  <button
                    className="seat-button"
                    style={styles.seatButton}
                    onClick={() => handleSeatClick(train)}
                  >
                    Seat
                  </button>
                </td>
                <td>{train.train_no}</td>
                <td>{train.train_name}</td>
                <td>{train.scr_station}</td>
                <td>{train.dest_station}</td>
                <td>{train.no_of_seats}</td>
                <td>{train.avail_seats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "60%",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#34495e",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    color: "#fff",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    backgroundColor: "#2c3e50",
    color: "#fff",
  },
  seatButton: {
    padding: "8px 15px",
    backgroundColor: "slategray",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Train;
