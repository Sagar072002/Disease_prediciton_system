import React, { useState } from "react";
import Countup from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./Home.css";
import banner from "../../assets/banner.png"
import flow from "../../assets/flow.svg"
import patient from "../../assets/patient.svg"
import symptom from "../../assets/symptom.svg"
import consult from "../../assets/consult.png"
import img from "../../assets/sekiro.jpg";
import img1 from "../../assets/google.png";
import img2 from "../../assets/intel.png";
import img3 from "../../assets/maestro.png";
import img4 from "../../assets/mastercard.png";
import img5 from "../../assets/microsoft.png";
import img6 from "../../assets/oracle.png";
import img7 from "../../assets/samsung.png";
import img8 from "../../assets/toyota.png";
import img9 from "../../assets/walmart.png";
import img10 from "../../assets/walt-disney.png";
import stats1 from "../../assets/individuals.png";
import stats2 from "../../assets/parents.png";
import stats3 from "../../assets/family-members.png";
import { Link } from "react-router-dom";
import {TiTick  } from "react-icons/ti"
import {GoDotFill  } from "react-icons/go"

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [counteron, Setcounteron] = useState(false);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="banner">
        <div className="left-side">
          <h2>More than a  <br />Symptom Checker</h2>
          <p>
            Sensely's comprehensive clinical decision support <br />  solution navigates
            users from problem to solution, <br /> all through a simple conversation
            to:
          </p>
          <ul>
            <li>Assess symptoms</li>
            <li>Route patients to care</li>
            <li>Deliver content from leading sources</li>
          </ul>
        </div>
        <div className="right-side">
<img className="bannerimg" src={banner} alt="" />
        </div>
      </div>
      <div className="counter-div">
      <div className="firstdiv">
      <h2>About Us</h2>
      <p>Dispred is a self-service symptom checker made by doctors for anyone wishing to learn more about their symptoms, find their possible causes, get guidance on what to do next, or just to better prepare for their medical appointment.</p>
      <br />
      <p>Dispred is a self-service symptom checker made by doctors for anyone wishing to learn more about their symptoms, find their possible causes, get guidance on what to do next, or just to better prepare for their medical appointment.</p>
      <Link className="learn" to="/about">Learn More</Link>
    </div>
    <div className="seconddiv">
        <ScrollTrigger
          className="innercounter"
          onEnter={() => Setcounteron(true)}
          onExit={() => Setcounteron(false)}
        >
          <h1>
            {counteron && (
              <Countup
                className="counter"
                start={0}
                end={100}
                duration={3}
                delay={0}
              />
            )}
            + <br />
            <span> patients treated</span>
          </h1>
        </ScrollTrigger>
        <div className="seconddivv">
        <ScrollTrigger
          className="innercounter"
          onEnter={() => Setcounteron(true)}
          onExit={() => Setcounteron(false)}
        >
          <h1>
            {counteron && (
              <Countup
                className="counter"
                start={0}
                end={200}
                duration={3}
                delay={0}
              />
            )}
            + <br />
            <span> Prediction made</span>
          </h1>
        </ScrollTrigger>
        <ScrollTrigger
          className="innercounter"
          onEnter={() => Setcounteron(true)}
          onExit={() => Setcounteron(false)}
        >
          <h1>
            {counteron && (
              <Countup
                className="counter"
                start={0}
                end={300}
                duration={3}
                delay={0}
              />
            )}
            + <br />
            <span> Appointments made</span>
          </h1>
        </ScrollTrigger>
        </div>
        </div>
      </div>
      <div className="patient">
        <div className="left-side">
        <img className="infoimg" src={patient} alt="" />

        </div>
        <div className="right-side">
<h2>Give patients a tool they will love</h2>
          <p>
          People worldwide, all ages and professions (including clinicians), use our Symptom Checker  and appreciate its accuracy, reliability and simplicity of use. Up your service level and add  a Symptom Checker to your organization.</p>
          <br />
          <p>
          People worldwide, all ages and professions (including clinicians), use our Symptom Checker  and appreciate its accuracy, reliability and simplicity of use. Up your service level and add  a Symptom Checker to your organization.</p>
        </div>
      </div>   
     
<div className="stats">
  <div className="first">
    <h2>Individuals</h2>
    <p><TiTick  className="tick" />5 levels of medical care</p>
<p><TiTick  className="tick" />simple language and common <span>names</span> 
</p>
<p><TiTick  className="tick" />educational articles</p>
<img src={stats1} alt="" />
  </div>
  <div className="second">
    <h2>Parents</h2>
    <p><TiTick  className="tick" />pediatrics conditions</p>
<p><TiTick  className="tick" />Symptom pair analysis
</p>
<p><TiTick  className="tick" />body maps of children in <span>different groups</span> </p>
<img src={stats2} alt="" />
  </div>
  <div className="third">
    <h2>Family members</h2>
    <p><TiTick  className="tick" /> Third-person mode</p>
<p><TiTick  className="tick" />Instructions and  Explanations</p>
<img src={stats3} className="img3" alt="" />
  </div>
</div>


     
      
      <div className="info">
        <div className="left-side">
          <h2>Improve Patient Flow</h2>
          <p>
          Identify patients’ needs and appropriate care. Using our technology, it is easy to accurately identify those who can self-treat, qualify for teleconsultation, consult a doctor, or seek immediate medical treatment.
          </p>
          <p>
           <span>$18B</span> 
            
<br />
in healthcare savings per year when patients are led to proper care
<br />
           <span>25%</span> 

<br />
of cases can be self-treated or treated through teleconsultation</p>
        </div>
        <div className="right-side">
<img className="infoimg" src={flow} alt="" />
        </div>
      </div>
      
      

      <div className="symptom">
        <div className="left-side">
        <h2>Symptom Checker</h2>
         
         <p><GoDotFill />It cannot give you a diagnosis and is not a substitute for professional healthcare.
</p>
         <p><GoDotFill />It will ask questions about your symptoms — this takes an average of 6 minutes.
</p>
         <p className="last"><GoDotFill />The Symptom Checker advises if you should see a doctor or care for yourself at home.
          </p>
          <img className="infoimg" src={symptom} alt="" />

         </div>
        <div className="right-side">
<div className="checkinfo">
  <div>
  <h2>Get started</h2>
  <h4>Who is this symptom check for:</h4>
  <div className="choosediv">
  <input type="radio" id="me" name="personal" defaultValue="me" />
  <label htmlFor="html">Me</label>
  </div>
  <div className="choosediv">
  <input type="radio" id="someone" name="personal" defaultValue="someone" />
  <label htmlFor="css">Someone else</label>
  </div>
  <br />
  <br />
  <h4>Choose your gender:</h4>
  <div className="choosediv">
  <input type="radio" id="male" name="gender" defaultValue="male" />
  <label htmlFor="html">Male</label>
  </div>
  <div className="choosediv">
  <input type="radio" id="female" name="gender" defaultValue="female" />
  <label htmlFor="css">Female</label>
  </div>
  <div className="choosediv">
  <input type="radio" id="other" name="gender" defaultValue="other" />
  <label htmlFor="css">Other</label>
  </div>
  <br />
    <Link className="checkbtn" to="/symptom">Start Symptom Checker</Link>
  </div>
  <div>
  <img className="infoimg" src={consult} alt="" />

  </div>
 </div>

        </div>
      </div>   








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

      
        
      
      <div className="review-section">
        <h1>Customer Review</h1>
        <p className="text">Read what our customers have to say about us</p>
        <div className="inner-review">
          <div className="review">
            <div className="top-section">
              <img src={img} alt="" />
              <div className="detail">
                <h2>Sagar Negi</h2>
                <p>Position,Company</p>
              </div>
            </div>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              culpa repudiandae nisi ut dolor alias a maxime aliquam omnis
              aspernatur sunt eaque exercitationem rerum, assumenda velit
              eveniet facere. Ipsum, soluta.
            </p>
          </div>
          <div className="review">
            <div className="top-section">
              <img src={img} alt="" />
              <div className="detail">
                <h2>Sagar Negi</h2>
                <p>Position,Company</p>
              </div>
            </div>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              culpa repudiandae nisi ut dolor alias a maxime aliquam omnis
              aspernatur sunt eaque exercitationem rerum, assumenda velit
              eveniet facere. Ipsum, soluta.
            </p>
          </div>
          <div className="review">
            <div className="top-section">
              <img src={img} alt="" />
              <div className="detail">
                <h2>Sagar Negi</h2>
                <p>Position,Company</p>
              </div>
            </div>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              culpa repudiandae nisi ut dolor alias a maxime aliquam omnis
              aspernatur sunt eaque exercitationem rerum, assumenda velit
              eveniet facere. Ipsum, soluta.
            </p>
          </div>
        </div>

        <div className="inner-review">
          <div className="review">
            <div className="top-section">
              <img src={img} alt="" />
              <div className="detail">
                <h2>Sagar Negi</h2>
                <p>Position,Company</p>
              </div>
            </div>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              culpa repudiandae nisi ut dolor alias a maxime aliquam omnis
              aspernatur sunt eaque exercitationem rerum, assumenda velit
              eveniet facere. Ipsum, soluta.
            </p>
          </div>
          <div className="review">
            <div className="top-section">
              <img src={img} alt="" />
              <div className="detail">
                <h2>Sagar Negi</h2>
                <p>Position,Company</p>
              </div>
            </div>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              culpa repudiandae nisi ut dolor alias a maxime aliquam omnis
              aspernatur sunt eaque exercitationem rerum, assumenda velit
              eveniet facere. Ipsum, soluta.
            </p>
          </div>
          <div className="review">
            <div className="top-section">
              <img src={img} alt="" />
              <div className="detail">
                <h2>Sagar Negi</h2>
                <p>Position,Company</p>
              </div>
            </div>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              culpa repudiandae nisi ut dolor alias a maxime aliquam omnis
              aspernatur sunt eaque exercitationem rerum, assumenda velit
              eveniet facere. Ipsum, soluta.
            </p>
          </div>
        </div>
      </div>
      <div className="contact">

      <h2 className="touch">Get in Touch</h2>
    <div className="contact-form">
        <div className="left-side">
          <div>
            <h2>Contact Us:</h2>
            <div className="box">
            <i class="fa-solid fa-location-dot"></i>
                <p><span>Address: </span> Dehradun, Uttarakhand, India</p>
            </div>
            <div className="box">
            <i className="fa-solid fa-phone" />
                <p><span>Phone: </span> +91-9876543210</p>
            </div>
            <div className="box lastbox">
            <i className="fa-solid fa-envelope" />
                <p><span>Email: </span> example@gmail.com</p>
            </div>
            </div>
            <div>
            <h2 >Follow Us:</h2>
            <div className="icons">
                      <i className="fa-brands fa-facebook-f"  />
          <i className="fa-brands fa-twitter"  />

          <i className="fa-brands fa-instagram"  />
                      <i className="fa-brands fa-facebook-f"  />
          <i className="fa-brands fa-twitter"  />


            </div>
            </div>
        </div>
        <div className="right-side">
            <div className="inside-form">
              <input type="text" name="" placeholder='First Name' id="" />
              <input type="email" name="" placeholder='Email' id="" />
            <input type="tel" name="" placeholder='Phone' id="" />
              <input type="text" className="message" name="" placeholder='Message' id="" />
             
            </div>
            <button type="submit">Submit</button>
        </div>
       
    </div>
   
    </div>
    <div className="accordion">
        <h1>FAQ'S</h1>
        <div className={`accordion-item ${activeIndex === 0 ? "active" : ""}`}>
          <div
            className={`accordion-item-header ${
              activeIndex === 0 ? "active" : ""
            }`}
            onClick={() => handleAccordionClick(0)}
          >
            How is Dispred different from other symptom checkers?
          </div>
          <div
            className="accordion-item-body"
            style={{
              maxHeight: activeIndex === 0 ? "1000px" : "0",
              overflow: "hidden",
              transition: "max-height 0.4s ease-out",
            }}
          >
            <div className="accordion-item-body-content">
           Isabel is built in a completely different way to other symptom checkers, utilizing sophisticated Artificial Intelligence technology which searches over 6,000 disease presentations - many more than other tools. Most importantly, Isabel can understand multiple symptoms entered in everyday language, all in one go without going through a long list of questions. Other tools restrict the user to entering just one single symptom, or force them to select common symptoms from a list or body map, severely limiting the user’s ability to accurately describe their own problem.
            </div>
          </div>
        </div>
        <div className={`accordion-item ${activeIndex === 1 ? "active" : ""}`}>
          <div
            className={`accordion-item-header ${
              activeIndex === 1 ? "active" : ""
            }`}
            onClick={() => handleAccordionClick(1)}
          >
           Why should I trust the results from Dispred?
          </div>
          <div
            className="accordion-item-body"
            style={{
              maxHeight: activeIndex === 1 ? "1000px" : "0",
              overflow: "hidden",
              transition: "max-height 0.2s ease-out",
            }}
          >
            <div className="accordion-item-body-content">
            Isabel Symptom Checker is adapted from the Isabel Pro which has been used by doctors in hospitals around the world for almost two decades and is widely recognised in the medical community as one of the most accurate on the market. The tool has been professionally validated over many years with several peer-reviewed articles appearing in medical journals.
            </div>
          </div>
        </div>
        <div className={`accordion-item ${activeIndex === 2 ? "active" : ""}`}>
          <div
            className={`accordion-item-header ${
              activeIndex === 2 ? "active" : ""
            }`}
            onClick={() => handleAccordionClick(2)}
          >
           Why should I bother with all this research rather than just going to see the doctor?
          </div>
          <div
            className="accordion-item-body"
            style={{
              maxHeight: activeIndex === 2 ? "1000px" : "0",
              overflow: "hidden",
              transition: "max-height 0.2s ease-out",
            }}
          >
            <div className="accordion-item-body-content">
            We understand that many patients, particularly when feeling worried and unwell, will not want to go through this process. However, today’s doctors are increasingly time- pressured and may not be able to offer you an appointment quickly. During your consultation, they will not always have the time to go through your case in detail or, in some cases, the skills and knowledge to work out your condition, particularly if it’s rare or your presentation is unusual. Doctors are only human and make mistakes like the rest of us, especially if what you’re suffering from is unusual. You can considerably improve the chances of getting a correct diagnosis first time if you are well informed before your visit and can present an accurate report to your doctor of what you are experiencing and ask more relevant questions.
            </div>
          </div>
        </div>
        <div className={`accordion-item ${activeIndex === 3 ? "active" : ""}`}>
          <div
            className={`accordion-item-header ${
              activeIndex === 3 ? "active" : ""
            }`}
            onClick={() => handleAccordionClick(3)}
          >
Do I still need to see a doctor after using Dispred?          </div>
          <div
            className="accordion-item-body"
            style={{
              maxHeight: activeIndex === 3 ? "1000px" : "0",
              overflow: "hidden",
              transition: "max-height 0.2s ease-out",
            }}
          >
            <div className="accordion-item-body-content">
            Almost certainly yes. You should not use Isabel as a substitute for going to see your doctor but as a tool to help you decide which type of doctor to see and make your consultation more productive with the aim of reaching the correct diagnosis more quickly.
            </div>
          </div>
        </div>
        
        <div className={`accordion-item ${activeIndex === 0 ? "active" : ""}`}>
          <div
            className={`accordion-item-header ${
              activeIndex === 0 ? "active" : ""
            }`}
            onClick={() => handleAccordionClick(0)}
          >
            How is Dispred different from other symptom checkers?
          </div>
          <div
            className="accordion-item-body"
            style={{
              maxHeight: activeIndex === 0 ? "1000px" : "0",
              overflow: "hidden",
              transition: "max-height 0.4s ease-out",
            }}
          >
            <div className="accordion-item-body-content">
           Isabel is built in a completely different way to other symptom checkers, utilizing sophisticated Artificial Intelligence technology which searches over 6,000 disease presentations - many more than other tools. Most importantly, Isabel can understand multiple symptoms entered in everyday language, all in one go without going through a long list of questions. Other tools restrict the user to entering just one single symptom, or force them to select common symptoms from a list or body map, severely limiting the user’s ability to accurately describe their own problem.
            </div>
          </div>
        </div>
        <div className={`accordion-item ${activeIndex === 1 ? "active" : ""}`}>
          <div
            className={`accordion-item-header ${
              activeIndex === 1 ? "active" : ""
            }`}
            onClick={() => handleAccordionClick(1)}
          >
           Why should I trust the results from Dispred?
          </div>
          <div
            className="accordion-item-body"
            style={{
              maxHeight: activeIndex === 1 ? "1000px" : "0",
              overflow: "hidden",
              transition: "max-height 0.2s ease-out",
            }}
          >
            <div className="accordion-item-body-content">
            Isabel Symptom Checker is adapted from the Isabel Pro which has been used by doctors in hospitals around the world for almost two decades and is widely recognised in the medical community as one of the most accurate on the market. The tool has been professionally validated over many years with several peer-reviewed articles appearing in medical journals.
            </div>
          </div>
        </div>
        <div className={`accordion-item ${activeIndex === 2 ? "active" : ""}`}>
          <div
            className={`accordion-item-header ${
              activeIndex === 2 ? "active" : ""
            }`}
            onClick={() => handleAccordionClick(2)}
          >
           Why should I bother with all this research rather than just going to see the doctor?
          </div>
          <div
            className="accordion-item-body"
            style={{
              maxHeight: activeIndex === 2 ? "1000px" : "0",
              overflow: "hidden",
              transition: "max-height 0.2s ease-out",
            }}
          >
            <div className="accordion-item-body-content">
            We understand that many patients, particularly when feeling worried and unwell, will not want to go through this process. However, today’s doctors are increasingly time- pressured and may not be able to offer you an appointment quickly. During your consultation, they will not always have the time to go through your case in detail or, in some cases, the skills and knowledge to work out your condition, particularly if it’s rare or your presentation is unusual. Doctors are only human and make mistakes like the rest of us, especially if what you’re suffering from is unusual. You can considerably improve the chances of getting a correct diagnosis first time if you are well informed before your visit and can present an accurate report to your doctor of what you are experiencing and ask more relevant questions.
            </div>
          </div>
        </div>
        <div className={`accordion-item ${activeIndex === 3 ? "active" : ""}`}>
          <div
            className={`accordion-item-header ${
              activeIndex === 3 ? "active" : ""
            }`}
            onClick={() => handleAccordionClick(3)}
          >
Do I still need to see a doctor after using Dispred?          </div>
          <div
            className="accordion-item-body"
            style={{
              maxHeight: activeIndex === 3 ? "1000px" : "0",
              overflow: "hidden",
              transition: "max-height 0.2s ease-out",
            }}
          >
            <div className="accordion-item-body-content">
            Almost certainly yes. You should not use Isabel as a substitute for going to see your doctor but as a tool to help you decide which type of doctor to see and make your consultation more productive with the aim of reaching the correct diagnosis more quickly.
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
