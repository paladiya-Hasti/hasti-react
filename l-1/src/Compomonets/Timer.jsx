import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [seconds,setSeconds]=useState(0)

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
      <h1>Seconds:{seconds}</h1>
    </div>
  )
}

export default Timer