import React, { useState } from "react";
import diseasesData from "./Detail.json";
import "./Symptom.css"; // Import the CSS file for other styles

function Disease() {
  const [disease, setDisease] = useState("");
  const [diseaseInfo, setDiseaseInfo] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [activeSection, setActiveSection] = useState("description"); // Initialize with "description"

  const handleSearch = () => {
    if (disease && diseasesData.diseases[disease]) {
      setDiseaseInfo(diseasesData.diseases[disease]);
      setActiveSection("description"); // Reset active section when new search is performed
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
    setActiveSection("description"); // Reset active section when clear is clicked
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
          {diseaseInfo && (
            <div className="info-container">
              <h2>Name: <span>{diseaseInfo.disease_name}</span></h2>

              <Accordion
                title="Description"
                content={diseaseInfo.disease_detail}
                isActive={activeSection === "description"}
                onToggle={() => toggleAccordion("description")}
              />

              <Accordion
                title="Cause"
                content={diseaseInfo.cause}
                isActive={activeSection === "cause"}
                onToggle={() => toggleAccordion("cause")}
              />

              <Accordion
                title="Symptoms"
                content={diseaseInfo.symptoms}
                isActive={activeSection === "symptoms"}
                onToggle={() => toggleAccordion("symptoms")}
                isList={true}
              />

              <Accordion
                title="Prevention"
                content={diseaseInfo.prevention}
                isActive={activeSection === "prevention"}
                onToggle={() => toggleAccordion("prevention")}
                isList={true}
              />

              <Accordion
                title="Alternative name"
                content={diseaseInfo.alternative.length > 0 ? diseaseInfo.alternative : ["None"]}
                isActive={activeSection === "alternative"}
                onToggle={() => toggleAccordion("alternative")}
                isList={true}
              />

              <Accordion
                title="Treatment"
                content={diseaseInfo.treatment.length > 0 ? diseaseInfo.treatment : ["None"]}
                isActive={activeSection === "treatment"}
                onToggle={() => toggleAccordion("treatment")}
                isList={true}
              />

              <Accordion
                title="Doctor"
                content={diseaseInfo.doctor || "None"}
                isActive={activeSection === "doctor"}
                onToggle={() => toggleAccordion("doctor")}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function Accordion({ title, content, isActive, onToggle, isList = false }) {
  return (
    <div className="accordion-section">
      <button
        className="accordion-btn"
        onClick={onToggle}
        aria-expanded={isActive}
        aria-controls={`accordion-content-${title}`}
      >
        <span>{title}</span> <span>{isActive ? "-" : "+"}</span>
      </button>
      {isActive && (
        <div
          className="accordion-content"
          id={`accordion-content-${title}`}
          role="region"
        >
          {isList ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Disease;
