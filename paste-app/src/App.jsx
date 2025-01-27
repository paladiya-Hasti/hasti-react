
import React from 'react'
import Navbar from './components/Navbar'
import Router from './router/Router'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Paste from './pages/Paste';
import View from './pages/View';
import EditPage from './pages/Edit';

// import "tailwindcss";



const router =createBrowserRouter(
  [
    {
      path:'/',
      element:<div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:'/pastes',
      element:<div>
          <Navbar/>
          <Paste/>
      </div>
    },
    {
      path:'/pastes/:id',
      element:<div>
          <Navbar/>
          <View/>
      </div>
    }, {
      path:'/edit/:id',
      element:<div>
          <Navbar/>
          <EditPage/>
      </div>
    }
  ]
)
const App = () => {
  return (
    <div>
    
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App