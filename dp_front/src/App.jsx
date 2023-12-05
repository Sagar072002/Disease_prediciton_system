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
import Symptom from './Components/Symptom/Symptom';
import About from './Components/About/About';

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
              <Header/>,
              <Routes>,
                <Route path='/' element={ <Home/> } />,
                <Route path='/login' element={ <Navigate replace to="/"/> } />,
                <Route path='/register' element={ <Register/> } />,
                <Route path='/contact' element={ <Contact/> } />,
                <Route path='/symptom' element={ <Symptom/> } />,
                <Route path='/about' element={ <About/> } />,
              </Routes>,
              <Footer/>]
            :
            <Routes>
              <Route path="/" element={<Navigate replace to="/login"/>} />
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
