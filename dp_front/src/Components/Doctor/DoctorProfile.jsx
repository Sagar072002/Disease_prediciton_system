// Doctor.js
import React, { useState, useEffect } from 'react';
import img from "../../assets/man.jpg";
import "./doctor.css";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useParams } from 'react-router-dom';
import doctorService from '../../services/doc_service';

const DoctorProfile = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [doctor, setDoctor] = useState({});
  const [userName, setUserName] = useState('');
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState('');
  const params = useParams()
  console.log(params)
  const [reviews, setReviews] = useState([
    {
      name: 'Sagar Negi',
      date: 'June 17, 2023',
      rating: 4,
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea a aut dignissimos reiciendis eos architecto voluptate ab expedita in!'
    },
    {
      name: 'Sagar Negi',
      date: 'June 17, 2023',
      rating: 4,
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea a aut dignissimos reiciendis eos architecto voluptate ab expedita in!'
    },
    // Add more initial reviews here if needed
  ]);

  useEffect(()=>{
    doctorService.get(params.id).then((res)=>{
      console.log("Doctor: ",res.data)
      setDoctor(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])


  const handleSubmitFeedback = () => {
    // Validate user inputs here if needed

    // Add the new review to the reviews state
    setReviews([
      ...reviews,
      {
        name: userName,
        date: new Date().toLocaleDateString(),
        rating: userRating,
        comment: userComment
      }
    ]);

    // Reset form inputs
    setUserName('');
    setUserRating(0);
    setUserComment('');

    // Hide the feedback form
    setShowFeedbackForm(false);
  };

  return (
    <div className="doctor">
      <div className="profile">
        <div className="top">
          <div className="top-left">
            <img src={img} alt="" />
            <div>
              <p className='profession'>Surgeon</p>
              <p className='name'>{doctor.name}</p>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
                <span>4.5</span>
              </div>
              <p>Specialization: {doctor.specialization}</p>
            </div>
          </div>
          <div className="top-right">
            <p className='price'>Price: <span>₹{doctor.price}</span></p>
            <div className="">
              <h3>Available slots:</h3>
              <div className='timing'>
                <div>
                  <p>Monday </p>
                  <p>Wednesday </p>
                  <p>Friday </p>
                </div>
                <div>
                  <p> 10:00 am - 2:00 pm</p>
                  <p> 4:00 pm - 6:00 pm</p>
                  <p> 10:00 am - 2:00 pm</p>
                </div>
              </div>
            </div>
            <button>Book Appointment</button>
          </div>
        </div>
        <div className="mid">
        <h1>Personal Information</h1>
        <div className='infodiv'>
          <div className='detail'>
            <p>Name: <span>{doctor.name}</span></p>
            <p>Email: <span>{doctor.email}</span></p>
            <p>Phone: <span>{doctor.phone}</span></p>
            <p>Address: <span>{doctor.address}</span></p>
          </div>
          <div className='aboutme'>
            <h2>About Me:</h2>
            <p>{doctor.about}</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <h2>Feedback</h2>
        <p className='reviewnum'>All reviews <span>({reviews.length})</span>:</p>
        {reviews.map((review, index) => (
          <div className="feedback" key={index}>
            <img src={img} alt="" />
            <div className='feed'>
              <p className='name'>{review.name}</p>
              <p>{review.date}</p>
              <div className="stars">
                {[...Array(Math.floor(review.rating))].map((_, i) => (
                  <FaStar key={i} />
                ))}
                {review.rating % 1 !== 0 && <FaStarHalf />}
                {[...Array(5 - Math.ceil(review.rating))].map((_, i) => (
                  <CiStar key={i} />
                ))}
              </div>
            </div>
            <div className='comment'>
              <h3>Comment:</h3>
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
        <button className='feedbackbtn' onClick={() => setShowFeedbackForm(true)}>Give Feedback</button>
      </div>
      {showFeedbackForm && (
        <div className="feedback-form">
          <h2>Provide Your Feedback</h2>
          <input type="text" placeholder="Your Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
          <div>
            <p>Rating:</p>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} onClick={() => setUserRating(i + 1)} style={{ color: (i + 1) <= userRating ? "#ffc107" : "#e4e5e9", cursor: "pointer" }} />
              ))}
            </div>
          </div>
          <textarea placeholder="Your Comment" value={userComment} onChange={(e) => setUserComment(e.target.value)} />
          <button onClick={handleSubmitFeedback}>Submit</button>
          <button onClick={() => setShowFeedbackForm(false)}>Cancel</button>
        </div>
      )}
      </div>
      
      
    </div>
  );
}

export default DoctorProfile;
