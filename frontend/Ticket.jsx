//ticket.jsx
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { UserContext } from "./UserProvider";

function Ticket() {
  const {user}=useContext(UserContext)
  const [tickets,setTickets] = useState([])

  useEffect(() => {
   
      // Fetch train details for the selected station
      axios
        .post(`http://localhost:8081/booked`, {
          passenger_id:user.passenger_id,
        })
        .then((res) => {
          setTickets(res.data);
        })
        .catch((error) => {
          console.error(
            "There was an error fetching the train details:",
            error
          );
        });
    
  }, []);

  // const tickets = [
  //   {
  //     ticketNumber: "",
  //     train_no: "",
  //     src_station: "",
  //     dest_station: "",
  //     seat_no: "",
  //     seat_type: "",
  //     passenger_name: "",
  //     passenger_id: "",
  //   },
  //   {
  //     ticketNumber: "",
  //     train_no: "",
  //     src_station: "",
  //     dest_station: "",
  //     seat_no: "",
  //     seat_type: "",
  //     passenger_name: "",
  //     passenger_id: "",
  //   },
  //   {
  //     ticketNumber: "",
  //     train_no: "",
  //     src_station: "",
  //     dest_station: "",
  //     seat_no: "",
  //     seat_type: "",
  //     passenger_name: "",
  //     passenger_id: "",
  //   },
  //   {
  //     ticketNumber: "",
  //     train_no: "",
  //     src_station: "",
  //     dest_station: "",
  //     seat_no: "",
  //     seat_type: "",
  //     passenger_name: "",
  //     passenger_id: "",
  //   },
  // ];
console.log(tickets)
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      {Array.isArray(tickets)&&tickets.map((ticket, index) => (
        <div className="container" style={{ width: "50%" }}>
          <h1>Ticket #{index + 1} Details</h1>
          <div className="ticket-info">
            <div className="ticket-item">
              <strong>Ticket Number:</strong> {ticket.ticket_no}
            </div>
            <div className="ticket-item">
              <strong>Train Number:</strong> {ticket.train_no}
            </div>
            <div className="ticket-item">
              <strong>Source Station:</strong> {ticket.scr_station}
            </div>
            <div className="ticket-item">
              <strong>Destination Station:</strong> {ticket.dest_station}
            </div>
            <div className="ticket-item">
              <strong>Seat Number:</strong> {ticket.seat_no}
            </div>
            {/* <div className="ticket-item">
              <strong>Seat Type:</strong> {ticket.seat_type}
            </div> */}
            <div className="ticket-item">
              <strong>Passenger Name:</strong> {ticket.passenger_name}
            </div>
            <div className="ticket-item">
              <strong>Passenger ID:</strong> {ticket.passenger_id}
            </div>
          </div>
          <style jsx>{`
            .container {
              max-width: 800px;
              margin: 20px auto;
              padding: 20px;
              background-color: #f0f0f0;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            h1 {
              text-align: center;
              margin-bottom: 20px;
            }

            .ticket-info {
              margin-top: 20px;
            }

            .ticket-item {
              margin-bottom: 10px;
            }

            .ticket-item strong {
              margin-right: 5px;
            }
          `}</style>
        </div>
      ))}
    </div>
  );
}

export default Ticket;
