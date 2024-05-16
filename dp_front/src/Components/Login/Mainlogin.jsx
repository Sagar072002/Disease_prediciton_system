import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Mainlogin = () => {
  // State to track selected option
  const [selectedOption, setSelectedOption] = useState(null);

  // Handler function to update selected option
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  // Handler function to reset selected option
  const handleResetClick = () => {
    setSelectedOption(null);
  };

  return (
    <div className="mainlogindiv">
      <h2>LOGIN AS:</h2>
      <div className='options'>
        {/* User option */}
        <div
          style={{
            padding: '10px',
            margin: '5px',
            cursor: 'pointer',
            backgroundColor: selectedOption === 'user' ? '#fff' : 'transparent',
            color: selectedOption === 'user' ? 'black' : 'white'
          }}
          onClick={() => handleOptionClick('user')}
        >
          User
        </div>
        
        {/* Doctor option */}
        <div
          style={{
            padding: '10px',
            margin: '5px',
            cursor: 'pointer',
            backgroundColor: selectedOption === 'doctor' ? '#fff' : 'transparent',
            color: selectedOption === 'doctor' ? 'black' : 'white'
          }}
          onClick={() => handleOptionClick('doctor')}
        >
          Doctor
        </div>
        
       
        
        {/* Render Reset option only if an option is selected */}
        
      </div>
      <div className='btns'> 
        {selectedOption && (
          <button
            onClick={handleResetClick}
          >
            Reset
          </button>
        )}
        {/* Render Next button if an option is selected */}
        {selectedOption && (
          <Link to={selectedOption === 'user' ? "/login" : "/doctorlogin"}>
            <button>Next</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Mainlogin;
