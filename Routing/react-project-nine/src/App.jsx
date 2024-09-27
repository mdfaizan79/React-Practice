import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound';
import Report from './Components/Report';
import MockTest from './Components/MockTest';
import Courses from './Components/Courses';
const router = createBrowserRouter(
  [
    {
      //Iss wale path pr
      path:"/",
      //ye wala element load krna hai
      element :( 
      <div>
        <Navbar />
        <Home />
      </div>
      ),
      
    },
    {
      path:"/about",
      //about wala element load krna hai
      element : (
      <div>
        <Navbar />
        <About/>
      </div>
          
      ),
    },
    {
      path: '/dashboard',
      element: (
        <div>
          <Navbar />
          <Dashboard />
        </div>
      ),
      // for nested routing
      children: [
        {
          path: 'courses',
          element: <Courses />, // Courses component for the /dashboard/courses path
        },
        {
          path: 'mock-tests',
          element: <MockTest />, // MockTest component for the /dashboard/mock-tests path
        },
        {
          path: 'report',
          element: <Report />, // Report component for the /dashboard/report path
        },
      ],
    },
    {
      path:'*',
      element:<NotFound />
    },
  ]
);

function App() {
  

  return (
    <>
      
      <div>
        
      <RouterProvider router={router} />
      </div>
      
        
    </>
  )
}

export default App
