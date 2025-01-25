import React, { useEffect, useState } from "react";
import "./UserState.css";

const UserState = () => {
  const [count, setCounter] = useState(0);

  useEffect(()=>{
alert("hello")
  })
   
  return (
    <div className="container-1">
      <h1>Count: {count}</h1>
      <button onClick={()=>{ setCounter( count + 1)}}>Click</button>
    </div>
  );
};

export default UserState;
