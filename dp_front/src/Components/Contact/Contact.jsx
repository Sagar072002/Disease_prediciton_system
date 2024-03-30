import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <>
     
    <div className="contact">
    <div className="contact-form">
      <div className='first'>
        <div className="left-side">
          <div>
            <h2>Contact Us:</h2>
            <div className="box">
            <i class="fa-solid fa-location-dot"></i>
                <p><span>Address: </span> Dehradun, Uttarakhand, India</p>
            </div>
            <div className="box">
            <i className="fa-solid fa-phone" />
                <p><span>Phone: </span> +91-9876543210</p>
            </div>
            <div className="box lastbox">
            <i className="fa-solid fa-envelope" />
                <p><span>Email: </span> example@gmail.com</p>
            </div>
            </div>
            <div>
            <h2 className='follow'>Follow Us:</h2>
            <div className="icons">
              <p>          <i className="fa-brands fa-facebook-f"  />
 Facebook</p>
 <p>          <i className="fa-brands fa-twitter"  />
 Twitter</p>
 <p>          <i className="fa-brands fa-instagram"  />
Instagram</p>
            </div>
            </div>
        </div>
        <div className="right-side">
            <h2>Get in Touch</h2>
            <div className="inside-form">
              <div >
              <input type="text" name="" placeholder='First Name' id="" />
              <input type="email" name="" placeholder='Email' id="" />
            <input type="tel" name="" placeholder='Phone' id="" />
              <input type="text" name="" placeholder='Address' id="" />
              </div>
              <div >
              <input type="text" name="" placeholder='Last Name' id="" />

            <textarea name="" placeholder='Enter your message here...' id="" ></textarea>
              </div>
            </div>
            <button type="submit">Submit</button>
        </div>
        </div>
        <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.58771542243!2d77.93473251842983!3d30.32555080667374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1701330820972!5m2!1sen!2sin"
    width="50%"
    height="670px"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
    </div>
   
    </div>
    
    </>

  )
}

export default Contact