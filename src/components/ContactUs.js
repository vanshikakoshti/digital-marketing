import React, { useState } from 'react';
import Navbar from './Navbar';
import PageHeader from "./PageHeader";
import Footer from './Footer';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Here you can send data to backend or display a success message
    alert('Message sent!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container section-padding" data-aos="fade-up" data-aos-delay="100">
        <div className="contact-container">
      <h2 className='text-center'>Contact Us</h2>
      <form onSubmit={handleSubmit} className="mt-4 ">
        <div className="row justify-content-center">
        <div className="col-md-4 mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="col-md-4 mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="col-md-8 mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input 
            type="text" 
            className="form-control" 
            id="subject" 
            name="subject" 
            value={formData.subject}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="col-md-8 mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea 
            className="form-control" 
            id="message" 
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className='text-center'>
        <button type="submit" className="btn btn-cust">Send Message</button>
        </div>
        </div>
      </form>
      </div>
    </div>


  );
}

export default function ContactUs() {
  return (
    <div>
    <>
    <Navbar/>
    <PageHeader
        title="CONTACT US"
        breadcrumb="Contact Us"
        description1={
            <>
               Let’s build the future together. If you're looking for a team that blends creativity, technology, 
              <br />
              and strategic thinking — you're in the right place.
            </>
          }
      />
      <ContactForm />
      <Footer/>
    </>
    </div>
  )
}

