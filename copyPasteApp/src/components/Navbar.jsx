import React from 'react'
import { NavLink } from 'react-router'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='Navbar'>
      <NavLink  to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} id="nav">
            Home
      </NavLink>
      <NavLink to="/pastes" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} id="nav">
        Pastes
      </NavLink>
    </div>
  )
}
export default Navbar
