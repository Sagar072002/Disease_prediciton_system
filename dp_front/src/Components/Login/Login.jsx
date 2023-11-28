import React from 'react';
import './Login.css'
import img from '../../assets/login.gif'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className="login-container">
  <div className="login-form">
    <div className="login-left">
      <h2>Login form</h2>
      <div className="box">
        <i className="fa-solid fa-envelope" />
        <input type="email" name="" placeholder="Your Email" id="" />
      </div>
      <div className="box">
        <i className="fa-solid fa-lock" />
        <input type="password" name="" placeholder="Password" id="" />
      </div>
      <a href="" className='forgot'>Forgot Password?</a> <br />
      <button type="submit">Login</button>
      <p>
        Don't have an account? <Link to="/register">Sign up now</Link>{" "}
      </p>
      <p className="ortext">OR</p>
      <div className="loginbtn">
        <button type="submit" className="google">
          <i className="fa-brands fa-google" style={{ color: "#ffffff" }} />
        </button>
        <button type="submit" className="facebook">
          <i className="fa-brands fa-facebook-f" style={{ color: "#ffffff" }} />
        </button>
        <button type="submit" className="twitter">
          <i className="fa-brands fa-twitter" style={{ color: "#ffffff" }} />
        </button>
        <button type="submit" className="insta">
          <i className="fa-brands fa-instagram" style={{ color: "#ffffff" }} />
        </button>
      </div>
    </div>
    <div className="login-right">
      <img src={img} alt="" />
    </div>
  </div>
</div>

  )
}

export default Login




