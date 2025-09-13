import React from 'react'
import "./custom.css"; 
import aboutImg from "./assets/img/about.jpg"; 
import Navbar from './Navbar';
import {ServiceCardMini} from "./Services";
import PageHeader from "./PageHeader";
import { faChartLine, faHandshake } from "@fortawesome/free-solid-svg-icons";
import Footer from './Footer';



export  function About() {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="row" style={{justifyContent:'space-around', alignItems:'center'}}>
          <div className="col-md-4">
            <img src={aboutImg} alt="Team" className="" style={{borderRadius:'12px', height:'350px', objectFit:'cover'}} />
          </div>
          <div className="col-md-6">
            <p className="text-yellow text-uppercase">About Us</p>
            <h2 className="">
              Maximize Your Brand’s
              <br /> Online Potential
            </h2>
            <p>
              Unlock new opportunities for growth with strategies designed to
              boost visibility, attract the right audience, and convert interest
              into results.
            </p>
            <div className="my-4">
            <button className="btn btn-cust px-4">Learn More</button>
            </div>

            <div className="row justify-content-center">
              <div className='col-md-6'>
                <ServiceCardMini
                  icon={faHandshake}
                  title="Social Media Marketing"
                />
              </div>
              <div className='col-md-6'>
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
              We are passionate about delivering innovative solutions that help businesses thrive in the digital era.
              <br />
              Our team combines creativity, technology, and expertise to craft
            </>
          }
      />
      <About/>
      <Footer/>
    </>
  )
}
