import React from 'react';
import './About.css';
import img from '../../assets/man.jpg';
import mission from '../../assets/mission.png';
import value from '../../assets/value.png';
import vision from '../../assets/vision.png';
import visiontop from '../../assets/visiontop.png';
import about from '../../assets/about.png';


const About = () => {
  return (
    <>
   
   
    <div className="about">
      <div className="left-side">
        <h2>What is Dispred?</h2>
        <p>
        Welcome to Dispred, your trusted destination for cutting-edge healthcare solutions. At Dispred, we are committed to revolutionizing the way individuals manage their health. Our platform offers a sophisticated Disease Prediction System, empowering users to take control of their well-being by simply inputting their symptoms and receiving accurate disease predictions.
<br/>
<br/>
In addition to our innovative prediction system, Dispred hosts a comprehensive Medicine Encyclopedia, providing detailed information on a vast array of medications, including composition, side effects, and manufacturers. This invaluable resource equips users with the knowledge they need to make informed decisions about their healthcare.
<br/>
<br/>

Furthermore, our platform features a robust Disease Information database, offering thorough insights into various illnesses, including descriptions, causes, symptoms, prevention methods, and associated healthcare professionals. By harnessing the power of technology and data-driven insights, we aim to arm individuals with the information they need to proactively manage their health and well-being.
<br/>



Join us on this journey towards a healthier future. Together, we can redefine healthcare and inspire positive change in the lives of millions.
        </p>
      </div>
      <div className="right-side">
        <img src={about} alt="" />
      </div>
    </div>
<div className="mvg">
<div className="container">
  <div className="card">
    <div className="imgBx">
      <img className='missionimg' src={mission} />
      
    </div>
    <div className="contentBx">
      <h2>Mission</h2>
      <p className='content-text'>We enhance the well-being of people in the communities we serve through a not-for-profit commitment to compassion and excellence in healthcare services.</p>
    </div>
  </div>
</div>
<div className="container">
  <div className="card card1">
    <div className="imgBx">
      <img className='topimg' src={visiontop} alt="" />
      <img className="belowimg" src={vision} />
    </div>
    <div className="contentBx">
      <h2>Vision</h2>
      <p className='content-text'>Dispred's visionary leadership and relentless pursuit of excellence are driving unparalleled advancements, making healthcare more inclusive and effective for all.</p>
    </div>
  </div>
</div>

<div className="container">
  <div className="card card2">
    <div className="imgBx">
      <img className='valueimg' src={value} />
    </div>
   
    <div className="contentBx">
      <h2>Values</h2>
      <p className='content-text'>Every day, Dispred teammates live our values and deliver exceptional care and service to our patients and communities. Learn more about our values.</p>
    </div>
  </div>
</div>

</div>
<div className="message">
  <h2>Message to our community</h2>
  <p>Our teammates live Sutter's values on a daily basis as we support and provide high-quality, inclusive patient care. Sutter Health's commitment to our values and diversity and inclusion does not stop at our doors. When conduct by our employees outside of work — online or off — impacts our patients, teammates or organization, we will stand by our commitment to equality and non-discriminatory practices and look into the matter.
<br /> <br />
This includes responding when we are made aware of comments on social media platforms like Facebook, Twitter or Instagram that use language or images that are intentionally inflammatory, promoting racism, sexism, homophobia and hate or endorsing violence.
<br /> <br />
We value the trust placed in us to provide safe, equitable, compassionate care. When potentially problematic conduct is brought to our attention, we do a thorough review and consider the relevant facts. Our response to such situations may range from education and training to formal corrective action, up to and including separation from employment.
<br /> <br />
We remain committed to providing a safe and inclusive environment to work and receive quality, compassionate healthcare where all are treated with dignity and respect, regardless of race, gender, gender identity, age, disability, ethnicity, sexual orientation or religious belief.</p>
<ul>
  <li> <span>Excellence and Quality </span> — We exceed customer expectations by delivering premier clinical quality and maintaining the highest levels of safety.
</li>
  <li> <span>Innovation </span> — We continually create, seek out and adopt new ways of providing value to our customers, rapidly moving from idea to execution.</li>
  <li> <span>Affordability </span> — We deliver healthcare efficiently by using resources responsibly.
</li>
  <li> <span>Teamwork </span> — We recognize that the power of our combined efforts exceeds what we can accomplish individually, and we are accountable to each other and to our customers.
</li>
  <li> <span>Compassion and Caring </span> — We treat those we serve and one another with concern, kindness and respect.
</li>
  <li> <span>Community </span> — We work to understand and best serve the diverse needs of our communities.
</li>
<li> <span>Honesty and Integrity </span> — We act openly and truthfully in everything we do.</li>
</ul>
</div>

<div className="teamdiv">
    <div className="team">
      <h1>Our Team</h1>
      <div className="members">
      <div className="row">
        <div className="detail">
          <img src={img} alt="" />
          <h2>Sagar Negi</h2>
          <h4>Software Developer</h4>
        </div>
        <div className="connect">
        <i className="fa-brands fa-google"  />
          <i className="fa-brands fa-facebook-f"  />
          <i className="fa-brands fa-twitter"  />
          <i className="fa-brands fa-instagram"  />
        </div>
      </div>
      <div className="row">
        <div className="detail">
          <img src={img} alt="" />
          <h2>Sagar Negi</h2>
          <h4>Software Developer</h4>
        </div>
        <div className="connect">
        <i className="fa-brands fa-google"  />
          <i className="fa-brands fa-facebook-f"  />
          <i className="fa-brands fa-twitter"  />
          <i className="fa-brands fa-instagram"  />
        </div>
      </div>
      <div className="row">
        <div className="detail">
          <img src={img} alt="" />
          <h2>Sagar Negi</h2>
          <h4>Software Developer</h4>
        </div>
        <div className="connect">
        <i className="fa-brands fa-google"  />
          <i className="fa-brands fa-facebook-f"  />
          <i className="fa-brands fa-twitter"  />
          <i className="fa-brands fa-instagram"  />
        </div>
      </div>
      <div className="row">
        <div className="detail">
          <img src={img} alt="" />
          <h2>Sagar Negi</h2>
          <h4>Software Developer</h4>
        </div>
        <div className="connect">
        <i className="fa-brands fa-google"  />
          <i className="fa-brands fa-facebook-f"  />
          <i className="fa-brands fa-twitter"  />
          <i className="fa-brands fa-instagram"  />
        </div>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default About