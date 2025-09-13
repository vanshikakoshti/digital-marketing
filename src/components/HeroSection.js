// HeroSection.jsx
import React from "react";
import "./custom.css"; // Optional for custom styles
import heroImg from "./assets/img/hero-img.jpg"; // Replace with your actual image
import CounterBox from "./CounterBox";

const HeroSection = () => {
  return (
    <section className="py-5 ">
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between hero-img-container">
        {/* Left Text Content */}
        <div className="col-lg-6 mb-4">
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
          <div className="p-3 hero-section-img-text">
            <p className="mb-1 fw-semibold">Trusted by Many Clients</p>
            <div className="d-flex align-items-center mb-2">
              <img
                src="https://i.pravatar.cc/30?img=1"
                className="client-img"
                alt="client1"
              />
              <img
                src="https://i.pravatar.cc/30?img=2"
                className="client-img"
                alt="client2"
              />
              <img
                src="https://i.pravatar.cc/30?img=3"
                className="client-img"
                alt="client3"
              />
              <span className="bg-secondary client-img text-white d-flex justify-content-center align-items-center">
                +
              </span>
            </div>

            <div className="text-warning">★★★★★</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
