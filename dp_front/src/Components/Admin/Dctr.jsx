import React, { useState, useEffect } from "react";
import "./admin.css";
import img from "../../assets/man.jpg";
import img1 from "../../assets/logo.png";
import { Link } from "react-router-dom";
import adminService from "../../services/admin_service";
import doctorService from "../../services/doc_service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const User = () => {
  const [activeMenu, setActiveMenu] = useState("Doctors");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [dctrList, setDctrList] = useState([]);
  const showToastMessage =(msg) => {
    // console.log("called ",msg)
    if(msg === "success"){
      toast.success('Status Updated !', {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 1000,
          pauseOnHover: false,
          hideProgressBar: true
      });
    }
    else if(msg === "failed"){
      toast.warning('Update failed !', {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 1000,
          pauseOnHover: false,
          hideProgressBar: true
      });
    }
    };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  useEffect(()=>{
    doctorService.getAll().then((res)=>{
      console.log("Res : ",res.data)
      setDctrList(res.data)
    }).catch((err)=>{
      console.log("Error: ", err)
    })

  },[])

  useEffect(() => {
    // Filter users based on search query
    const filtered = dctrList.filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchQuery, dctrList]);

  const handleChange=(value,uid)=>{
    const data={
      status:value,
      uid:uid
    }
    adminService.updateDocStatus(data).then((res)=>{
      console.log("Res :",res)
      showToastMessage("success");
    }).catch((err)=>{
      console.log("Error :",err)
      showToastMessage("failed");
    })
  }


  if (!dctrList.length) return <div>Loading...</div>;

  return (
    <>
    <ToastContainer/>
    <div className="admin admindct">
      <div className="sidebar">
        {/* <div className='logo'>
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
            <h2>Find a Doctor</h2>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search Doctor"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              />
          </div>
          <div className="userlist">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Fees</th>
                  <th>Specialization</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.price}</td>
                    <td>{user.specialization}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>
                    <select onChange={(e)=>{handleChange(e.target.value,user._id)}} name="status" id="status">
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="cancelled">Cancelled</option>
                    </select>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default User;
