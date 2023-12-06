import React, { useContext, useState } from 'react';
import './Symptom.css'
import { Link, useNavigate } from 'react-router-dom';
import { SiteContext } from '../../context/siteContext';
import { saveUserState } from '../../services/user_service';

const Age = () => {

  const navigate = useNavigate()
  const { userState, setUserState } = useContext(SiteContext)
  const [selectedAge, setSelectedAge] = useState(40); // Default age value

  const handleAgeChange = (event) => {
    setSelectedAge(parseInt(event.target.value, 10));
  };

  const onNext = ()=>{
    console.log('User state :', userState);
    let newState = {...userState}
    newState.path = "/symptom/question"
    newState.age = selectedAge
    console.log('New UserState :',newState);
    setUserState(newState)
    saveUserState(newState)
    navigate('/symptom/question')
  }

  return (
    <div className="age">
  <div className='agediv'>
    <h2>Select your Age</h2>
    <div className='range'>
      <input
        type="range"
        id="ageSlider"
        min={0}
        max={100}
        step={1}
        value={selectedAge}
        style={{ height: '30px' }}
        onChange={handleAgeChange}
      />
      <p>Selected Age: {selectedAge}</p>
      </div>
      <div className='nextbtn' onClick={onNext}>
      <button>
        {/* <Link className='nextlink' to="/symptom/question"> */}
           Next
           {/* </Link> */}
        </button>
      </div>
    </div>
    
    </div>
  
  );
}

export default Age;
