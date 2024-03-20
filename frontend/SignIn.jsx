import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    newUserId: "",
    confirmUserId: "",
    age: "",
    gender: "",
    phone_no: "", 
  });

  const formItems = [
    { name: "passenger_name", title: "Passenger Name" },
    { name: "passenger_id", title: "Passenger ID", type: "passenger_id" },
    {
      name: "re_enter_passenger_id",
      title: "Re-Enter Passenger ID",
      type: "passenger_id",
    },
    { name: "age", title: "Age", type: "number" },
    { name: "gender", title: "Gender" },
    { name: "phone_no", title: "Phone Number" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    // Log form data
    console.log(formData);
    const { passenger_id, re_enter_passenger_id } = formData;
    if (passenger_id !== re_enter_passenger_id) {
      alert("Password does not match");
    } else {
      axios.post("http://localhost:8081/signin", formData).then((res) => {
        console.log(res);
        if (res.data == "Signin Successfull") navigate("/");
      });
    }
    // You can perform further actions here, like sending the data to a server using AJAX
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div
      style={{
        backgroundImage: `url('./logintrain.jpg')`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px 10px 50px",
          boxShadow: "10px",
          width: "25%",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Enter Your Details</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "0px 20px",
          }}
        >
          {formItems.map(({ name, title, type }) => (
            <div
              key={name}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor={name}>{title}</label>
              <input
                type={type ? type : "text"}
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                required
              />
            </div>
          ))}
          <button
            type="submit"
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "4px",
              borderRadius: "4px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
