import React from "react";
import Navbar from "./Navbar";
import PageHeader from "./PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRankingStar,
  faPenToSquare,
  faVideo,
  faCartShopping,
  faLaptop,
  faCloudArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

export function ServiceCardMini({ icon, title, description }){
  return (
    <div className="">
    <div className="card p-4 m-2 cust-card" data-aos="fade-up" data-aos-delay="100">
        <div  className="icon my-2" >
        <i><FontAwesomeIcon icon={icon} style={{ color: '#ffc107', fontSize: '32px' }}  /></i>
        <h6 className="">{title}</h6>
      </div>
      <p className="mb-0">{description}</p>
    </div>
    </div>
  );
};
export function ServiceCard({ icon, title, description }) {
  return (
    <div className="">
      <div className="card px-5 py-3 my-4 cust-card" data-aos="fade-up" data-aos-delay="100">
        <div className="icon my-3">
          <i>
            <FontAwesomeIcon
              icon={icon}
              style={{ color: "#ffc107", fontSize: "32px" }}
            />
          </i>
          <h4 className="">{title}</h4>
        </div>
        <p className="mb-0">{description}</p>
      </div>
    </div>
  );
}

export function ServiceCardMainSection({ icon, title, description }) {
  return (
    <div className="container">
      <div
        className="row"
        style={{ justifyContent: "space-around", alignItems: "end" }}
      >
        <div className="col-md-5">
          <p className="text-yellow text-uppercase">Our Services</p>
          <h2 className="">
            Driving Growth Through
            <br /> Our Expertise
          </h2>
        </div>
        <div className="col-md-6">
          <p>
           We offer innovative IT solutions that support business growth, optimize operations, and prepare you for the future of technology.
          </p>
        </div>
      </div>
      <div className="row justify-content-center py-4">
        <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
          <ServiceCard
            icon={faRankingStar}
            title={
              <>
                Marketing
                <br />
                Solution
              </>
            }
            description="Boost your online store’s growth with customized e-commerce strategies. From optimizing product pages."
          />
        </div>
        <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
          <ServiceCard
            icon={faPenToSquare}
            title={
              <>
                Content
                <br />
                Marketing
              </>
            }
            description="Generate impactful content that engages your audience and elevates your brand’s reputation."
          />
        </div>
        <div className="col-md-4">
          <ServiceCard
            icon={faVideo}
            title={
              <>
                Video Production
                <br />
                Services
              </>
            }
            description="We create engaging videos that tell your brand’s story and highlight your unique value."
          />
        </div>
        <div className="col-md-4">
          <ServiceCard
            icon={faLaptop}
            title={
              <>
                Custom
                <br />
                Web Development
              </>
            }
            description="Custom websites designed to align with your business objectives, offering speed, security, and scalability."
          />
        </div>
        <div className="col-md-4">
          <ServiceCard
            icon={faCartShopping}
            title={
              <>
                E-Commerce
                <br />
                Setup
              </>
            }
            description="Complete e-commerce solutions with secure payments, easy management, and smooth checkout."
          />
        </div>
        <div className="col-md-4">
          <ServiceCard
            icon={faCloudArrowDown}
            title={
              <>
                Cloud
                <br />
                Integration
              </>
            }
            description="Smooth migration and integration with cloud platforms to enhance flexibility and performance."
          />
        </div>
      </div>
    </div>
  );
}
export function ChooseUs({ icon, title, description }) {
  return (
   <div className="section-padding ">
    <div className="container">
      <div
        className="row"
        style={{ justifyContent: "space-around"}}
      >
        <div className="col-md-5">
          <p className="text-yellow text-uppercase">Why Choose Us</p>
          <h2 className="">
           Why Brands
            <br /> Trust Archon
          </h2>
          <p>
           Discover fresh growth opportunities through targeted strategies that increase brand awareness, attract the right customers, and drive conversions.
          </p>
          <div className="my-4">
            <button className="btn btn-cust px-4">Learn More</button>
            </div>
        </div>
        <div className="col-md-6">
        <div className="row justify-content-center">
        <div className="col-md-6">
          <ServiceCardMini
            icon={faRankingStar}
            title="Trusted by Brands"
            description="We’ve executed impactful campaigns with proven outcomes."
          />
        </div>
        <div className="col-md-6">
          <ServiceCardMini
            icon={faPenToSquare}
            title="Creative Innovation"
            description="Blending creative vision with cutting-edge technology to innovate."
          />
        </div>
        <div className="col-md-6">
          <ServiceCardMini
            icon={faVideo}
            title="Analytics-Focused"
            description="Every decision we make is grounded in in-depth data analysis."
          />
        </div>
        <div className="col-md-6">
          <ServiceCardMini
            icon={faLaptop}
            title="Dedicated Support"
            description="Guiding you from initial consultation to ongoing campaign success."
          />
        </div>
      </div>
      </div>
      </div>
      </div>      
    </div>
  );
}
export default function Services() {
  return (
    <div className="">
    
        <Navbar />
        <PageHeader
          title="Our Services"
          breadcrumb="Our Services"
          description1={
            <>
              We provide a range of innovative IT solutions designed to help
              businesses grow, streamline operations,
              <br />
              and embrace the future of technology.
            </>
          }
        />
        <ServiceCardMainSection />
        <ChooseUs/>
        <Footer/>
    </div>
  );
}
