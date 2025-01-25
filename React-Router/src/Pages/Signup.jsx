import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router'
const Signup = () => {
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
 const navigate=useNavigate()
  const handlesubmit=(e)=>{
    e.preventDefault()
    
    if(! email || !username || !password){
      console.error("All fields are required.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Invalid email format.");
      return;
    }

    // Log the form data as an object
    const formData = {
      username,
      email,
      password,
    };

    console.log("Form Submitted:", formData);
    navigate("/signin")

      
    setUsername("");
    setEmail("");
    setPassword("");
  
  }
  return (
    <div>
    
      <form onSubmit={handlesubmit}>
      <h2>SIGNUP</h2>
     <div>
     <label htmlFor="">User Name :</label>
     <input type="text" placeholder='user name' value={username} onChange={(e)=>setUsername(e.target.value)} required/>
     </div>
     <div>
     <label htmlFor="">Email:</label>
     <input type="text" placeholder='email'  value={email} onChange={(e)=>setEmail(e.target.value)} required/>
     </div>
     <div>
     <label htmlFor="">Password:</label>
     <input type="text" placeholder='password'  value={password} onChange={(e)=>setPassword(e.target.value)} required />
     </div>
   <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Signup