import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import blog1Img from "./assets/img/blog-1.jpg";
import blog2Img from "./assets/img/blog-2.jpg";
import blog3Img from "./assets/img/blog-3.jpg";
import blog4Img from "./assets/img/blog-4.jpg";
import blog5Img from "./assets/img/blog-5.jpg";
import Navbar from "./Navbar";
import PageHeader from "./PageHeader";
import Footer from "./Footer";
import { Link } from "react-router-dom";

// ✅ Carousel Card Component
export function OurBlogs({ img, title, updatedDate, link }) {
  return (
    <div className="card mx-3" data-aos="fade-up" data-aos-delay="100">
      <img src={img} className="card-img-top" alt="img" />
      <div className="card-body">
        <p className="card-text">
          <small>{updatedDate}</small>
        </p>
        <h5 className="card-title">{title}</h5>
        <Link to="/" className="btn btn-cust">
          {link}
        </Link>
      </div>
    </div>
  );
}

// ✅ Owl Carousel Section (RENAMED)
export function BlogsCarouselSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="default-padding pb-0">
      <div className="container">
        <div
        className="row"
        style={{ justifyContent: "space-around", alignItems: "end" }}
      >
        <div className="col-md-5">
          <p className="text-yellow text-uppercase">Our Blog & News</p>
          <h2 className="">
           Your Partner in Digital
            <br />  Transformation
          </h2>
        </div>
        <div className="col-md-6">
          <p>
            We provide a full suite of digital marketing solutions designed to
            help your brand thrive. From strategy and creativity to execution
          </p>
        </div>
      </div>
        <Slider {...settings} className="py-5">
          <OurBlogs
            img={blog1Img}
            updatedDate="Aug 16, 2025"
            title= {<>Affordable Website<br /> Website Solutions </>}  
            link="Read More"
          />
          
          <OurBlogs
            img={blog2Img}
            updatedDate="Aug 14, 2025"
            title={<>Landing Page Boosts<br /> Conversions</>}  
                      link="Read More"
          />
           <OurBlogs
            img={blog3Img}
            updatedDate="Aug 12, 2025"
            title={<>The Future of Web<br />Web Design Trends 2025</>}
            link="Read More"
          />
          <OurBlogs
            img={blog4Img}
            updatedDate="Aug 10, 2025"
            title={<>The Rise of Minimalist<br />Web Design in 2025</>}
            link="Read More"
          />
          <OurBlogs
            img={blog5Img}
            updatedDate="Aug 8, 2025"
            title={<>How AI is Transforming<br />the Future of Work</>}
            link="Read More"
          />
        </Slider>
      </div>
    </div>
  );
}

export default function Blogs() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="OUR BLOGS"
        breadcrumb="Our Blogs"
        description1={
          <>
            We craft targeted digital marketing strategies that not only attract
            attention but also <br />
            build lasting relationships. Through data-driven insights
          </>
        }
      />
      
      <BlogsCarouselSlider />
      <Footer />
    </>
  );
}
