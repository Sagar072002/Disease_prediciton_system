import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Symptom.css';
import term from '../../assets/terms.jpg';
import { SiteContext } from '../../context/siteContext';
import { saveUserState } from '../../services/user_service';

const Terms = () => {

  const navigate = useNavigate()
  const { userState, setUserState } = useContext(SiteContext)
  const [isChecked, setIsChecked] = useState(false);

  useEffect(()=>{
    if(userState.path){
      // console.log('Navigating to :',userState.path);
      navigate(userState.path)
    }
  },[])

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const onNext = ()=>{
    // console.log('User state :', userState);
    let newState = {...userState}
    newState.path = "/symptom/predict"
    // console.log('New UserState :',newState);
    setUserState(newState)
    saveUserState(newState)
    navigate('/symptom/predict')
  }

  return (
    <div className="terms">
      <div className="main-div">
        <div className="termsdiv">
          <div className="leftdiv">
          <h2 className='termhead'>Terms Of Service</h2>
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
            <span>I read and accept terms of service</span>
            <div className="next-button-container">
              {isChecked &&
              // <Link className='nextlink' to="/symptom/gender">
                <button className="next-button" onClick={onNext}>

                Next
              </button>
              // </Link>
              }
            </div>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terms;
