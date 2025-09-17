import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Services from './components/Services';
import Blogs from './components/Blogs';
import DigitalMarketing from './components/DigitalMarketing'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";

function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,     // whether animation should happen only once
    });
  }, []);

  return (
    <div className="App">
       <BrowserRouter basename="/digital-marketing">
        <Navbar />
        <Routes>
          <Route path="/" element={<DigitalMarketing />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/contact" element={<ContactUs />} />
          {/* Add more routes as needed */}
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
