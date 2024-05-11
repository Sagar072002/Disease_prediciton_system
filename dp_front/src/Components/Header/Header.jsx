import { useContext } from 'react';
import './header.css';
import img from "../../assets/logo.png"
import { NavLink, Link } from 'react-router-dom'
import { SiteContext } from '../../context/siteContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const { logout } = useContext(SiteContext)

  const LogOut =async ()=>{
    toast.success('LOGGED OUT!', {
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: false,
      autoClose: 2000,
      pauseOnHover: false,
    });
    await delay(2000)
    logout()
  }

  return (
    <>
    <ToastContainer/>
    <div className="header">
      <div className='logo'>
    <img src={img} alt="" />
    <p>DISPRED</p>
    </div>
    {/* <input className="searchbar" type="search" name="" placeholder='Search here...' id="" /> */}
    <div className="links">
    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink>
    <NavLink to="/finddoctor" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Find a doctor</NavLink>
    {/* <a href="#">Appointment</a> */}
    
    <NavLink to="/symptom" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Prediction</NavLink>
    {/* <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact</NavLink> */}
    <Link onClick={LogOut} to="/mainlogin">Logout</Link>
    {/* <a href="#">Register</a> */}
    </div>
    </div>
    </>
   )
  }
  export default Header