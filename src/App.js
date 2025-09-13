import './App.css';
import AboutUs, {About} from './components/AboutUs';
import ContactUs, {ContactForm} from './components/ContactUs';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Services, {ServiceCardMainSection, ChooseUs} from './components/Services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <HeroSection />
      <hr />
      <About />
      <ServiceCardMainSection />
      <ChooseUs />
      <Faqs />
      <ContactForm />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<ContactUs />} />
          {/* Add more routes as needed */}
        </Routes>
    </Router>
    </div>
  );
}

export default App;
