import React, { useState } from 'react';
import './Symptom.css';
import BookData from '../Search/Data.json';
import SearchBar from '../Search/SearchBar.jsx'
import img1 from '../../assets/men_front.png'
import img2 from '../../assets/men_back.jpeg'

const Symptom = () => {
    const [currentImage, setCurrentImage] = useState(1);

  const toggleImage = () => {
    setCurrentImage((prevImage) => (prevImage === 1 ? 2 : 1));
  };
  return (
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
  )
}

export default Symptom