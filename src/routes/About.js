import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import AboutSection  from '../components/About'

const About = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='ABOUT.' text ='You will find more information about Varun MJ'/>
        <AboutSection />
        
        <Footer />
    </div>
  )
}

export default About