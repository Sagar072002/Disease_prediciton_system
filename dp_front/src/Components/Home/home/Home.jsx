import React from 'react';
import './Home.css'
import Sponsors from '../Sponsors/Sponsors';
import Review from '../Review/Review';
import Faq from '../FAQ/Faq';
import Counter from '../Counter/Counter';

const Home = () => {
  return (
    <>
   <Counter/>  
   <Sponsors/>
   <Review/>
   <Faq/>
    </>
  )
}

export default Home