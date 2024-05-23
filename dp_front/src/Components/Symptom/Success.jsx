import React from 'react'
import "./Symptom.css"
import pic from "../../assets/tick.jpg"

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
      <a href="/" className="btn">
        Continue Shopping
      </a>
    </div>
  </div>
  )
}

export default Success