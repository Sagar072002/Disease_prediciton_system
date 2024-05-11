import React, { useState } from "react";
import "./admin.css";
import img1 from "../../assets/logo.png";
import img from '../../assets/man.jpg';
import { Link } from "react-router-dom";


const User = () => {
  const [activeMenu, setActiveMenu] = useState("Doctors");
  const [searchQuery, setSearchQuery] = useState("");
  const [doctors, setDoctors] = useState([
    { name: "Sagar Negi", email: "abc@gmail.com", contact: "9876543210", specialization: "Suregon" },
    { name: "Ayush Nautiyal", email: "abc@gmail.com", contact: "9876543210", specialization: "Suregon" },
    { name: "Harshit  Bajpai", email: "abc@gmail.com", contact: "9876543210", specialization: "Suregon" },
    { name: "Chinmay Raj ", email: "abc@gmail.com", contact: "9876543210", specialization: "Suregon" },
    { name: "John Doe", email: "abc@gmail.com", contact: "9876543210", specialization: "Suregon" },
    { name: "Sagar Negi", email: "abc@gmail.com", contact: "9876543210", specialization: "Suregon" },
    // Add more doctors as needed
  ]);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to filter doctors based on search query
  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <Link to="/admin">  <p className={activeMenu === "Dashboard" ? "active" : ""} onClick={() => handleMenuClick("Dashboard")}>Dashboard</p></Link>
        <Link to="/admin-user">  <p className={activeMenu === "Users" ? "active" : ""} onClick={() => handleMenuClick("Users")}>Users</p></Link>
         <Link to="/admin-dctr"> <p className={activeMenu === "Doctors" ? "active" : ""} onClick={() => handleMenuClick("Doctors")}>Doctors</p> </Link>
          <p className={activeMenu === "Appointments" ? "active" : ""} onClick={() => handleMenuClick("Appointments")}>Appointments</p>
          <p className={activeMenu === "Edit Profile" ? "active" : ""} onClick={() => handleMenuClick("Edit Profile")}>Edit Profile</p>
          <button>Logout</button>
        </div>
      </div>
      <div className="rightside">
        <div className="user">
          <div className="searchbar">
            <h2>Find a Doctor</h2>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search Doctor"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className="userlist">
            {filteredDoctors.map((doctor, index) => (
              <div className="userdiv" key={index}>
                <div className="dctrimg">
                  <img src={img} alt="" />
                </div>
                <div className="detail">
                  <div className="leftdet">
                    <p>Name: </p>
                    <p>Email: </p>
                    <p>Contact: </p>
                    <p>Specialization: </p>
                  </div>
                  <div className="leftdet">
                    <p>{doctor.name}</p>
                    <p> {doctor.email}</p>
                    <p> {doctor.contact}</p>
                    <p> {doctor.specialization}</p>
                  </div>
                </div>
                <button>More</button>
              </div>
            ))}
          </div>
        </div>
        <div className="dispdata"></div>
      </div>
    </div>
  );
};

export default User;
