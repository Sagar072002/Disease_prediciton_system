import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { SiteContextProvider } from './context/siteContext';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
      <SiteContextProvider>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={ <Login/> } />
            <Route path='/login' element={ <Login/> } />
            <Route path='/register' element={ <Register/> } />
          </Routes>
          <Footer/>
        </Router>
      </SiteContextProvider>
    </>
  )
}

export default App
