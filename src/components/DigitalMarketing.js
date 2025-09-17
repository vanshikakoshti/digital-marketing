import React from 'react'
import {About} from './AboutUs';
import {ContactForm} from './ContactUs';
import {ServiceCardMainSection, ChooseUs} from './Services';
import Navbar from './Navbar';
import Faqs from './Faqs';
import Footer from './Footer';
import HeroSection from './HeroSection';
import {BlogsCarouselSlider} from './Blogs';

export default function DigitalMarketing() {
  return (
    <div>
      <>
            <Navbar />
            <HeroSection />
            <hr />
            <About />
            <ServiceCardMainSection />
            <ChooseUs />
            <Faqs />
            <BlogsCarouselSlider />
            <ContactForm />
            <Footer />
      
          </>
    </div>
  )
}
