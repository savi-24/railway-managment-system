import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

import { UserContext } from "./UserProvider";

function Seats() {
  const location = useLocation();
  const { trainDetails } = location.state;
  const { train_no } = trainDetails;
  console.log(trainDetails);
  const [seatDetails, setSeatDetails] = useState([]);
const {user}=useContext(UserContext)
const navigate = useNavigate();


  useEffect(() => {
    if (train_no) {
      // Fetch seat details for the selected train
      axios
        .get(`http://localhost:8081/api/seats/${train_no}`)
        .then((res) => {
          console.log(res.data);
          setSeatDetails(res.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the seat details:", error);
        });
    }
  }, [train_no]);
  function handleBooking(seat) {
    console.log(seat,user)
    const formData={train_no, passenger_id:user?.passenger_id,passenger_name:user?.passenger_name ,seat_no:seat.seat_no}
    axios.post("http://localhost:8081/ticket", formData).then((res) => {
        console.log(res);
        if (res.data == "Booked and Updated Successfully") {
            axios
            .get(`http://localhost:8081/api/seats/${train_no}`)
            .then((res) => {
              console.log(res.data);
              setSeatDetails(res.data);
            })
            .catch((error) => {
              console.error("There was an error fetching the seat details:", error);
            });
        }
      });

  }
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Seat Details for Train Number {train_no}</h1>
        <table className="seat-table">
          <thead>
            <tr>
              <th>Seat Number</th>
              <th>Seat Availability</th>
              <th>Seat Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {seatDetails.map((seats, index) => (
              <tr key={index}>
                <td>{seats.seat_no}</td>
                <td>{seats.seat_status}</td>
                <td>{seats.seat_type}</td>

                <td>
                  <button
                    onClick={() => handleBooking(seats)}
                    disabled={seats.seat_status == "Booked"}
                  >
                    {" "}
                    Book Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Seats;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Seats() {
//     const [seats, setSeats] = useState([]);

//     useEffect(() => {
//         // Fetch seat information from the server
//         axios.get('http://localhost:8081/api/seats')
//             .then(res => {
//                 setSeats(res.data);
//             })
//             .catch(error => {
//                 console.error("There was an error fetching the seat data:", error);
//             });
//     }, []);

//     return (
//         <div className="container" style={styles.container}>
//             <h1>Seat Information</h1>
//             <table style={styles.table}>
//                 <thead>
//                     <tr>
//                         <th>Seat Number</th>
//                         <th>Seat Type</th>
//                         <th>Seat Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {seats.map((seat, index) => (
//                         <tr key={index}>
//                             <td>{seat.seat_number}</td>
//                             <td>{seat.seat_type}</td>
//                             <td>{seat.seat_status}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// const styles = {
//     container: {
//         maxWidth: '1000px',
//         margin: '20px auto',
//         padding: '20px',
//         backgroundColor: '#34495e',
//         borderRadius: '10px',
//         boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//         color: '#fff',
//     },
//     table: {
//         width: '100%',
//         borderCollapse: 'collapse',
//         marginTop: '20px',
//         backgroundColor: '#2c3e50',
//         color: '#fff',
//     },
// };

// export default Seats;
