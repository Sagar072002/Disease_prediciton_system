import React, { useState } from 'react';
import './Symptom.css';
import BookData from '../Search/Data.json';
import SearchBar from '../Search/SearchBar.jsx'
import img1 from '../../assets/men_front.png'
import img2 from '../../assets/men_back.jpeg'
import term from '../../assets/terms.jpg';

const Symptom = () => {
    const [currentImage, setCurrentImage] = useState(1);

  const toggleImage = () => {
    setCurrentImage((prevImage) => (prevImage === 1 ? 2 : 1));
  };
  return (
    <>
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
            <input type="checkbox" name="" id="" required/>
            <span>i read and accept Terms of service</span> 
        <button>Next</button>
          </form>
      </div>
      </div>
    </div>
<div className="quesdiv">
<div className="questions">
  <h2>Please check all the statements below that apply to you</h2>
  <pre>Select one answer in each row</pre>
  <div className="row">
    <p>I have diabetes</p>
    <input type="radio" id="Yes" name="answer" defaultValue="Yes" />
  <label htmlFor="Yes">Yes</label>
  <input type="radio" id="No" name="answer" defaultValue="No" />
  <label htmlFor="No">No</label>
  <input
    type="radio"
    id="dontknow"
    name="answer"
  />
  <label htmlFor="dontknow">Don't Know</label>
  </div>
  <div className="row">
    <p>I have diabetes</p>
    <input type="radio" id="Yes" name="answer" defaultValue="Yes" />
  <label htmlFor="Yes">Yes</label>
  <input type="radio" id="No" name="answer" defaultValue="No" />
  <label htmlFor="No">No</label>
  <input
    type="radio"
    id="dontknow"
    name="answer"
  />
  <label htmlFor="dontknow">Don't Know</label>
  </div>
  <div className="row">
    <p>I have diabetes</p>
    <input type="radio" id="Yes" name="answer" defaultValue="Yes" />
  <label htmlFor="Yes">Yes</label>
  <input type="radio" id="No" name="answer" defaultValue="No" />
  <label htmlFor="No">No</label>
  <input
    type="radio"
    id="dontknow"
    name="answer"
  />
  <label htmlFor="dontknow">Don't Know</label>
  </div>
  <div className="row">
    <p>I have diabetes</p>
    <input type="radio" id="Yes" name="answer" defaultValue="Yes" />
  <label htmlFor="Yes">Yes</label>
  <input type="radio" id="No" name="answer" defaultValue="No" />
  <label htmlFor="No">No</label>
  <input
    type="radio"
    id="dontknow"
    name="answer"
  />
  <label htmlFor="dontknow">Don't Know</label>
  </div>
  <div className="row">
    <p>I have diabetes</p>
    <input type="radio" id="Yes" name="answer" defaultValue="Yes" />
  <label htmlFor="Yes">Yes</label>
  <input type="radio" id="No" name="answer" defaultValue="No" />
  <label htmlFor="No">No</label>
  <input
    type="radio"
    id="dontknow"
    name="answer"
  />
  <label htmlFor="dontknow">Don't Know</label>
  <button>Next</button>
  </div>
</div>
</div>


    <div className="gender-div">
      <div className="gender">
        <h2>Choose your gender</h2>
        <div>
        <div className="firstdiv">Male</div>
        <div className="seconddiv">Female</div>
        </div>
      </div>
    </div>
    <div className="symptom-div">
        <div className="main-div">
            <div className="left-side">
                <h2>Add your symptoms</h2>
                <p>Add as many symptoms as you can for the most accurate results.</p>
                <SearchBar placeholder="Enter a Symptom..." data={BookData} />
                <div className="content-div">
                    <p>Please try to add more than three symptom</p>
                </div>
            </div>
            <div className="right-side">
            <img
        src={
          currentImage === 1
            ? img1
            : img2
        }
        alt={`Image ${currentImage}`}
        
      />
                <button className='btn' onClick={toggleImage}><i className="fa-solid fa-rotate"></i> Rotate Model</button>
            </div>
        </div>
    </div>
    </>

  )
}

export default Symptom