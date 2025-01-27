import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Paste from '../pages/Paste'
import View from '../pages/View'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/paste' element={<Paste/>}/>
        <Route path='/paste/:id' element={<View/>}/>
        <Route path="/edit/:id" element={<EditPage />} />  {/* Route for edit page */}

      </Routes>
    </div>
  )
}

export default Router