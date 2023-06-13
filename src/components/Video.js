import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import spaceVideo from '../assets/space.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={spaceVideo} type='video/mp4' />
        </video>
        <div className='content'>
            <h1>..Varun MJ..</h1>
            <p>.Welcome to Varun's Portfolio.</p>
            <div>
                <Link to='/About' className='btn'>About</Link>
                <Link to='/Portfolio' className='btn btn-light'>Portfolio</Link>
            </div>
        </div>
    </div>
  )
}

export default Video