import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router";
const Signin = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
 const navigate=useNavigate()
  const handlesubmit=(e)=>{
    e.preventDefault()
    
    if(! email ||  !password){
      console.error("All fields are required.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Invalid email format.");
      return;
    }

    // Log the form data as an object
    const formData = {
      email,
      password,
    };

    console.log("Form Submitted:", formData);
    navigate("/home")

      
    setUsername("");
    setEmail("");
    setPassword("");
  
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <h2>SIGNIN</h2>
              <div>
          <label htmlFor="">Email:</label>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Signin;
