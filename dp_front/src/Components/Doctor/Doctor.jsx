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
  
    useEffect(()=>{
      doctorService.getApps().then((res)=>{
        console.log("Res : ",res.data)
        setAppList(res.data)
      }).catch((err)=>{
        console.log("Error: ", err)
      })
  
    },[])
  
    // useEffect(() => {
    //   // Filter users based on search query
    //   const filtered = appList.filter(
    //     (user) =>
    //       user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //       user.email.toLowerCase().includes(searchQuery.toLowerCase())
    //   );
    //   setFilteredUsers(filtered);
    // }, [searchQuery, appList]);
  
  
    if (!appList.length) return <div>Loading...</div>;
  
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
                {filteredUsers.map((user, index) => (
                  <tr key={index}>
                    <td>{user.username}</td>
                    <td>Dctr</td>
                    <td>1000</td>
                    <td>23</td>
                    <td>Male</td>
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

export default Doctor