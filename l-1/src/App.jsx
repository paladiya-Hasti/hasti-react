import React from 'react'
import './App.css'
import User from './Compomonets/UserProps'
import UserState from './Compomonets/UserState'
import UserProps from './Compomonets/UserProps'
import Multieffect from './Compomonets/Multieffect'
import Timer from './Compomonets/Timer'
import Resize from './Compomonets/Resize'
const App = () => {
  return (

    //  is code ko hum jsx bol sakt hai
    <div >

     
    <div className='container'>
    <UserProps name="Netra" des="des2"/>
      <UserProps name="Hivansh" des="des3"/>
      <UserProps name="Hiva" des="des1" />
    </div>
      <UserState />
      <Multieffect/>
      <Timer/>
      <Resize/>
    </div>
  )
}

export default App