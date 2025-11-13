import React, { useState } from "react";
import "./signup.css";
import {  useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/user`, user, {
        headers: { "Content-Type": "application/json" },
      });
      navigate("/");
      console.log("User added successfully");
    } catch (error) {
      console.error("Axios Error:", error);
    }
  };

  return (
    <div id="main1" className="d-flex justify-content-center align-items-center vh-100">
      <div className="addUser1">
        <h3>Sign Up</h3>
        <form className="addUserForm" onSubmit={submitForm}>
          <div className="inputGroup">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              autoComplete="off"
              onChange={inputHandler}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="inputGroup">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              onChange={inputHandler}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="inputGroup">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
            <p>Already Have An account? <a href="/" style={{textDecoration:"none",color:"lightblue"}}>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
