import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import logo from "./assets/img/logo.png"; 

export default function Footer() {
  return (
    <>
    <div className='cust-border py-4 py-md-5'>
     <div className="container">
        <div className="row" style={{justifyContent:'space-around'}}>
            <div className="col-md-4">
                <img src={logo} alt="Team" className="footer-logo"  />
                <p>A modern, fully customizable website template designed for agencies that want to showcase their services, portfolio, and expertise</p>
                <div className="d-flex my-4">
                    <div className="bg-secondary client-img text-white d-flex justify-content-center align-items-center"> <a href="/"><FontAwesomeIcon icon={faFacebookF} style={{ color: "#fff"}}/></a></div>
                    <div className="bg-secondary client-img text-white d-flex justify-content-center align-items-center"> <a href="/"><FontAwesomeIcon icon={faInstagram} style={{ color: "#fff"}}/></a></div>
                    <div className="bg-secondary client-img text-white d-flex justify-content-center align-items-center"> <a href="/"><FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#fff"}}/></a></div>
                    <div className="bg-secondary client-img text-white d-flex justify-content-center align-items-center"><a href="/"><FontAwesomeIcon icon={faYoutube} style={{ color: "#fff"}}/></a></div>
                </div>
            </div>
            <div className="col-md-2">
                <div>
                    <h4>Company</h4>
                    <ul className='footer-list'>
                        <li><a href='/'>About Us</a></li>
                        <li><a href='/'>Our Team</a></li>
                        <li><a href='/'>Blog & News</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-2">
                <div>
                    <h4>Services</h4>
                    <ul className='footer-list' >
                        <li><a href='/'>SEO Optimization</a></li>
                        <li><a href='/'>PPC Advertising</a></li>
                        <li><a href='/'>Content</a></li>
                        <li><a href='/'>Marketing</a></li>
                    </ul>
                </div>
            </div>
            

        </div>
        </div>
        </div> 
        <div className='cust-border'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p className='text-center my-4'>© {new Date().getFullYear()} Media Buzz. All rights reserved by <a href='https://vanshikakoshti.github.io/portfolio/' target='_blank' className='copyright'>Vanshika Koshti.</a></p>
                    </div>
                </div>
            </div>
        </div>
        
    </>
    
  )
}
