import React, { useState } from 'react';
import "./login.css";
import bcrypt from "bcryptjs";
import axios from "axios";
import {  Form, Button, Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setemail]=useState("");
 const [password,setpassword]=useState("");
 let navigate= useNavigate();


 const handlesubmit = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/users`);
      const users = response.data;
  
      const user = users.find((u) => u.email === email);
  
      if (!user) {
        alert("User does not exist. Please sign up first.");
        return;
      }
  
      const isPasswordMatch = await bcrypt.compare(password, user.password);
  
      if (!isPasswordMatch) {
        alert("Password does not match. Try again.");
        return;
      }
  
      if (email === "admin@gmail.com" && password === "admin") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
  
    } catch (error) {
      console.error("Error fetching users", error);
      alert("Something went wrong. Please try again.");
    }
  };
  
  
  
 
  return (
    <div className='loginbody'>

<Card id="paper1"className="shadow p-4" style={{ maxWidth: "400px", margin: "auto" }}>
        <Card.Body>
          <h3 className="text-center mb-4">Login to Kalyan</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label> <br></br>
             <input className="input" type="email" placeholder="Enter your email" value={email} onChange={(e)=>setemail(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label><br></br>
              <input className="input" type="password" placeholder="Enter your password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" className="w-100" onClick={handlesubmit}>Login</Button>
          </Form>
          <p className="text-center mt-3">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </Card.Body>
      </Card>
      
    </div>
  )
}

export default Login
