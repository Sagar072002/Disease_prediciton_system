import React, { useState } from 'react';
import './Symptom.css';
import BookData from '../Search/Data.json';
import SearchBar from '../Search/SearchBar.jsx'
import { FaTimes } from 'react-icons/fa';
import img1 from '../../assets/men_front.png'
import img2 from '../../assets/men_back.jpeg'


const Symptom = () => {
    const [currentImage, setCurrentImage] = useState(1);

  const toggleImage = () => {
    setCurrentImage((prevImage) => (prevImage === 1 ? 2 : 1));
  };
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  // Function to handle selected symptoms from SearchBar
  const handleSymptomSelect = (selectedSymptom) => {
    // Update the state with the selected symptom
    if (!selectedSymptoms.includes(selectedSymptom)) {
      setSelectedSymptoms([...selectedSymptoms, selectedSymptom]);
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
              <p>Please try to add more than three symptoms</p>
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
                <button>Next</button>
              )}
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










