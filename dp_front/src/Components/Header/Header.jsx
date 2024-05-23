import { useContext } from 'react';
import './header.css';
import img from "../../assets/logo.png"
import { NavLink, Link } from 'react-router-dom'
import { SiteContext } from '../../context/siteContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GiHamburgerMenu } from "react-icons/gi";
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
    // await delay(2000)
    logout()
  }

  return (
    <>
    <ToastContainer/>
    {/* <div className="header">
      <div className='logo'>
    <img src={img} alt="" />
    <p>DISPRED</p>
    </div>
    <div className="links">
    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink>
    <NavLink to="/finddoctor" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Find a doctor</NavLink>
    
    <NavLink to="/symptom" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Prediction</NavLink>
    <Link onClick={LogOut} to="/mainlogin">Logout</Link>
    </div>
    <GiHamburgerMenu className='ham' />
    
    </div> */}
    <header className="header">
  <nav>
  <div className='logo'>
    <img src={img} alt="" />
    <p>DISPRED</p>
    </div>
    <input type="checkbox" id="menu-toggle" />
    <label htmlFor="menu-toggle" className="menu-icon">
      ☰
    </label>
    <div className=" menu">
    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink>
    <NavLink to="/finddoctor" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Find a doctor</NavLink>
    
    <NavLink to="/symptom" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Prediction</NavLink>
    <Link onClick={LogOut} to="/mainlogin">Logout</Link>
    </div>
  </nav>
</header>

    </>
   )
  }
  export default Header