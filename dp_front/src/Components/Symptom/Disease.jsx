import React, { useState } from "react";
import diseasesData from "./Detail.json";
import "./Symptom.css"; // Import the CSS file for other styles
import Header from "../Header/Header";

function Disease() {
  const [disease, setDisease] = useState("");
  const [diseaseInfo, setDiseaseInfo] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [activeSection, setActiveSection] = useState("");

  const handleSearch = () => {
    
    if (disease && diseasesData.diseases[disease]) {
      setDiseaseInfo(diseasesData.diseases[disease]);
      setActiveSection(""); // Reset active section when new search is performed
      setSuggestions([]); // Clear suggestions after search
    } else {
      setDiseaseInfo(null);
      alert("Disease not found!");
    }
  };

  const handleClear = () => {
    setDisease("");
    setDiseaseInfo(null);
    setSuggestions([]);
    setActiveSection(""); // Reset active section when clear is clicked
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setDisease(inputValue);

    // Filter suggestions based on input value
    const filteredSuggestions = Object.keys(diseasesData.diseases).filter(
      (diseaseName) =>
        diseaseName.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setDisease(suggestion);
    setSuggestions([]);
  };

  const toggleAccordion = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? "" : section));
  };

  return (
    <>
    <Header/>
     <div className="firstdisdiv">
        <h1>Disease Information</h1>
        <div className="searchdiv">
          <input
            type="search" // Use search type for search bar
            value={disease}
            onChange={handleInputChange}
            placeholder="Search for disease"
            className="search-bar" // Use class name for search bar
          />
          <button onClick={handleSearch} className="submit-btn">
            Submit
          </button>

          <button onClick={handleClear} className="clear-btn">
            Clear
          </button>
        </div>
        {suggestions.length > 0 && (
          <div className="suggestions-container">
            <div className="suggestion-list">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="suggestion-item"
                >
                  {suggestion}
                </div>
              ))}
            </div>
          </div>
        )}
        </div>
        
    <div className="diseasecontainer">
      <div>
       
        {/* Display suggestions */}
        

        {diseaseInfo && (
          <div className="info-container">
            <h2> Name: <span>{diseaseInfo.disease_name}</span></h2>

            <div className="accordion-section">
              <button
                className="accordion-btn"
                onClick={() => toggleAccordion("description")}
              >
                <span>Description</span>{" "}
                <span>{activeSection === "description" ? "-" : "+"}</span>
              </button>
              {activeSection === "description" && (
                <div className="accordion-content">
                  {diseaseInfo.disease_detail}
                </div>
              )}
            </div>
            {/* Accordion sections */}
            <div className="accordion-section">
              <button
                className="accordion-btn"
                onClick={() => toggleAccordion("cause")}
              >
                <span>Cause</span>
                <span> {activeSection === "cause" ? "-" : "+"}</span>
              </button>
              {activeSection === "cause" && (
                <div className="accordion-content">{diseaseInfo.cause}</div>
              )}
            </div>

            <div className="accordion-section">
              <button
                className="accordion-btn"
                onClick={() => toggleAccordion("symptoms")}
              >
                <span>Symptoms</span>
                <span> {activeSection === "symptoms" ? "-" : "+"}</span>
              </button>
              {activeSection === "symptoms" && (
                <ul className="accordion-content">
                  {diseaseInfo.symptoms.map((symptom, index) => (
                    <li key={index}>{symptom}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="accordion-section">
              <button
                className="accordion-btn"
                onClick={() => toggleAccordion("prevention")}
              >
                <span>Prevention</span>
                <span> {activeSection === "prevention" ? "-" : "+"}</span>
              </button>
              {activeSection === "prevention" && (
                <ul className="accordion-content">
                  {diseaseInfo.prevention.map((prevention, index) => (
                    <li key={index}>{prevention}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Alternative name */}
            <div className="accordion-section">
              <button
                className="accordion-btn"
                onClick={() => toggleAccordion("alternative")}
              >
                <span>Alternative name</span>
                <span> {activeSection === "alternative" ? "-" : "+"}</span>
              </button>
              {activeSection === "alternative" && (
                <ul className="accordion-content">
                  {diseaseInfo.alternative.length > 0 ? (
                    diseaseInfo.alternative.map((alternative, index) => (
                      <li key={index}>{alternative}</li>
                    ))
                  ) : (
                    <li>None</li>
                  )}
                </ul>
              )}
            </div>

            {/* Treatment */}
            <div className="accordion-section">
              <button
                className="accordion-btn"
                onClick={() => toggleAccordion("treatment")}
              >
                <span>Treatment</span>
                <span>                {activeSection === "treatment" ? "-" : "+"} 
</span>
              </button>
              {activeSection === "treatment" && (
                <ul className="accordion-content">
                  {diseaseInfo.treatment.length > 0 ? (
                    diseaseInfo.treatment.map((treatment, index) => (
                      <li key={index}>{treatment}</li>
                    ))
                  ) : (
                    <li>None</li>
                  )}
                </ul>
              )}
            </div>

            {/* Doctor */}
            <div className="accordion-section">
              <button
                className="accordion-btn"
                onClick={() => toggleAccordion("doctor")}
              >
                <span>Doctor</span>
                <span>                {activeSection === "doctor" ? "-" : "+"} 
</span>
              </button>
              {activeSection === "doctor" && (
                <div className="accordion-content">
                  {diseaseInfo.doctor || "None"}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
    
  );
}

export default Disease;
