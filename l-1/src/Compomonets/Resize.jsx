import React, { useEffect, useState } from 'react'

const Resize = () => {
  const [windowwidth,setWindowWidth]=useState(window.innerWidth)

  useEffect(()=>{
const handleResize=()=>setWindowWidth(window.innerWidth)

window.addEventListener('resize',handleResize)
return()=>{
  window.addEventListener('resize',handleResize)
}
  },[])
  return (
    <div>Window Width :{windowwidth}px</div>
  )
}

export default Resize