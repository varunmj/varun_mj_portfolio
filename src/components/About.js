import React from 'react'
import './AboutStyles.css'

import pod from '../assets/img2.jpeg'
import moon from '../assets/img3.jpeg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1> About </h1>
            <p>This is Varun, currently pursuing MS in Management Information Systems at Northern Illinois University, IL. Prior to this, I was working in Amazon AWS as a Cloud Engineer in India. I have strong interest in developing products </p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={pod} className='img' alt='' />
                </div>
                <div className='image-stack bottom'>
                    <img src={moon} className='img' alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About