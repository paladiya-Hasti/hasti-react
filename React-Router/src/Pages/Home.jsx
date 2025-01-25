import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
  const [count,setCount]=useState(0)
  let val=useRef(0)
  const navigate=useNavigate()

  let btnref=useRef()

  const handlesubmit=()=>{
navigate('/about')
  }

const handlecount=()=>{
  val.current=val.current+1
  console.log("val.current :",val.current);
  
  setCount(count+1)
}
const changeColor=()=>{
  btnref.current.style.backgroundColor="red"
}

useEffect(()=>{
  console.log("main ferse render hogya hu");
  
})
  return (
    <div>
      <button onClick={handlesubmit}>Move to about page</button>

   
      <h2>count:{count}</h2>
      <button  ref={btnref} onClick={handlecount}>increment</button>
      <button onClick={changeColor}>change color of 1st button</button>
    </div>
  )
}

export default Home