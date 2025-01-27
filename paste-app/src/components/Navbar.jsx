import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex gap-4 justify-center items-center p-4 bg-gray-400 text-white">
    <NavLink to="/" className="hover:font-bold">Home</NavLink>
    <NavLink to="/pastes" className="hover:font-bold">Paste</NavLink>
    <NavLink to={`/edit/${paste._id}`}>Edit</NavLink>

  </div>
  
  )
}

export default Navbar