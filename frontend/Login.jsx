import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserProvider";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [passenger_name, setPassenger_name] = useState("");
  const [passenger_id, setPassenger_id] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8081/login", { passenger_name, passenger_id })
      .then((res) => {
        if (res.data?.msg == "Login Successfull") {
          console.log(res.data.data[0])
          setUser(res.data.data[0]);
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  }
  const handleSignIn = () => {
    // Redirect to sign in page
    navigate("/signin");
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: "url('./logintrain.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        className="login-form"
        style={{
          maxWidth: "700px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            className="form-group"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="passenger_name">Passenger Name:</label>
            <input
              type="text"
              id="passenger_name"
              name="passenger_name"
              value={passenger_name}
              onChange={(e) => setPassenger_name(e.target.value)}
              required
            />
          </div>
          <div
            className="form-group"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="passenger_id">Passenger ID:</label>
            <input
              type="text"
              id="passenger_id"
              name="passenger_id"
              value={passenger_id}
              onChange={(e) => setPassenger_id(e.target.value)}
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button
            style={{
              marginTop: "10px",
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "green",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
            type="submit"
            className="btn-submit"
          >
            Submit
          </button>
        </form>
        <div
          className="signin"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          <p>
            Don't have an account?{" "}
            <button onClick={handleSignIn} className="btn-signin">
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
