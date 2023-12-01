import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { SiteContextProvider } from './context/siteContext';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Symptom from './Components/Symptom/Symptom';
import About from './Components/About/About';

const App = () => {
  return (
    <>
      <SiteContextProvider>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/login' element={ <Login/> } />
            <Route path='/register' element={ <Register/> } />
            <Route path='/contact' element={ <Contact/> } />
            <Route path='/symptom' element={ <Symptom/> } />
            <Route path='/about' element={ <About/> } />
          </Routes>
          <Footer/>
        </Router>
      </SiteContextProvider>
    </>
  )
}

export default App
