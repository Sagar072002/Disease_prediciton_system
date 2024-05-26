import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import { SiteContext, SiteContextProvider } from './context/siteContext';
import ProtectedRoute from './ProtectedRoute';
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
import Dctr from './Components/Admin/Dctr';
import Doctor from './Components/Doctor/Doctor';
import DoctorProfile from './Components/Doctor/DoctorProfile';
import Disease from './Components/Symptom/Disease';
import Medicine from './Components/Search/Medicine';
import Adminlogin from './Components/Login/Adminlogin';
import Adminreg from './Components/Register/Adminreg';
import Success from './Components/Symptom/Success';
import Appointment from './Components/Admin/Appointment';
import Userprofile from './Components/Home/Userprofile';
import Docprofile from './Components/Doctor/Docprofile';
import Docreviews from './Components/Doctor/Docreviews';

const App = () => {

  const { uid } = useContext( SiteContext )
  const [ logged, setLogged ] = useState(false)
  useEffect(()=>{
    if(uid)
      setLogged(true)
  },[uid])

  return (
    <>
        <Router>
          {
            logged
            ?
            [
              <Header key={"header"} />,
              <Routes key={"routes"} >
                <Route exact path='/' element={ <Home/> } />
                <Route exact path='/medicine' element={ <Medicine/> } />
                <Route exact path='/disease' element={ <Disease/> } />
                <Route exact key={"contact"} path='/contact' element={ <Contact/> } />
                <Route exact key={"terms"} path='/symptom' element={ <Terms/> } />
                <Route exact key={"symptom"} path='/symptom/predict' element={ <Symptom/> } />
                <Route exact key={"about"} path='/about' element={ <About/> } />
                <Route exact key={"finddoctor"} path='/finddoctor' element={ <FindDoctor/> } />
                <Route exact path='/doctorpage/:id' element={ <DoctorProfile/> } />
                <Route exact key={"successpage"} path='/checkout-success' element={<Success/> } />
                <Route exact key={"doctorpage"} path='/doctor' element={ <ProtectedRoute allowedRoles={['doctor']} > <Doctor/> </ProtectedRoute> } />
                <Route exact path='/docprofile' element={ <ProtectedRoute allowedRoles={['doctor']} ><Docprofile/></ProtectedRoute> } />
                <Route exact path='/doctorreviews' element={ <ProtectedRoute allowedRoles={['doctor']} ><Docreviews/></ProtectedRoute> } />
                <Route exact path='/userprofile' element={ <ProtectedRoute allowedRoles={['user']} ><Userprofile/></ProtectedRoute> } />
                <Route exact path='/admin' element={ <ProtectedRoute allowedRoles={['admin']} ><Admin/></ProtectedRoute> } />
                <Route exact path='/admin-dctr' element={ <ProtectedRoute allowedRoles={['admin']} ><Dctr/></ProtectedRoute> } />
                <Route exact path='/admin-appointment' element={ <ProtectedRoute allowedRoles={['admin']} ><Appointment/></ProtectedRoute> } />
                <Route path="/*" element={<Navigate to="/" replace />} />
              </Routes>,
              <Footer key={"footer"} />
            ]
            :
            <Routes>
              <Route exact key={"doctorregister"} path='/doctorregister' element={<DRegister/> } />
              <Route exact key={"doctorlogin"} path='/doctorlogin' element={<Dlogin/> } />
              <Route exact key={"adminregister"} path='/adminregister' element={<Adminreg/> } />
              <Route exact key={"adminlogin"} path='/adminlogin' element={<Adminlogin/> } />
              <Route exact path='/register' element={ <Register/> } />
              <Route exact path='/login' element={ <Login/> } />
              <Route exact path='/' element={ <Mainlogin/> } />
              {/* <Route path="/*" element={<Navigate to="/" replace />} /> */}
            </Routes>
          }
        </Router>
    </>
  )
}

export default App