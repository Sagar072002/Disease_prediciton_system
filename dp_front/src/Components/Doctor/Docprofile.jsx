import React, { useState, useEffect } from "react";
import img from "../../assets/man.jpg";
import img1 from "../../assets/logo.png";
import { Link } from "react-router-dom";
import userService from "../../services/user_service";

const Docprofile = () => {
    const [activeMenu, setActiveMenu] = useState("Edit Profile");
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [userList, setUserList] = useState([]);
  
    const handleMenuClick = (menu) => {
      setActiveMenu(menu);
    };
  
    useEffect(()=>{
      userService.getAll().then((res)=>{
        console.log("Res : ",res.data)
        setUserList(res.data)
      }).catch((err)=>{
        console.log("Error: ", err)
      })
  
    },[])
  
    useEffect(() => {
      // Filter users based on search query
      const filtered = userList.filter(
        (user) =>
          user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(filtered);
    }, [searchQuery, userList]);
  
  
    if (!userList.length) return <div>Loading...</div>;
  
  return (
    <div className="admin admindct">
    <div className="sidebar">
      <div className='logo'>
        <img src={img1} alt="" />
        <p>DISPRED</p>
      </div>
      <div className="image">
        <img src={img} alt="" />
        <p>Sagar Negi</p>
      </div>
      <div className="det">
       <Link to="/doctor"> <p className={activeMenu === "Appointments" ? "active" : ""} onClick={() => handleMenuClick("Appointments")}>Appointments</p> </Link>
       <Link to="/doctorreviews"> <p className={activeMenu === "Reviews" ? "active" : ""} onClick={() => handleMenuClick("Reviews")}>Reviews</p> </Link>
       <Link to="/docprofile"> <p className={activeMenu === "Edit Profile" ? "active" : ""} onClick={() => handleMenuClick("Edit Profile")}>Edit Profile</p> </Link>
        <button>Logout</button>
      </div>
    </div>
    <div className="rightside">
    <div className='prof '>
    <div className="profile-div dctrprof">
        <h2>Edit Profile</h2>
        <div className='profiles'>
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
                <label htmlFor="">Price</label>
                <input type="number" name="" id="" />
            </div>
            <div className="input-field">
                <label htmlFor="">Specialisation</label>
                <input type="text" name="" id="" />
            </div>

        </div>
        <div className="profile-container">
            <div className="input-field">
                <label htmlFor="">Qualification</label>
                <input type="text" name="" id="" />
            </div>
            <div className="input-field">
                <label htmlFor="">Time slot</label>
                <input type="email" name="" id="" />
            </div>
            <div className="input-field">
                <label htmlFor="">Address</label>
                <input type="number" name="" id="" />
            </div>
            <div className="input-field">
                <label htmlFor="">Introduction</label>
                <input type="number" name="" id="" />
            </div>
            

        </div>
        </div>
        <div>
            <button className='submitbutton'>Submit</button>
            <button className='cancelbutton'>Cancel</button>
        </div>
    </div>
    </div>
      </div>
  </div>
  )
}

export default Docprofile