import React, { useState, useEffect } from "react";
import "./admin.css";
import img from "../../assets/man.jpg";
import img1 from "../../assets/logo.png";
import { Link } from "react-router-dom";
import clientApi from "../../services/client_api";

const Appointment = () => {
    const [activeMenu, setActiveMenu] = useState("Appointments");
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [appList, setAppList] = useState([]);
  
    const handleMenuClick = (menu) => {
      setActiveMenu(menu);
    };
  
    useEffect(()=>{
      clientApi.post('/booking/getAll').then((res)=>{
        console.log("Res : ",res.data)
        setAppList(res.data)
      }).catch((err)=>{
        console.log("Error: ", err)
      })
  
    },[])
  
    useEffect(() => {
      // Filter users based on search query
      const filtered = appList.filter(
        (app) =>
          app.user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(filtered);
    }, [searchQuery, appList]);
  
  
    if (!appList.length) return <div>Loading...</div>;
  
  return (
    <div className="admin admindct">
    <div className="sidebar">
      {/* <div className='logo'>
        <img src={img1} alt="" />
        <p>DISPRED</p>
      </div> */}
       <h2 className="dashboardtext">Admin </h2>
        <h2 className="dashboardtext2"> Dashboard</h2>
      <div className="image">
        <img src={img} alt="" />
        <p>Sagar Negi</p>
      </div>
      <div className="det">
      <Link to="/admin">  <p className={activeMenu === "Users" ? "active" : ""} onClick={() => handleMenuClick("Users")}>Users</p></Link>
       <Link to="/admin-dctr"> <p className={activeMenu === "Doctors" ? "active" : ""} onClick={() => handleMenuClick("Doctors")}>Doctors</p> </Link>
       <Link to="/admin-appointment"> <p className={activeMenu === "Appointments" ? "active" : ""} onClick={() => handleMenuClick("Appointments")}>Appointments</p> </Link>
        {/* <button>Logout</button> */}
      </div>
    </div>
    <div className="rightside">
        <div className="user">
          <div className="searchbar">
            <h2>Find Appointments</h2>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search Appointments"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="userlist">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Doctor</th>
                  <th>Payment</th>
                  <th>Age</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((app, index) => (
                  <tr key={index}>
                    <td>{app.user.username}</td>
                    <td>{app.doctor.name}</td>
                    <td>{app.amount}</td>
                    <td>{app.user.age}</td>
                    <td>{app.user.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="dispdata"></div>
      </div>
  </div>
  )
}

export default Appointment