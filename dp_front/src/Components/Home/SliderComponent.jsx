import React, { useState } from 'react';
import Slider from "react-slick";
import { FaVirus, FaTooth, FaHeart, FaBone, FaFlask, FaHeartbeat, FaBrain, FaStethoscope, FaUserMd, FaAmbulance, FaHospital, FaSyringe, FaMicroscope } from 'react-icons/fa'; // Importing icons from react-icons
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Home.css';

const SliderComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track active index

  const doctorSpecializations = [
    { specialization: 'Virologist', icon: <FaVirus /> },
    { specialization: 'Dentist', icon: <FaTooth /> },
    { specialization: 'Cardiologist', icon: <FaHeart /> },
    { specialization: 'Orthopedist', icon: <FaBone /> },
    { specialization: 'Neurologist', icon: <FaBrain /> },
    { specialization: 'Cardiovascular Surgeon', icon: <FaHeartbeat /> },
    { specialization: 'General Practitioner', icon: <FaStethoscope /> },
    { specialization: 'Surgeon', icon: <FaUserMd /> },
    { specialization: 'Physician', icon: <FaAmbulance /> },
    { specialization: 'Hospitalist', icon: <FaHospital /> },
    { specialization: 'Immunologist', icon: <FaSyringe /> },
    { specialization: 'Pathologist', icon: <FaMicroscope /> }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle active state
  };

  return (
    <div className="slide">
      <div className="head">Health service for you</div>
      <Slider {...settings}>
        {doctorSpecializations.map((doctor, index) => (
          <div 
            key={index} 
            className={`service ${index === activeIndex ? 'active' : ''}`} 
            onClick={() => handleCardClick(index)} // Add click event handler
          >
            <div className='dctr-icon'>
            {doctor.icon}
            </div>
            
            <p className='ds'>{doctor.specialization}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponent;
