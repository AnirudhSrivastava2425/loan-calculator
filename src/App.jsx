import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Loan from './pages/loan/Loan'
import Home from './pages/home/Home'
import SIP from './pages/sip/SIP'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/loan',
      element:<Loan/>
    },
    {
      path:'/sip',
      element:<SIP/>
    }
  ])
  return <RouterProvider router = {router}/>
}

export default App
