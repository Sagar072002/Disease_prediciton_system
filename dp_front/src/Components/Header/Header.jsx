import React from 'react'
import './header.css';
import img from "../../assets/dispred.png"

const Header = () => {
  return (
    <div className="header">
    <img src={img} alt="" />
    <input className="searchbar" type="search" name="" placeholder='Search here...' id="" />
    <div className="links">
    <a className="active" href="#home">Home</a>
    <a href="#">About</a>
    <a href="#">Prediction</a>
    <a href="#">Appointment</a>
    <a href="#">Contact</a>
    <a href="#">Login</a>
    {/* <a href="#">Register</a> */}
    </div>
  </div>
  )
}

export default Header




