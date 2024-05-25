import React, { useEffect, useState } from 'react';
import "./doctor.css";
import { FaStar, FaUserMd, FaArrowRight } from 'react-icons/fa';
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import doctorService from '../../services/doc_service';

const FindDoctor = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [doctors, setDoctors] = useState([]);

  function getToken() {
    const saved = localStorage.getItem("docDetails");
    let initial = "";
    if (saved) {
      initial = JSON.parse(saved).Token;
      initial = initial.toString();
    }
    return initial;
  }

  useEffect(() => {
    doctorService.getAll().then((res) => {
      console.log("Doctors: ", res.data);
      setDoctors(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    setSearchQuery(''); // Reset search query when filter changes
  };

  const filteredDoctors = filter === 'All' ? doctors : doctors.filter(doctor => doctor.specialization === filter);

  const filteredDoctorsBySearch = filteredDoctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='finddoctor'>
      <div className="top-section">
        <h2>Find a doctor</h2>
        <div className='searchbar'>
          <input
            type="search"
            name=""
            id=""
            placeholder='Search a doctor by his name or specialization'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <label htmlFor="searchbar">Search</label>
        </div>
      </div>
      <div className='dctrdiv'>
        <div className="filter">
          <p className={filter === 'All' ? 'active' : ''} onClick={() => handleFilterChange('All')}>All</p>
          <p className={filter === 'Surgeon' ? 'active' : ''} onClick={() => handleFilterChange('Surgeon')}>Surgeon</p>
          <p className={filter === 'Pathologist' ? 'active' : ''} onClick={() => handleFilterChange('Pathologist')}>Pathologist</p>
          <p className={filter === 'Orthopedist' ? 'active' : ''} onClick={() => handleFilterChange('Orthopedist')}>Orthopedist</p>
          <p className={filter === 'Pediatrician' ? 'active' : ''} onClick={() => handleFilterChange('Pediatrician')}>Pediatrician</p>
          <p className={filter === 'Neurologist' ? 'active' : ''} onClick={() => handleFilterChange('Neurologist')}>Neurologist</p>
          <p className={filter === 'Physician' ? 'active' : ''} onClick={() => handleFilterChange('Physician')}>Physician</p>
          <p className={filter === 'Cardiologist' ? 'active' : ''} onClick={() => handleFilterChange('Cardiologist')}>Cardiologist</p>
          <p className={filter === 'Pathologist' ? 'active' : ''} onClick={() => handleFilterChange('Pathologist')}>Pathologist</p>
          <p className={filter === 'Dermatologist' ? 'active' : ''} onClick={() => handleFilterChange('Dermatologist')}>Dermatologist</p>
        </div>
        <div className="mid-section" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {filteredDoctorsBySearch.length > 0 ? (
            filteredDoctorsBySearch.map((doctor, index) => (
              <div key={index} className="doctor-sec" style={{ flex: '0 0 33.33%', maxWidth: '33.33%' }}>
                <div className='imgdiv'>
                  {doctor.image ? (
                    <img src={doctor.image} className='dctrimg' alt={doctor.name} />
                  ) : (
                    <FaUserMd className=' default-icon' />
                  )}
                </div>
                <h2 className='docname'>{doctor.name}</h2>
                <div className='specialdiv'>
                  <p className="specialisation">{doctor.specialization}</p>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <CiStar />
                  </div>
                </div>
                <div className="goto">
                  <p className='address'>Dehradun, Uttarakhand</p>
                  <Link to={`/doctorpage/${doctor._id}`}>
                    <p className='right-icon'>
                      <FaArrowRight className='right' />
                    </p>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className='nodoctor'>No doctors available for <br /> &nbsp; &nbsp; &nbsp; this specialization</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
