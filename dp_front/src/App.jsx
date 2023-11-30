import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { SiteContextProvider } from './context/siteContext';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Footer from './Components/Footer/Footer';
import Counter from './Components/Home/Counter/Counter';
import Review from './Components/Home/Review/Review';
import Faq from './Components/Home/FAQ/Faq';
import Sponsors from './Components/Home/Sponsors/Sponsors';
import Home from './Components/Home/home/Home';
import Contact from './Components/Contact/Contact';
import Symptom from './Components/Symptom/Symptom';

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
            <Route path='/counter' element={ <Counter/> } />
            <Route path='/review' element={ <Review/> } />
            <Route path='/faq' element={ <Faq/> } />
            <Route path='/sponsors' element={ <Sponsors/> } />
            <Route path='/contact' element={ <Contact/> } />
            <Route path='/symptom' element={ <Symptom/> } />
          </Routes>
          <Footer/>
        </Router>
      </SiteContextProvider>
    </>
  )
}

export default App
