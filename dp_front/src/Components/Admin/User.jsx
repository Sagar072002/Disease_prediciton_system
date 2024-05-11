import React, { useState, useEffect } from "react";
import "./admin.css";
import img from "../../assets/man.jpg";
import img1 from "../../assets/logo.png";
import { Link } from "react-router-dom";


const User = () => {
  const [counteron, Setcounteron] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Users");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  useEffect(() => {
    // Filter users based on search query
    const filtered = userList.filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchQuery]);

  // Dummy user list (replace with your actual user data)
  const userList = [
    {
      name: "Sagar Negi",
      age: 21,
      gender: "Male",
      contact: "9876543210",
      email: "abc@gmail.com",
    },
    {
      name: "Ayush Nautiyal",
      age: 21,
      gender: "Male",
      contact: "9876543210",
      email: "abc@gmail.com",
    },
    {
      name: "Harshit Bajpai",
      age: 21,
      gender: "Male",
      contact: "9876543210",
      email: "zyx@gmail.com",
    },
    {
      name: "Chinmay Raj Shah",
      age: 21,
      gender: "Male",
      contact: "9876543210",
      email: "cba@gmail.com",
    },
    {
      name: "John Doe",
      age: 21,
      gender: "Male",
      contact: "9876543210",
      email: "lmn@gmail.com",
    },
    {
      name: "sagar negi",
      age: 21,
      gender: "Male",
      contact: "9876543210",
      email: "xyz@gmail.com",
    },
    // Add more users as needed
  ];

  return (
    <div className="admin">
      <div className="sidebar">
        <div className="logo">
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
          <p
            className={activeMenu === "Appointments" ? "active" : ""}
            onClick={() => handleMenuClick("Appointments")}
          >
            Appointments
          </p>
          <p
            className={activeMenu === "Edit Profile" ? "active" : ""}
            onClick={() => handleMenuClick("Edit Profile")}
          >
            Edit Profile
          </p>
          <button>Logout</button>
        </div>
      </div>
      <div className="rightside">
        <div className="user">
          <div className="searchbar">
            <h2>Find a User</h2>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search User"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="userlist">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Contact</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.contact}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="dispdata"></div>
      </div>
    </div>
  );
};

export default User;
