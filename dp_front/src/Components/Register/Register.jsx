import React from 'react';
import './Register.css';
import img from '../../assets/register.gif'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register-container">
  <div className="register-form">
    <div className="register-left">
      <h2>Registration form</h2>
      <div className="box">
        <i className="fa-solid fa-user" />
        <input type="text" name="" placeholder="Your Name" id="" />
      </div>
      <div className="box">
        <i className="fa-solid fa-envelope" />
        <input type="email" name="" placeholder="Your Email" id="" />
      </div>
      <div className="box">
        <i className="fa-solid fa-phone" />
        <input type="number" name="" placeholder="Your Number" id="" />
      </div>
      <div className="box">
        <i className="fa-solid fa-lock" />
        <input type="password" name="" placeholder="Password" id="" />
      </div>
      <div className="box lastbox">
        <i className="fa-solid fa-lock" />
        <input type="password" name="" placeholder="Confirm Password" id="" />
      </div>
      <button type="submit"> Register</button>
      <p>
        Already an user? <Link to="/login">Sign in now</Link>{" "}
      </p>
    </div>
    <div className="register-right">
      <img src={img} alt="" />
    </div>
  </div>
</div>

  )
}

export default Register