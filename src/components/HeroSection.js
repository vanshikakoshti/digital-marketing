// HeroSection.jsx
import React from "react";
import "./custom.css"; // Optional for custom styles
import heroImg from "./assets/img/hero-img.png"; // Replace with your actual image
import CounterBox from "./CounterBox";

const HeroSection = () => {
  return (
    <section className="py-5 ">
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between hero-img-container">
        {/* Left Text Content */}
        <div className="col-lg-6">
          <p className="text-yellow text-uppercase">Digital Marketing</p>
          <h1 className="banner-heading">
            TURNING <span className="text-yellow">CLICKS</span> INTO <br />
            LOYAL CUSTOMERS
          </h1>
          <p className="my-3">
            We craft targeted digital marketing strategies that not only attract
            attention but also build lasting relationships.
          </p>
          <div className="mt-4">
            <button className="btn btn-cust px-4">Get Started</button>
          </div>

          <div className="d-flex gap-5 mt-5" >
            <CounterBox end={95} suffix="%" label="Client Satisfaction" />
            <CounterBox end={30} suffix="+" label="Brands Served" />
            <CounterBox end={99} suffix="%" label="On-Time Delivery" />
          </div>
        </div>

        {/* Right Image + Card */}
        <div className="col-lg-5 position-relative">
          <img src={heroImg} alt="Team" className="hero-section-img" />
          <div className="p-3 hero-section-img-text" data-aos="fade-up" data-aos-delay="200">
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
