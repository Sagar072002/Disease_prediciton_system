import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import { SiteContext, SiteContextProvider } from './context/siteContext';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Terms from './Components/Symptom/Terms';
import About from './Components/About/About';
import Symptom from './Components/Symptom/Symptom';
import DRegister from './Components/Register/DRegister';
import Dlogin from './Components/Login/Dlogin';
import FindDoctor from './Components/Doctor/FindDoctor';
import Mainlogin from './Components/Login/Mainlogin';
import Admin from './Components/Admin/Admin';
import User from './Components/Admin/User';
import Dctr from './Components/Admin/Dctr';
import Doctor from './Components/Doctor/Doctor';
import DoctorProfile from './Components/Doctor/DoctorProfile';
import Disease from './Components/Symptom/Disease';
import Medicine from './Components/Search/Medicine';
import Adminlogin from './Components/Login/Adminlogin';
import Adminreg from './Components/Register/Adminreg';
import Success from './Components/Symptom/Success';

const App = () => {

  const { uid } = useContext( SiteContext )
  const [ logged, setLogged ] = useState(false)
  useEffect(()=>{
    if(uid)
      setLogged(true)
  },[uid])

  return (
    <>
      {/* <SiteContextProvider> */}
        <Router>
          {
            logged
            ?
            [
              <Header key={"header"} />,
              <Routes key={"routes"} >,
                <Route key={"home"} path='/' element={ <Home/> } />,
                <Route key={"login"} path='/login' element={ <Navigate replace to="/"/> } />,
                <Route key={"doctorlogin"} path='/doctorlogin' element={<Navigate replace to="/"/> } />,
                <Route key={"contact"} path='/contact' element={ <Contact/> } />,
                <Route key={"terms"} path='/symptom' element={ <Terms/> } />,
                <Route key={"symptom"} path='/symptom/predict' element={ <Symptom/> } />,
                <Route key={"about"} path='/about' element={ <About/> } />,
                <Route key={"finddoctor"} path='/finddoctor' element={ <FindDoctor/> } />,
                <Route path='/doctorpage/:id' element={ <DoctorProfile/> } />,
                <Route key={"successpage"} path='/checkout-success' element={<Success/> } />,
              </Routes>,
              <Footer key={"footer"} />
            ]
            :
            <Routes>
              <Route path="/" element={<Navigate replace to="/mainlogin"/>} />
              <Route path='/mainlogin' element={ <Mainlogin/> } />,
              <Route key={"finddoctor"} path='/finddoctor' element={ <FindDoctor/> } />,
              <Route path='/admin' element={ <Admin/> } />,
              <Route path='/medicine' element={ <Medicine/> } />,
              <Route path='/doctor' element={ <Doctor/> } />,
              <Route path='/admin-user' element={ <User/> } />,
              <Route path='/admin-dctr' element={ <Dctr/> } />,
              <Route path='/disease' element={ <Disease/> } />,
              <Route key={"doctorregister"} path='/doctorregister' element={<DRegister/> } />,
              <Route key={"doctorlogin"} path='/doctorlogin' element={<Dlogin/> } />,
              <Route key={"adminlogin"} path='/adminlogin' element={<Adminlogin/> } />,
              <Route key={"successpage"} path='/checkout-success' element={<Success/> } />,
              <Route key={"adminregister"} path='/adminregister' element={<Adminreg/> } />,
              <Route path='/doctorpage/:id' element={ <DoctorProfile/> } />,
              <Route path='/login' element={ <Login/> } />,
              <Route path='/register' element={ <Register/> } />,
            </Routes>
          }
        </Router>
      {/* </SiteContextProvider> */}
    </>
  )
}

export default App