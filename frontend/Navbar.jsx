import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserProvider";

function Navbar() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        height: "8%",
      }}
    >
      <div style={{ marginTop: "auto", marginBottom: "auto", display: "flex" }}>
        <img
          src="logo.png"
          alt="Logo"
          style={{ width: "100px", borderRadius: "25px" }}
        />
        <div
          style={{
            fontSize: "24px",
            marginTop: "auto",
            marginLeft: "40px",
            marginBottom: "auto",
          }}
        >
          Welcome, {user.passenger_name}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginBottom: "auto",
          marginLeft: "auto",
          marginTop: "auto",
        }}
      >
        <button
          onClick={() => navigate("/ticket")}
          style={{
            color: "black",
            fontWeight: "800",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            marginRight: "10px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          View Tickets
        </button>
        <button
          onClick={() => navigate("/train")}
          style={{
            color: "black",
            fontWeight: "800",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            marginRight: "10px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Train
        </button>
        <button
          onClick={() => navigate("/station")}
          style={{
            color: "black",
            fontWeight: "800",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            marginRight: "10px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Station
        </button>
        <button
          onClick={() => {
            navigate("/");
            setUser({});
          }}
          style={{
            color: "white",
            fontWeight: "800",
            backgroundColor: "red",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            marginRight: "10px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
