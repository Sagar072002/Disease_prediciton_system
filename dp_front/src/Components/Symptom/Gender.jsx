import React, { useState } from 'react';
import './Symptom.css';
import { Link } from 'react-router-dom';

const Gender = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div className="gender-div">
      <div className="gender">
        <h2>Choose your gender</h2>
        <div>
          <div
            className={`firstdiv ${selectedGender === 'Male' ? 'selected' : ''}`}
            onClick={() => handleGenderClick('Male')}
          >
            Male
          </div>
          <div
            className={`seconddiv ${selectedGender === 'Female' ? 'selected' : ''}`}
            onClick={() => handleGenderClick('Female')}
          >
            Female
          </div>
        </div>
       
        <div className="next-button-container">
              {selectedGender && <button className="next-button">
                <Link className='nextlink' to="/symptom/age">Next</Link>
                </button>}
            </div>
      </div>
    </div>
  );
};

export default Gender;
