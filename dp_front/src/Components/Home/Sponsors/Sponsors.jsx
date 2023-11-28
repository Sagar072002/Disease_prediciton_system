import React from 'react';
import './Sponsors.css';
import img1 from "../../../assets/google.png";
import img2 from "../../../assets/intel.png";
import img3 from "../../../assets/maestro.png";
import img4 from "../../../assets/mastercard.png";
import img5 from "../../../assets/microsoft.png";
import img6 from "../../../assets/oracle.png";
import img7 from "../../../assets/samsung.png";
import img8 from "../../../assets/toyota.png";
import img9 from "../../../assets/walmart.png";
import img10 from "../../../assets/walt-disney.png";

const Sponsors = () => {
  return (
    <div className="partners">
  <h2>Our Sponsor Partners</h2>
  <div className="logos">
    <div className="logos-slide">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      <img src={img6} alt="" />
      <img src={img7} alt="" />
      <img src={img8} alt="" />
      <img src={img9} alt="" />
      <img src={img10} alt="" />
    </div>
    <div className="logos-slide">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      <img src={img6} alt="" />
      <img src={img7} alt="" />
      <img src={img8} alt="" />
      <img src={img9} alt="" />
      <img src={img10} alt="" />
    </div>
  </div>
</div>

  )
}

export default Sponsors