import { useContext } from 'react';
import './header.css';
import img from "../../assets/dispred.png"
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
      hideProgressBar: true,
      autoClose: 1000,
      pauseOnHover: false,
    });
    await delay(2000)
    logout()
  }

  return (
    <>
    <ToastContainer/>
    <div className="header">
      
    <img src={img} alt="" />
    <input className="searchbar" type="search" name="" placeholder='Search here...' id="" />
    <div className="links">
    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink>
    {/* <a href="#">Appointment</a> */}
    
    <NavLink to="/terms" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Prediction</NavLink>
    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact</NavLink>
    <Link onClick={LogOut} to="/">Logout</Link>
    {/* <a href="#">Register</a> */}
    </div>
    </div>
    </>
   )
  }
  export default Header