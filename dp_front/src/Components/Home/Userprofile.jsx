import React from 'react'

const Userprofile = () => {
  return (
    <div className='prof userprofile'>
    <div className="profile-div">
        <h2>Edit Profile</h2>
        <div className="profile-container">
            <div className="input-field">
                <label htmlFor="">Name</label>
                <input type="text" name="" id="" />
            </div>
            <div className="input-field">
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" />
            </div>
            <div className="input-field">
                <label htmlFor="">Phone number</label>
                <input type="number" name="" id="" />
            </div>
            <div className="input-field">
                <label htmlFor="">Age</label>
                <input type="number" name="" id="" />
            </div>
            <div className="input-field">
                <label htmlFor="">Gender</label>
                <input type="text" name="" id="" />
            </div>

        </div>
        <div>
            <button className='submitbutton'>Submit</button>
            <button className='cancelbutton'>Cancel</button>
        </div>
    </div>
    </div>
  )
}

export default Userprofile