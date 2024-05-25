import React, { useEffect, useState } from "react";
import Countup from "react-countup";
import "./admin.css";
import img from '../../assets/man.jpg';
import img1 from "../../assets/logo.png"
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom";
import clientApi from "../../services/client_api";
import doctorService from "../../services/doc_service";


const Admin = () => {
  const [counteron, Setcounteron] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [apps, setApps] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(()=>{
    clientApi.post('/booking/getAll').then((res)=>{
      console.log("Res: ",res.data)
      setApps(res.data)
    }).catch((err)=>{
      console.log("Error: ", err)
    })

    doctorService.getAll().then((res)=>{
      console.log("Res Doc : ",res.data)
      setDoctors(res.data)
    }).catch((err)=>{
      console.log("Error: ", err)
    })

  },[])

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  if (!apps.length || !doctors.length) return <div>Loading...</div>;

  return (
    <div className="admin">
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
        <div className="count-div">
          <ScrollTrigger
            className="innercounter"
            onEnter={() => Setcounteron(true)}
            onExit={() => Setcounteron(false)}
          >
            <h1>
              {counteron && (
                <Countup
                  className="counter"
                  start={0}
                  end={100}
                  duration={3}
                  delay={0}
                />
              )}
              + 
              <p>Users</p>
            </h1>
          </ScrollTrigger>
          <ScrollTrigger
            className="innercounter"
            onEnter={() => Setcounteron(true)}
            onExit={() => Setcounteron(false)}
          >
            <h1>
              {counteron && (
                <Countup
                  className="counter"
                  start={0}
                  end={200}
                  duration={3}
                  delay={0}
                />
              )}
              + 
              <p> Doctors</p>
            </h1>
          </ScrollTrigger>
          <ScrollTrigger
            className="innercounter"
            onEnter={() => Setcounteron(true)}
            onExit={() => Setcounteron(false)}
          >
            <h1>
              {counteron && (
                <Countup
                  className="counter"
                  start={0}
                  end={300}
                  duration={3}
                  delay={0}
                />
              )}
              + 
              <p> Appointments</p>
            </h1>
          </ScrollTrigger>
          <ScrollTrigger
            className="innercounter"
            onEnter={() => Setcounteron(true)}
            onExit={() => Setcounteron(false)}
          >
            <h1>
              {counteron && (
                <Countup
                  className="counter"
                  start={0}
                  end={400}
                  duration={3}
                  delay={0}
                />
              )}
              + 
              <p> Earnings</p>
            </h1>
          </ScrollTrigger>
        </div>
        <div className="midiv">
            <div className="doctrdiv">
                <h2>Our Doctors</h2>
                <table className="admin-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Specialisation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{doctors[0].name}</td>
          <td>{doctors[0].gender}</td>
          <td>{doctors[0].specialization}</td>
        </tr>
        <tr>
          <td>{doctors[1].name}</td>
          <td>{doctors[1].gender}</td>
          <td>{doctors[1].specialization}</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>Female</td>
          <td>Surgeon</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>Female</td>
          <td>Surgeon</td>
        </tr>
        <tr>
            <td className="lastcol" colSpan={3}>View All</td>
        </tr>
      </tbody>
    </table>
            </div>
            <div className="appoint">
                <h2>Latest Appointments</h2>
                <div className="table-container">
    <table className="admin-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Doctor Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{apps[0].user.username}</td>
          <td>{apps[0].user.age}</td>
          <td>{apps[0].user.gender}</td>
          <td>{apps[0].doctor.name}</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>21</td>

          <td>Female</td>
          <td>Dr. Johnson</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>21</td>

          <td>Female</td>
          <td>Dr. Johnson</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>21</td>

          <td>Female</td>
          <td>Dr. Johnson</td>
        </tr>
        <tr>
            <td className="lastcol" colSpan={4}>View All</td>
        </tr>
      </tbody>
    </table>
  </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
