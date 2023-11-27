import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { SiteContextProvider } from './context/siteContext';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Footer from './Components/Footer/Footer';
import Counter from './Components/Counter/Counter';
import Review from './Components/Review/Review';
import Faq from './Components/FAQ/Faq';

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
            <Route path='/counter' element={ <Counter/> } />
            <Route path='/review' element={ <Review/> } />
            <Route path='/faq' element={ <Faq/> } />
          </Routes>
          <Footer/>
        </Router>
      </SiteContextProvider>
    </>
  )
}

export default App
