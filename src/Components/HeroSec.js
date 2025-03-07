import React from 'react'
import './App.css'
function HeroSec() {
  return (
    <div className='font-bold'>
      <section className="hero" id="hero">
        <div className="hero-image animate__animated animate__bounceInLeft">
            <img src={'/Portfolio/images/InShot_20230318_123120575.jpg'} alt="hero-image" id="hero-img"/>
        </div>
        <div className="hero-content">
        <h1 className='md:text-7xl text-6xl text-nowrap'><span className='text-[#fff700]'>Hi</span><span className='text-4xl'>, I am</span> Abhinav</h1>
        <div className='w-fit m-auto'><h2 id="blink" className='text-5xl'>Web Developer</h2></div>
        </div>
    </section>
    </div>
  )
}

export default HeroSec
