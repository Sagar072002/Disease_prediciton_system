import React from 'react'
import './header.css';
import img from "../../assets/dispred.png"
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      
    <img src={img} alt="" />
    <input className="searchbar" type="search" name="" placeholder='Search here...' id="" />
    <div className="links">
    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink>
    <a href="#">Appointment</a>
    
    <NavLink to="/symptom" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Prediction</NavLink>
    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact</NavLink>
    {/* <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Login</NavLink> */}
    {/* <a href="#">Register</a> */}
    </div>
  </div>
   )
  }
  export default Header