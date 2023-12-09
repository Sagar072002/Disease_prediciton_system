import React, { useState, useContext } from 'react';
import './Symptom.css';
import { Link, useNavigate } from 'react-router-dom';
import { SiteContext } from '../../context/siteContext';
import { saveUserState } from '../../services/user_service';

const Gender = () => {

  const navigate = useNavigate()
  const { userState, setUserState } = useContext(SiteContext)
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
  };

  const onNext = ()=>{
    // console.log('User state :', userState);
    let newState = {...userState}
    newState.path = "/symptom/age"
    newState.gender = selectedGender
    // console.log('New UserState :',newState);
    setUserState(newState)
    saveUserState(newState)
    navigate('/symptom/age')
  }

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
              {selectedGender && <button className="next-button" onClick={onNext}>
                {/* <Link className='nextlink' to="/symptom/age"> */}
                  Next
                  {/* </Link> */}
                </button>}
            </div>
      </div>
    </div>
  );
};

export default Gender;
