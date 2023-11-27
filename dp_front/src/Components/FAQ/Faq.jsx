import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      <h1>FAQ'S</h1>
      <div className={`accordion-item ${activeIndex === 0 ? 'active' : ''}`}>
        <div
          className={`accordion-item-header ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => handleAccordionClick(0)}
        >
          What is a Resume?
        </div>
        <div
          className="accordion-item-body"
          style={{
            maxHeight: activeIndex === 0 ? '1000px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.4s ease-out',
          }}
        >
          <div className="accordion-item-body-content">
            A resume is a brief document that gives an overview of your qualifications. It includes information about your work history, education, and professional skills relevant to the job. It also shows your achievements, awards, certifications, and other things that will help you impress the recruiter.
            <br/><br/>
            In other words, a resume is a document necessary to apply for any job and to convince your potential employer that you’re the perfect fit for their opening. A unique resume template, an ATS-friendly document, and a perfect cover letter can skyrocket those chances.
          </div>
        </div>
      </div>
      <div className={`accordion-item ${activeIndex === 1 ? 'active' : ''}`}>
        <div
          className={`accordion-item-header ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => handleAccordionClick(1)}
        >
          What does an ATS-friendly resume mean?
        </div>
        <div
          className="accordion-item-body"
          style={{
            maxHeight: activeIndex === 1 ? '1000px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.2s ease-out',
          }}
        >
          <div className="accordion-item-body-content">
            An ATS-friendly resume is one that is fully and easily scanned and understood by the Applicant Tracking Systems. Format your resume and include relevant keywords to achieve it. Many companies use such software to scan and filter resumes before landing on a recruiter’s desk.
            <br/><br/>
            All the templates in Zety resume builder are 100% ATS-compliant. Make your resume using an ATS-friendly resume template, and don’t get rejected.
          </div>
        </div>
      </div>
      <div className={`accordion-item ${activeIndex === 2 ? 'active' : ''}`}>
        <div
          className={`accordion-item-header ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => handleAccordionClick(2)}
        >
          What should I include on my resume?
        </div>
        <div
          className="accordion-item-body"
          style={{
            maxHeight: activeIndex === 2 ? '1000px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.2s ease-out',
          }}
        >
          <div className="accordion-item-body-content">
            <p>A resume consists of several parts. Here's what you should include on your resume in 2023:</p>
            <br/>
            <ul style={{ paddingLeft: '1rem' }}>
              <li>Contact Details (with a LinkedIn Profile) </li>
              <li>Resume Summary or Resume Objective</li>
              <li>Work Experience</li>
              <li> Education & Diplomas</li>
              <li>Professional Skills (consider listing hard skills and soft skills separately)</li>
              <li>Additional Information</li>
            </ul>
            <br/>
            <p>When building a resume in our resume app, you'll be guided through each step of the resume creation process and given expert tips and even generated content tailored to the job you’re applying for. After you're done, your resume should be one-page long. But there are exceptions, and sometimes it can be a two-page resume. Find more about an ideal resume length.</p>
          </div>
        </div>
      </div>
      <div className={`accordion-item ${activeIndex === 3 ? 'active' : ''}`}>
        <div
          className={`accordion-item-header ${activeIndex === 3 ? 'active' : ''}`}
          onClick={() => handleAccordionClick(3)}
        >
          Do I need a different resume for every different job application?
        </div>
        <div
          className="accordion-item-body"
          style={{
            maxHeight: activeIndex === 3 ? '1000px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.2s ease-out',
          }}
        >
          <div className="accordion-item-body-content">
            Yes, you do! You should make a different resume for every application. Tailoring your resume to each job you apply to can significantly increase your chances of getting hired. Generic resumes simply don't stand a chance against a targeted resume.
            <br/><br/>
            For an easy way out, check if the job title and skills section match and are relevant to the job you’re after.
            <br/><br/>
            In our resume generator, once you enter the job title you’re pursuing, you’ll get customized suggestions for a list of skills, resume profile, and other areas that can be improved. Also, you can easily duplicate, change, and save every resume you write. That makes it way easier to tailor your resume for each job offer you’re applying for in less than 5 minutes. Now you don't have to mass-send the same resume or spend hours creating a new one for each offer from scratch!
          </div>
        </div>
      </div>
      <div className={`accordion-item ${activeIndex === 4 ? 'active' : ''}`}>
        <div
          className={`accordion-item-header ${activeIndex === 4 ? 'active' : ''}`}
          onClick={() => handleAccordionClick(4)}
        >
          Do I need a cover letter for my resume?
        </div>
        <div
          className="accordion-item-body"
          style={{
            maxHeight: activeIndex === 4 ? '1000px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.2s ease-out',
          }}
        >
          <div className="accordion-item-body-content">
            Yes, cover letters are necessary. Your recruiters might need more time to read it carefully, but they will find time to scan them when they consider you as a potential hire.
            <br/><br/>
            Submitting a cover letter is one of the best ways to boost your resume and prove just how motivated you are. More than 25% of recruiters consider them critical, and half of them prefer when applicants attach a cover letter to their resume. Of course, a cover letter will only work if it is as tailored and unique as your resume, so it’s important to figure out what a cover letter should say to wow the recruiter.
            <br/><br/>
            To learn more about creating a job-winning cover letter, check out our guide on how to write a cover letter. Help yourself with our hundreds of free cover letter examples, or use our professional cover letter templates that match your resume in our resume builder.
          </div>
        </div>
      </div>
      {/* Add more accordion items as needed */}
    </div>
  );
};

export default Faq;
