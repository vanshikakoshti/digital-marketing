// HeroSection.jsx
import React from "react";
import "./custom.css"; // Optional for custom styles
import heroImg from "./assets/img/hero-img.png"; // Replace with your actual image
import CounterBox from "./CounterBox";

const HeroSection = () => {
  return (
    <section className=" py-lg-5 py-5 ">
      <div className="container ">
      <div className="row align-items-center justify-content-between py-lg-5 py-5">
        {/* Left Text Content */}
        <div className="col-lg-6 col-md-6">
          <p className="text-yellow text-uppercase">Digital Marketing</p>
          <h1 className="banner-heading">
            CONVERTING <span className="text-yellow"> VISITORS </span> INTO 
            DEDICATED CUSTOMERS.
          </h1>
          <p className="my-3">
            We develop focused digital marketing strategies designed to capture attention and foster long-term connections.
          </p>
          <div className="mt-4">
            <button className="btn btn-cust px-4">Get Started</button>
          </div>

          <div className="d-flex gap-5 mt-5 gap-md-2" >
            <CounterBox end={95} suffix="%" label="Client Satisfaction" />
            <CounterBox end={30} suffix="+" label="Brands Served" />
            <CounterBox end={99} suffix="%" label="On-Time Delivery" />
          </div>
        </div>

        {/* Right Image + Card */}
        <div className="col-lg-5 col-md-6 position-relative">
          <img src={heroImg} alt="Team" className="hero-section-img" />
          <div className="p-3 hero-section-img-text" data-aos="fade-up" data-aos-delay="200">
          </div>
        </div>
      </div>
     </div>
    </section>
  );
};

export default HeroSection;
