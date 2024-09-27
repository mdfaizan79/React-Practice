import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'

function Navbar() {
  return (
    // <div>
    //     <ul>
    //         <li>
    //         {/* we will not use anchor tag becoz it refresh all page
    //         <a href="/">Home</a>  */}
    //         <Link to="/">Home</Link>
    //         </li>

    //         <li>
    //         <Link to="/about">About</Link> 
    //         </li>

    //         <li>
    //         <Link to="/dashboard">Dashboard</Link>
    //         </li>
    //     </ul>
    // </div>

//NavLink tag
    <div>
    <ul>
      <li>
        <NavLink 
          to="/" 
          // Optional: add activeClassName for custom styling
          style={({ isActive }) => ({
            color: isActive ? 'yellow' : 'blue', // Change color based on active state
            textDecoration: 'none', // Remove underline
            padding: '14px 16px' // Add padding
          })}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink 
          to="/about" 
          style={({ isActive }) => ({
            color: isActive ? 'yellow' : 'blue',
            textDecoration: 'none',
            padding: '14px 16px'
          })}
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink 
          to="/dashboard" 
          style={({ isActive }) => ({
            color: isActive ? 'yellow' : 'blue',
            textDecoration: 'none',
            padding: '14px 16px'
          })}
        >
          Dashboard
        </NavLink>
      </li>
    </ul>
  </div>
  )
}

export default Navbar