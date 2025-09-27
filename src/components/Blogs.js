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


export function BlogsCarouselSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
      responsive: [
    {
      breakpoint: 1024, // screens smaller than 1024px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768, // screens smaller than 768px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // screens smaller than 480px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false, // optionally hide dots on very small screens
      },
    },
  ],
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
            From start to finish, we tailor digital marketing services that get real results and help your brand grow.
          </p>
        </div>
      </div>
        <Slider {...settings} className="py-5">
          <OurBlogs
            img={blog1Img}
            updatedDate="Aug 16, 2025"
            title= {<>Mastering Digital<br />Marketing Tips</>}  
            link="Read More"
          />
          
          <OurBlogs
            img={blog2Img}
            updatedDate="Aug 14, 2025"
            title={<>Ultimate Guide to<br /> Digital Marketing</>}  
                      link="Read More"
          />
           <OurBlogs
            img={blog3Img}
            updatedDate="Aug 12, 2025"
            title={<>Boost Your Business<br />with Marketing</>}
            link="Read More"
          />
          <OurBlogs
            img={blog4Img}
            updatedDate="Aug 10, 2025"
            title={<>Top Digital Marketing<br />Trends 2025</>}
            link="Read More"
          />
          <OurBlogs
            img={blog5Img}
            updatedDate="Aug 8, 2025"
            title={<>From Clicks to<br />Customers Strategy</>}
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
           We create targeted digital marketing strategies that attract attention and build lasting <br />
           relationships using data-driven insights for real results. 
          </>
        }
      />
      
      <BlogsCarouselSlider />
      <Footer />
    </>
  );
}
