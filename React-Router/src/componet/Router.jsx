import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Dashbored from '../Pages/Dashbored'
import Param from '../Pages/Param'
import Signup from '../Pages/Signup'
import Signin from '../Pages/Signin'

const Router = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/dashbored' element={<Dashbored/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/student/:id' element={<Param/>}/>
      </Routes>
    </div>
  )
}

export default Router