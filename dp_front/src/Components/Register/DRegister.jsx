import React from 'react'
import "./register.css"
import { Link } from 'react-router-dom'

const DRegister = () => {
  return (
    <>
    <div className="doctor-register">
        <div className="doctor-container">
            <h2>Doctor Registration</h2>
        <div className="doctor-main">
          <div>
          <div className="box">
            <label htmlFor="">Name:</label>
            <input type="text" name="" placeholder='Your name' id="" />
          </div>
          <div className="box">
            <label htmlFor="">Email:</label>
            <input type="email" name="" placeholder='Your email' id="" />
          </div>
          <div className="box">
            <label htmlFor="">Phone:</label>
            <input type="number" name="" placeholder='Your phone' id="" />
            
          </div>
          <div className="box">
            <label htmlFor="">Password:</label>
            <input type="password" name="" placeholder='Password' id="" />
          </div>
          <div className="box">
            <label htmlFor="">Confirm password:</label>
            <input type="password" name="" placeholder='Confirm Password' id="" />
          </div>
         
          </div>
          <div>
          <div className="box">
            <label htmlFor="">Price:</label>
            <input type="number" name="" placeholder='Your price' id="" />
          </div>
          <div className="box">
            <label htmlFor="">Qualifications:</label>
            <input type="text" name="" placeholder='Your qualifications ' id="" />
          </div>
          <div className="box">
            <label htmlFor="">Specialization:</label>
            <input type="text" name="" placeholder='Area of Specialization ' id="" />
          </div>
          <div className="box">
            <label htmlFor="">Available Time Slots:</label>
            <input type="text" name="" placeholder='Time slots' id="" />
          </div>
          <div className="box ">
            <label htmlFor="">Upload Your Image:</label>
            <input type="file" name="" id="" />
          </div>
         
          
          </div>
          <div>
          <div className="box">
            <label htmlFor="">Address:</label>
          <textarea name="" id="" cols="30" rows="10" placeholder='Your address'></textarea>
          </div>
          <div className="box">
            <label htmlFor="">About you:</label>
          <textarea name="" id="" cols="30" rows="10" placeholder='Your Introduction'></textarea>
          </div>
          <p className='signin'>
        Already an user? <Link to="/doctorlogin"><span>  Sign in  </span></Link>
      </p>
          <div className='box'>
          <button>Register</button>
          </div>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default DRegister