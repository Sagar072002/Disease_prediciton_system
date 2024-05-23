import React from 'react'
import "./Symptom.css"
import pic from "../../assets/tick.jpg"
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className="success">
    <div className="success-message">
      <h1>Payment Successful</h1>
      <p>
        Thank you for your purchase. Your payment has been processed
        successfully.
      </p>
      <img src={pic} alt="" />
      <Link to="/" className="btn">
        Continue
      </Link>
    </div>
  </div>
  )
}

export default Success