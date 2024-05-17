











import React, { useState } from 'react';
import diseasesData from './Detail.json';
import './Symptom.css'; // Import the CSS file

function Disease() {
  const [disease, setDisease] = useState('');
  const [diseaseInfo, setDiseaseInfo] = useState(null);

  const handleSearch = () => {
    if (disease && diseasesData.diseases[disease]) {
      setDiseaseInfo(diseasesData.diseases[disease]);
    } else {
      setDiseaseInfo(null);
      alert('Disease not found!');
    }
  };

  const handleClear = () => {
    setDisease('');
    setDiseaseInfo(null);
  };

  return (
    <div className="diseasecontainer">
      <h1>Disease Information</h1>
      <input 
        type="text" 
        value={disease} 
        onChange={(e) => setDisease(e.target.value)} 
        placeholder="Enter disease name" 
        className="input-field" // Use class name for input field
      />
      <button 
        onClick={handleSearch} 
        className="submit-btn" // Use class name for button
      >
        Submit
      </button>

      <button 
        onClick={handleClear} 
        className="clear-btn" // Use class name for clear button
      >
        Clear
      </button>

      {diseaseInfo && (
        <div className="info-container"> {/* Use class name for info container */}
          <h2>{diseaseInfo.disease_name}</h2>
          <p>{diseaseInfo.disease_detail}</p>

          <h3>Symptoms:</h3>
          <ul>
            {diseaseInfo.symptoms.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>

          <h3>Prevention:</h3>
          <ul>
            {diseaseInfo.prevention.map((prevention, index) => (
              <li key={index}>{prevention}</li>
            ))}
          </ul>

          <h3>Alternative name:</h3>
          <ul>
            {diseaseInfo.alternative.map((remedy, index) => (
              <li key={index}>{remedy}</li>
            ))}
          </ul>
          <h3>Treatment:</h3>
          <p>{diseaseInfo.treatment}
</p>
          <h3>Doctor:</h3>
          <p>{diseaseInfo.doctor}
</p>
        </div>
      )}
    </div>
  );
}

export default Disease;
