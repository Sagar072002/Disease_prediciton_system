import React, { useState, useEffect, useContext } from "react";
import "./admin.css";
import img from "../../assets/man.jpg";
import img1 from "../../assets/logo.png";
import { Link } from "react-router-dom";
import adminService from "../../services/admin_service";
import { SiteContext } from "../../context/siteContext";


const Admin = () => {
  
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const { logout } = useContext(SiteContext)

  const LogOut =async ()=>{
    toast.success('LOGGED OUT!', {
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: true,
      autoClose: 2000,
      pauseOnHover: false,
    });
    // await delay(2000)
    logout()
  }

  const [activeMenu, setActiveMenu] = useState("Users");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [userList, setUserList] = useState([]);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  useEffect(()=>{
    adminService.getAllUsers().then((res)=>{
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
    <div className="admin">
      <div className="sidebar">
        {/* <div className="logo">
          <img src={img1} alt="" />
          <p>DISPRED</p>
        </div> */}
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
                    <td>{user.username}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
