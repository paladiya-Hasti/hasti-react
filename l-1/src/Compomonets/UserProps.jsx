import React from 'react'
// import girl from '../img/gir.jpeg'
import "./User.css"
const UserProps = (props) => {
  return (
    <div className='user-container'>
      
      <p className='user-name'>{props.name}</p>
    
      <img className='user-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJezF4gmS8FaP92DjAPMoplV4HqM2jtTHpg&s"alt="" />
      <p className='user-des'>
        {props.des}
      </p>
    </div>
  )
}

export default UserProps