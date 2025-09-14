import './App.css';
import AboutUs, {About} from './components/AboutUs';
import ContactUs, {ContactForm} from './components/ContactUs';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Services, {ServiceCardMainSection, ChooseUs} from './components/Services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Blogs, {BlogsCarouselSlider} from './components/Blogs';


function HomePage() {
  return (
    <>
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
  );
}

function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,     // whether animation should happen only once
    });
  }, []);
  return (
    <div className="App">
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/contact" element={<ContactUs />} />
          {/* Add more routes as needed */}
        </Routes>
    </Router>
    </div>
  );
}

export default App;
