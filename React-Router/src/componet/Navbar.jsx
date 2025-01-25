import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='nav'>
    
      <ul>
        <li>
     
          <NavLink to="/"  >Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" >About</NavLink>
        </li>
        <li>
          <NavLink to="/dashbored" >Dashbored</NavLink>
        </li>
        <li>
          <NavLink to="/signup" >Signup</NavLink>
        </li>
        <li>
          <NavLink to="/signin" >Signin</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar