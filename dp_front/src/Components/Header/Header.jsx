import React from 'react'
import './header.css';
import img from "../../assets/dispred.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      
    <img src={img} alt="" />
    <input className="searchbar" type="search" name="" placeholder='Search here...' id="" />
    <div className="links">
    <Link className="active" to="/">Home</Link>
    <Link to="/about">About</Link>
    <a href="#">Appointment</a>
    
    <Link to="/symptom">Prediction</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/login">Login</Link>
    {/* <a href="#">Register</a> */}
    </div>
  </div>
   )
  }
  export default Header