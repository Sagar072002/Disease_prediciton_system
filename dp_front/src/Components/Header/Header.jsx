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
    <a className="active" href="#home">Home</a>
    <Link className="active" to="/">Home</Link>
    <a href="#">About</a>
    <a href="#">Prediction</a>
    <a href="#">Appointment</a>
    <a href="#">Contact</a>
    <a href="#">Login</a>
    <Link to="/contact">Contact</Link>
    <Link to="/login">Login</Link>
    {/* <a href="#">Register</a> */}
    </div>
  </div>
   )
  }
  export default Header