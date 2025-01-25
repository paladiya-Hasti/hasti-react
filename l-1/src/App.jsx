import React from 'react'
import './App.css'
import User from './Compomonets/UserProps'
import UserState from './Compomonets/UserState'
import UserProps from './Compomonets/UserProps'
const App = () => {
  return (

    //  is code ko hum jsx bol sakt hai
    <div className='container'>

     
     <UserProps name="Netra" des="des2"/>
      <UserProps name="Hivansh" des="des3"/>
      <UserProps name="Hiva" des="des1" />
      <UserState />
    </div>
  )
}

export default App