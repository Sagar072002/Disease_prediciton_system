import React, { useState } from 'react';
import Countup from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './Counter.css'

const Counter = () => {
    const [counteron,Setcounteron]=useState(false);
  return (
    <div className='counter-div'>
    <ScrollTrigger className='innercounter' onEnter={()=>Setcounteron(true)} onExit={()=>Setcounteron(false)}>
    <h1>{counteron && <Countup className='counter' start={0} end={100} duration={3} delay={0}/>}+ <br /><span> patients treated</span></h1>
    </ScrollTrigger>
    <ScrollTrigger className='innercounter' onEnter={()=>Setcounteron(true)} onExit={()=>Setcounteron(false)}>
    <h1>{counteron &&  <Countup className='counter' start={0} end={200} duration={3} delay={0}/>}+ <br /><span> patients treated</span></h1>
    </ScrollTrigger>
    <ScrollTrigger className='innercounter' onEnter={()=>Setcounteron(true)} onExit={()=>Setcounteron(false)}>
    <h1>{counteron &&  <Countup className='counter' start={0} end={300} duration={3} delay={0}/>}+ <br /><span> patients treated</span></h1>
    </ScrollTrigger>
  </div>
  )
}

export default Counter