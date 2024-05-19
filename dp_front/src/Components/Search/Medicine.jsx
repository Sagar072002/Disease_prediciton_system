import React, { useState } from 'react';
import Header from '../Header/Header';
import "./SearchBar.css";
import medicineData from './Medicine.json'; // Adjust the path if necessary
import Footer from '../Footer/Footer';

const Medicine = () => {
  const [selectedLetter, setSelectedLetter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [goToPage, setGoToPage] = useState('');

  // Calculate pagination
  const perPage = 20;
  const filteredMedicine = selectedLetter === 'All' ? medicineData : 
    medicineData.filter(medicine => medicine["Medicine Name"].charAt(0).toUpperCase() === selectedLetter);
  const totalPages = Math.ceil(filteredMedicine.length / perPage);
  const paginationRange = 5; // Number of page numbers to display around the current page
  const currentPageIndex = currentPage - 1;
  let startPage = Math.max(1, currentPageIndex - Math.floor(paginationRange / 2));
  let endPage = Math.min(totalPages, startPage + paginationRange - 1);
  if (totalPages - endPage < Math.floor(paginationRange / 2)) {
    startPage = Math.max(1, endPage - paginationRange + 1);
  }

  const indexOfLastMedicine = currentPage * perPage;
  const indexOfFirstMedicine = indexOfLastMedicine - perPage;
  const currentMedicines = filteredMedicine.slice(indexOfFirstMedicine, indexOfLastMedicine);

  const allLetters = Array.from(new Set(medicineData.map(medicine => medicine["Medicine Name"].charAt(0).toUpperCase())));
  const firstRowLetters = allLetters.filter(letter => letter.charCodeAt(0) <= 78); // A to N
  const secondRowLetters = allLetters.filter(letter => letter.charCodeAt(0) > 78); // O to Z

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleGoToPage = () => {
    const pageNumber = parseInt(goToPage);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      setGoToPage('');
    }
  };

  return (
    <>
      <Header />
      <div className="medicine">
        <h2>Medicine Encyclopedia</h2>
        <div className='letterdiv'>
          <div>
            <span className={selectedLetter === 'All' ? 'selected' : ''} onClick={() => setSelectedLetter('All')}>All</span>
            {firstRowLetters.map(letter => (
                <span
  key={letter}
  className={`letter ${selectedLetter === letter ? 'selected-letter' : ''}`}
  onClick={() => setSelectedLetter(letter)}
>
  {letter}
</span>            ))}
          </div>
          <div>
            {secondRowLetters.map(letter => (
                <span
  key={letter}
  className={`letter ${selectedLetter === letter ? 'selected-letter' : ''}`}
  onClick={() => setSelectedLetter(letter)}
>
  {letter}
</span>            ))}
          </div>
        </div>
        <div>
          {currentMedicines.map((medicine, index) => (
            <div className='medicinediv' key={index}>
              <h2>{medicine["Medicine Name"]}</h2>
              <p><span>Composition:</span> {medicine.Composition}</p>
              <p><span>Uses:</span> {medicine.Uses}</p>
              <p><span>Side Effects:</span> {medicine.Side_effects}</p>
              <p><span>Manufacturer:</span> {medicine.Manufacturer}</p>
            </div>
          ))}
        </div>
        <div className='numpage'>
          <ul className="pagination">
            {startPage !== 1 && (
              <li className="page-item">
                <span className="page-link" onClick={() => paginate(1)}>1</span>
              </li>
            )}
            {startPage > 2 && (
              <li className="page-item disabled">
                <span className="page-link">...</span>
              </li>
            )}
            {Array.from({ length: endPage - startPage + 1 }).map((_, index) => (
              <li key={startPage + index} className={`page-item ${startPage + index === currentPage ? 'active' : ''}`}>
                <span className="page-link" onClick={() => paginate(startPage + index)}>{startPage + index}</span>
              </li>
            ))}
            {endPage < totalPages - 1 && (
              <li className="page-item disabled">
                <span className="page-link">...</span>
              </li>
            )}
            {endPage !== totalPages && (
              <li className="page-item">
                <span className="page-link" onClick={() => paginate(totalPages)}>{totalPages}</span>
              </li>
            )}
          </ul>
          <div className="go-to-container">
            <input
              type="number"
              className="go-to-input"
              value={goToPage}
              onChange={e => setGoToPage(e.target.value)}
              placeholder={`Go to page (1-${totalPages})`}
            />
            <button className="go-to-button" onClick={handleGoToPage}>Go</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Medicine;
