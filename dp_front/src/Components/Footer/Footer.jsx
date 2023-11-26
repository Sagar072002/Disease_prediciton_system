import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
  <div className="first-footer">
    <div className="footer-left">
      <div>
        <h2>Quick Links</h2>
        <a href="">About Us</a>
        <a href="">Careers</a>
        <a href="">Terms of Use</a>
        <a href="">Locations</a>
      </div>
      <div>
        <h2>Our Team</h2>
        <a href="">For Employees</a>
        <a href="">For Medical Professionals</a>
        <a href="">For Vendors</a>
        <a href="">For Volunteers</a>
      </div>
      <div>
        <h2>Policies</h2>
        <a href="">Privacy Policy</a>
        <a href="">Cookie Policy</a>
        <a href="">Editorial Policy</a>
        <a href="">Advertising Policy</a>
      </div>
      <div>
        <h2>Follow us</h2>
        <a href="">
          {" "}
          <i className="fa-brands fa-google" />
          Google
        </a>
        <a href="">
          <i className="fa-brands fa-twitter" />
          Twitter
        </a>
        <a href="">
          <i className="fa-brands fa-instagram" />
          Instagram
        </a>
        <a href="">
          <i className="fa-brands fa-facebook-f" />
          Facebook
        </a>
      </div>
    </div>
    <div className="footer-right">
      <div>
        <h3>Sign Up for our free daily Newsletter</h3>
        <div className="subscribe">
          <input
            type="email"
            name=""
            placeholder="Enter your email address"
            id=""
          />
          <button type="submit">Subscribe</button>
        </div>
        <p>
          By clicking <span>"Subscribe"</span>, I agree to the Terms and
          Conditions.
        </p>
      </div>
      <div className="getapp">
        <h2>Get our App on:</h2>
        <div className="getbuttons">
          <button>
            <i className="fa-brands fa-google-play" />
            <p className="gettext">
              Get it on <br /> <span className="getspan">Google Play</span>{" "}
            </p>
          </button>
          <button >
            <i className="fa-brands fa-apple" />
            <p className="gettext">
              {" "}
              Download on  <br /> <span className="getspan">
                App Store
              </span>{" "}
            </p>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="second-footer">
    <h3>Copyright © 2023 Disease Prediction. All rights reserved.</h3>
  </div>
</footer>

  )
}

export default Footer