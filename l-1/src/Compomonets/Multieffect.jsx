import React, { useEffect, useState } from 'react'

const Multieffect = () => {
  const [count,setCount]=useState(0)
  const [seconds,setSeconds]=useState(0)

  useEffect(()=>{
    console.log("count changed : ",count);
    
  },[count])
  useEffect(()=>{
const intervaIld=setInterval(()=>{
  console.log(("setInterval started"));
  setSeconds(prevSeconds => prevSeconds + 1)
  
},1000)
return ()=>{ 
  console.log("time to stop");
  
  clearInterval(intervaIld)}
  },[])
  return (
    <div>
      <h1>count :{count}</h1>
      <button onClick={()=>setCount(count + 1)}>increment count</button>
      <h2>seconds:{seconds}</h2>
    </div>
  )
}

export default Multieffect