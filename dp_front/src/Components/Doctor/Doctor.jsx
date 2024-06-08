import React, { useState, useEffect } from "react";
import img from "../../assets/man.jpg";
import img1 from "../../assets/logo.png";
import { Link } from "react-router-dom";
import doctorService from "../../services/doc_service";

const Doctor = () => {
    const [activeMenu, setActiveMenu] = useState("Appointments");
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [appList, setAppList] = useState([]);
  
    const handleMenuClick = (menu) => {
      setActiveMenu(menu);
    };
  
    useEffect(() => {
      doctorService.getApps().then((res) => {
        console.log("Res : ", res.data);
        setAppList(res.data.bookings);
      }).catch((err) => {
        console.log("Error: ", err);
      });
    }, []);
  
    useEffect(() => {
      // Filter users based on search query
      const filtered = appList.filter(
        (app) =>
          app.user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.user.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(filtered);
    }, [searchQuery, appList]);
  
    return (
      <div className="admin admindct">
        <div className="sidebar">
          {/* <div className='logo'>
            <img src={img1} alt="" />
            <p>DISPRED</p>
          </div> */}
          <h2 className="dashboardtext">Doctor </h2>
        <h2 className="dashboardtext2"> Dashboard</h2>
          <div className="image">
            <img src={img} alt="" />
            <p>Sagar Negi</p>
          </div>
          <div className="det">
           <Link to="/doctor"> <p className={activeMenu === "Appointments" ? "active" : ""} onClick={() => handleMenuClick("Appointments")}>Appointments</p> </Link>
           <Link to="/doctorreviews"> <p className={activeMenu === "Reviews" ? "active" : ""} onClick={() => handleMenuClick("Reviews")}>Reviews</p> </Link>
           <Link to="/docprofile"> <p className={activeMenu === "Edit Profile" ? "active" : ""} onClick={() => handleMenuClick("Edit Profile")}>Edit Profile</p> </Link>
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
                    <th>Payment</th>
                    <th>Age</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((app, index) => (
                      <tr key={index}>
                        <td>{app.user.username}</td>
                        <td>{app.amount}</td>
                        <td>{app.user.age}</td>
                        <td>{app.user.gender}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">No appointments made</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="dispdata"></div>
        </div>
      </div>
    );
}

export default Doctor;
