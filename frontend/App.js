import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Switch, Route ,Router} from 'react-router-dom';

import Login from "./components/Login"; //
import Homepage from "./components/Homepage";
import SignIn from "./components/SignIn";
import Train from "./components/Train";
import Seats from "./components/Seats";

import Station from "./components/Station";
import Train_details from "./components/Train_details";
import { UserProvider } from "./components/UserProvider";
import Ticket from "./components/Ticket";
// import Passenger from './Passenger';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/train" element={<Train />} />
          <Route path="/station" element={<Station />} />
          <Route path="/train/details" element={<Train_details />} />
          <Route path="/seats" element={<Seats />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
