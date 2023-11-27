import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
    <div className="contact-form">
        <div className="left-side">
            <h2>Contact Us:</h2>
            <div className="box">
            <i class="fa-solid fa-location-dot"></i>
                <p><span>Address: </span> Dehradun, Uttarakhand, India</p>
            </div>
            <div className="box">
            <i className="fa-solid fa-phone" />
                <p><span>Phone: </span> +91-9876543210</p>
            </div>
            <div className="box">
            <i className="fa-solid fa-envelope" />
                <p><span>Email: </span> example@gmail.com</p>
            </div>
            <h2 className='follow'>Follow Us:</h2>
            <div className="icons">
            <i className="fa-brands fa-google"  />
          <i className="fa-brands fa-facebook-f"  />
          <i className="fa-brands fa-twitter"  />
          <i className="fa-brands fa-instagram"  />
            </div>
        </div>
        <div className="right-side">
            <h2>Get in Touch</h2>
            <input type="text" name="" placeholder='Full Name' id="" />
            <input type="email" name="" placeholder='Email' id="" />
            <input type="tel" name="" placeholder='Phone' id="" />
            <textarea name="" placeholder='Enter your message here...' id="" ></textarea>
            <button type="submit">Submit</button>
        </div>
    </div>
    </div>
  )
}

export default Contact