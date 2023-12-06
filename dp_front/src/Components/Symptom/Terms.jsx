import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Symptom.css';
import term from '../../assets/terms.jpg';

const Terms = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="terms">
      <div className="main-div">
        <div className="termsdiv">
          <div className="leftdiv">
          <h2>Terms Of Service</h2>
            <p>Before using the checkup, please read the Terms of Service and remember:</p>
            <ul>
              <li><span>Checkup isn't a diagnosis: </span> It's only for your information and not a qualified medical opinion.</li>
              <li><span>Checkup isn't for emergencies: </span>Call your local emergency number right away when there's a health emergency.</li>
              <li><span>Your data is safe: </span>The information you give won't be shared or used to identify you.</li>
            </ul>
          </div>
          <div className="rightdiv">
          <img src={term} alt="" />
          </div>
        </div>
        <div className="form">
          <form action="">
            <input
              type="checkbox"
              name=""
              id=""
              required
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span>I read and accept Terms of service</span>
            <div className="next-button-container">
              {isChecked &&
              <Link className='nextlink' to="/gender">
                <button className="next-button">

                Next
              </button>
              </Link>
              }
            </div>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terms;
