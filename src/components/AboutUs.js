import React from 'react'
import "./custom.css"; 
import aboutImg from "./assets/img/about.png"; 
import Navbar from './Navbar';
import {ServiceCardMini} from "./Services";
import PageHeader from "./PageHeader";
import { faChartLine, faHandshake } from "@fortawesome/free-solid-svg-icons";
import Footer from './Footer';



export  function About() {
  return (
    <div className="default-padding">
      <div className="container">
        <div className="row" style={{justifyContent:'space-around', alignItems:'center'}}>
          <div className="col-lg-4 col-md-8">
            <img src={aboutImg} alt="Team" className="" style={{borderRadius:'12px', height:'350px', objectFit:'cover'}} />
          </div>
          <div className="col-lg-6 col-md-12">
            <p className="text-yellow text-uppercase">About Us</p>
            <h2 className="">
              Elevate Your Brand’s 
              <br />Digital Presence
            </h2>
            <p>
             Discover new growth opportunities with tailored strategies that boost visibility.Engage the right audience effectively and transform their interest into measurable results.Drive meaningful outcomes that grow your brand.
            </p>
            <div className="my-4">
            <button className="btn btn-cust px-4">Learn More</button>
            </div>

            <div className="row justify-content-center"  data-aos="fade-up" data-aos-delay="100">
              <div className='col-lg-6 col-md-6'>
                <ServiceCardMini
                  icon={faHandshake}
                  title="Social Media Marketing"
                />
              </div>
              <div className='col-lg-6 col-md-6'>
                <ServiceCardMini
                  icon={faChartLine}
                  title="Performance Tracking"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function AboutUs() {
  return (
    <>
    <Navbar/>
    <PageHeader
        title="ABOUT US"
        breadcrumb="About Us"
        description1={
            <>
              We’re dedicated to providing cutting-edge solutions that empower businesses 
              <br />
              to succeed in today’s digital world.
            </>
          }
      />
      <About/>
      <Footer/>
    </>
  )
}
