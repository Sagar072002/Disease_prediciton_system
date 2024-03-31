import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom'
import doctor from '../../assets/doctor.png';



const Dlogin = () => {

 
  return (
    <>
    <div className="login-container">
  <div className="login-form">
    <div className="login-left">
    <form >

      <h2>Doctor Login </h2>
      <div className='formbox'>

      <div className="box">
        <i className="fa-solid fa-user" />
        <div>
        <input  type="text"  placeholder="Username"  
                      autoComplete="off"
                      name="username"
                      id="username"
                      />
        
                    </div>
      </div>
      <div className="box">
        <i className="fa-solid fa-lock" />
        <div>
        <input  type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      
                      />
                    
                    </div>
      </div>
      </div>

      <a href="" className='forgot'>Forgot Password?</a> <br />
      <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/doctor">Sign up now</Link>{" "}
      </p>
      
    </div>
    <div className="login-right">
      <img src={doctor} alt="" />
    </div>
  </div>
</div>

  </>
  )
}

export default Dlogin