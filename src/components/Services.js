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
            Our Expertise, Your
            <br /> Growth
          </h2>
        </div>
        <div className="col-md-6">
          <p>
            We provide a full suite of digital marketing solutions designed to
            help your brand thrive. From strategy and creativity to execution
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
            description="Accelerate your online store's growth with tailored e-commerce strategies. From product page optimization"
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
            description="Create valuable and engaging content that connects with your audience and strengthens brand authority."
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
            description="From concept to final cut, we create compelling video content that tells your brand story, showcases you"
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
            description="Tailored websites built to match your business goals with speed, security, and scalability."
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
            description="Complete online store solutions with secure payments, product management, and smooth checkout."
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
            description="Seamless migration and integration to cloud platforms for better flexibility and performance."
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
            Unlock new opportunities for growth with strategies designed to boost visibility, attract the right audience, and convert interest into results.
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
            title="Proven Track Record"
            description="We’ve successfully executed campaigns for brands"
          />
        </div>
        <div className="col-md-6">
          <ServiceCardMini
            icon={faPenToSquare}
            title="Innovative Solutions"
            description="We blend creativity with technology to develop fresh."
          />
        </div>
        <div className="col-md-6">
          <ServiceCardMini
            icon={faVideo}
            title="Data-Driven"
            description="Every decision we make is based on solid analytics"
          />
        </div>
        <div className="col-md-6">
          <ServiceCardMini
            icon={faLaptop}
            title="Client Support"
            description="From the initial consultation to ongoing campaign"
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
