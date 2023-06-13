import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import PortfolioCards from '../components/Portfolio'

const Portfolio = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading ='PORTFOLIO.' text='Choose the Project to replicate.'/>
        <PortfolioCards />
        <Footer />
    </div>
  )
}

export default Portfolio