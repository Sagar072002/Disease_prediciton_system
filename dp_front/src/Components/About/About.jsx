import React from 'react';
import './About.css';
import img from '../../assets/man.jpg';


const About = () => {
  return (
    <>
    <div className="values">
      <div className="col ">
        <div className="first">MISSION</div>
        <div className="second firstcol">
        We enhance the well-being of people in the communities we serve through a not-for-profit commitment to compassion and excellence in healthcare services.
        </div>
      </div>
      <div className="col ">
        <div className="second secondcol">
        Sutter Health leads the transformation of healthcare to achieve the highest levels of quality, access and affordability.
        </div>
        <div className="first">VISION</div>
      </div>
      <div className="col">
        <div className="first">VALUES</div>
        <div className="second thirdcol">
        Every day, Sutter teammates live our values and deliver exceptional care and service to our patients and communities. Learn more about our values.
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