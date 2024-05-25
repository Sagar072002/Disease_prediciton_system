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
              <Routes key={"routes"} >
                <Route path='/*' element={<Navigate replace to="/home"/>} />
                <Route key={"home"} path='/home' element={ <Home/> } />
                <Route exact path='/medicine' element={ <Medicine/> } />
                <Route exact path='/doctor' element={ <Doctor/> } />
                <Route exact path='/disease' element={ <Disease/> } />
                <Route exact key={"contact"} path='/contact' element={ <Contact/> } />
                <Route exact key={"terms"} path='/symptom' element={ <Terms/> } />
                <Route exact key={"symptom"} path='/symptom/predict' element={ <Symptom/> } />
                <Route exact key={"about"} path='/about' element={ <About/> } />
                <Route exact key={"finddoctor"} path='/finddoctor' element={ <FindDoctor/> } />
                <Route exact path='/doctorpage/:id' element={ <DoctorProfile/> } />
                <Route exact key={"successpage"} path='/checkout-success' element={<Success/> } />
              </Routes>,
              <Footer key={"footer"} />
            ]
            :
            <Routes>
              <Route exact path='/admin' element={ <Admin/> } />
              <Route exact path='/admin-user' element={ <User/> } />
              <Route exact path='/admin-dctr' element={ <Dctr/> } />
              <Route path="/*" element={<Navigate replace to="/mainlogin"/>} />
              <Route exact key={"doctorregister"} path='/doctorregister' element={<DRegister/> } />
              <Route exact key={"doctorlogin"} path='/doctorlogin' element={<Dlogin/> } />
              <Route exact key={"adminregister"} path='/adminregister' element={<Adminreg/> } />
              <Route exact key={"adminlogin"} path='/adminlogin' element={<Adminlogin/> } />
              <Route exact path='/register' element={ <Register/> } />
              <Route exact path='/login' element={ <Login/> } />
              <Route exact path='/mainlogin' element={ <Mainlogin/> } />
            </Routes>
          }
        </Router>
      {/* </SiteContextProvider> */}
    </>
  )
}

export default App