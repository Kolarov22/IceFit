import React from 'react'
import Navbar from '../components/Navbar'
import LandingHero from '../components/LandingHero'
import '../layouts/App.css'

const LandingPage = () => {
  return (
    <>
      <section className="ellipses">
        <div className="ellipse ellipse1"></div>
        <div className="ellipse ellipse2"></div>
        <div className="ellipse ellipse3"></div>
        <div className="ellipse ellipse4"></div>
      </section>
      <div className="glass overflow-hidden">
        <Navbar />
        <LandingHero />
      </div>
    </>
  );
}

export default LandingPage