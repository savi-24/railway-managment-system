import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Import useHistory hook

function Passenger() {
    const [passengerDetails, setPassengerDetails] = useState(null);
    const history = useHistory(); // Initialize useHistory hook

    useEffect(() => {
        axios.get('http://localhost:8081/api/passenger')
            .then(res => {
                setPassengerDetails(res.data);
            })
            .catch(error => {
                console.error("There was an error fetching the passenger data:", error);
            });
    }, []);

    if (!passengerDetails) {
        return <div>Loading...</div>;
    }

    // Function to handle ticket button click
    const handleTicketButtonClick = () => {
        history.push('/ticket'); // Redirect to Ticket.jsx
    };

    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Passenger Details</title>
                <style>
                    {`
                    body {
                        font-family: Arial, sans-serif;
                        background-image: url('background.jpg'); /* Replace 'background.jpg' with your image file */
                        background-size: cover;
                        background-repeat: no-repeat;
                        margin: 0;
                        padding: 0;
                    }

                    .container {
                        max-width: 800px;
                        margin: 20px auto;
                        padding: 20px;
                        background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }

                    h1 {
                        text-align: center;
                        margin-bottom: 20px;
                    }

                    .details {
                        margin-bottom: 20px;
                    }

                    .status {
                        text-align: center;
                    }

                    .ticket-button {
                        padding: 10px 20px;
                        background-color: #007bff;
                        color: #fff;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        margin-top: 20px;
                    }
                    `}
                </style>
            </head>
            <body>
                <div className="container">
                    <h1>Passenger Details</h1>
                    <div className="details">
                        <div><strong>Passenger Name:</strong> {passenger.passenger_name}</div>
                        <div><strong>Passenger ID:</strong> {passenger.passenger_id}</div>
                        <div><strong>Age:</strong> {passenger.age}</div>
                        <div><strong>Gender:</strong> {passenger.gender}</div>
                        <div><strong>Phone:</strong> {passenger.phone_no}</div>
                    </div>
                    <div className="status">Current Status</div>
                    <button className="ticket-button" onClick={handleTicketButtonClick}>Ticket</button>
                </div>
            </body>
        </html>
    );
}

export default Passenger;