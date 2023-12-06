import React, { useState } from 'react';
import './Symptom.css'
import { Link } from 'react-router-dom';

const Age = () => {
  const [selectedAge, setSelectedAge] = useState(40); // Default age value

  const handleAgeChange = (event) => {
    setSelectedAge(parseInt(event.target.value, 10));
  };

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
      <div className='nextbtn'>
      <button>
        <Link className='nextlink' to="/symptom/question"> Next</Link>
        </button>
      </div>
    </div>
    
    </div>
  
  );
}

export default Age;
