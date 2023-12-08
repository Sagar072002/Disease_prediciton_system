import React, { useContext, useState, useEffect } from 'react';
import './Symptom.css';
import BookData from '../Search/Data.json';
import SearchBar from '../Search/SearchBar.jsx'
import { FaTimes } from 'react-icons/fa';
import img1 from '../../assets/men_front.png'
import img2 from '../../assets/men_back.jpeg'
import PredictionService from "../../services/prediction_service.jsx"
import { SiteContext } from '../../context/siteContext';
import { saveUserState } from '../../services/user_service';
import { SymList } from './SymList.js'

const Symptom = () => {
  
  const { userState, setUserState } = useContext(SiteContext)
  const [currentImage, setCurrentImage] = useState(1);
  const [result, setResult] = useState("Prediciton not made yet!!");
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  useEffect(()=>{
    if(userState.SymList){
    let syms = userState.SymList
    setSelectedSymptoms(syms);}
  },[])

  useEffect(()=>{
    let newState = {...userState}
      newState.SymList = selectedSymptoms
      console.log('New UserState :',newState);
      setUserState(newState)
      saveUserState(newState)
  },[selectedSymptoms])

  const toggleImage = () => {
    setCurrentImage((prevImage) => (prevImage === 1 ? 2 : 1));
  };

  // Function to handle selected symptoms from SearchBar
  const handleSymptomSelect = (selectedSymptom) => {
    // Update the state with the selected symptom
    if (!selectedSymptoms.includes(selectedSymptom)) {
      setSelectedSymptoms([...selectedSymptoms, selectedSymptom]);
      // console.log('Symptoms :',selectedSymptoms);
    }
    else {
      // Show an alert if the symptom is already present
      alert('This symptom is already selected.');
    }
  };

  const handleRemoveSymptom = (index) => {
    const updatedSymptoms = [...selectedSymptoms];
    updatedSymptoms.splice(index, 1);
    setSelectedSymptoms(updatedSymptoms);
    // console.log('Symptoms :',selectedSymptoms);
  };

  const handleSubmit = () => {
    // console.log('User state :', userState);
    // let newState = {...userState}
    // newState.path = "/symptom/predict"
    // newState.SymList = selectedSymptoms
    // console.log('New UserState :',newState);
    // setUserState(newState)
    // saveUserState(newState)
    console.log("Selected Symptoms:", selectedSymptoms);
    PredictionService.getRes(SymList).then((res)=>{
      console.log('Result of pred :',res.data);
      setResult(res.data)
    }).catch((err)=>{
      console.log('Pred error :',err);
    });
  };

  return (
    <>
    <div className="symptom-div">
      <div className="main-div">
        <div className="left-side">
          <h2>Add your symptoms</h2>
          <p>Add as many symptoms as you can for the most accurate results.</p>
          <SearchBar
            placeholder="Enter a Symptom..."
            data={BookData}
            onSymptomSelect={handleSymptomSelect}
          />
{selectedSymptoms.length === 0 && (
            <div className="content-div">
              <p>Please try to add at least three symptoms</p>
            </div>
          )}
          {selectedSymptoms.length > 0 && (
            <div className="content-div">
              <ul>
                {selectedSymptoms.map((symptom, index) => (
                  <li key={index}>
                    {symptom}
                    <FaTimes className='crossitem' onClick={() => handleRemoveSymptom(index)} />
                  </li>
                ))}
              </ul>
            </div>
          )}
          {selectedSymptoms.length >= 3 && (
        <button onClick={handleSubmit}>Submit</button>
        )}
        <div>Prediction : {result}</div>
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










