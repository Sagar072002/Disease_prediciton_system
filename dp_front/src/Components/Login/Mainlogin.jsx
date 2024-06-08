import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './login.css'; // Import the CSS file

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
          className={selectedOption === 'user' ? 'selected' : ''}
          onClick={() => handleOptionClick('user')}
        >
          User
        </div>
        
        {/* Doctor option */}
        <div
          className={selectedOption === 'doctor' ? 'selected' : ''}
          onClick={() => handleOptionClick('doctor')}
        >
          Doctor
        </div>
      </div>
      <div className={`btns ${!selectedOption ? 'hidden' : ''}`}>
        <button onClick={handleResetClick}>
          Reset
        </button>
        <Link to={selectedOption === 'user' ? "/login" : "/doctorlogin"}>
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Mainlogin;
