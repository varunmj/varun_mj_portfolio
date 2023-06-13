import React from 'react'
import './FooterStyles.css'
import { FaFacebook,FaLinkedin,FaMailBulk,FaPhone,FaSearchLocation,FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#ffffff',marginRight:'2rem'}} />
                    <div>
                        <p>1315 W Lincoln Hwy</p>
                        <h4>Dekalb, Illinois, USA</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                        <FaPhone size={20} style={{color: '#ffffff',marginRight:'2rem'}} />
                        123-3456-789
                    </h4>
                </div>
                <div className='email'>
                    <h4>
                        <FaMailBulk size={20} style={{color: '#ffffff',marginRight:'2rem'}}/>varunmj978@gmail.com
                    </h4>
                </div>
            </div>

            <div className='right'>
                <h4>About me : Varun</h4>
                <p>"Hi All, 
                    My name is Varun Mohankumar and I’m a current graduate student looking for some mentorship to get into Product management.
                    Prior coming to the US, I worked in 2 Fortune 500 companies and have a work experience close to 6 years.
                    Data Analyst @ FLEX aka Flextronics
                    Cloud Engineer @ Amazon AWS

                    I have worked closely with Amazon AWS's Enterprise customers to solve their Production issues as an Escalations Engineer.  I have worked on lot of internal projects and developed tools for Internal use at AWS CS and AWS PS. 

                    Have competed in AWS Hackathon and have won the AWS Tech Hackathon 2022. 

                    As mentioned above currently I'm a graduate student at Northern Illinois University studying Masters in Management and Information Systems. Also currently working with Innovations Lab @ college of Business, NIU to build sustainable solutions using technology.
                    "
                </p>
                <div className='social'>
                    <FaFacebook size={30} style={{color: '#ffffff',marginRight:'1rem'}}/>
                    <FaLinkedin size={30} style={{color: '#ffffff',marginRight:'1rem'}}/>
                    <FaTwitter size={30} style={{color: '#ffffff',marginRight:'1rem'}}/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer