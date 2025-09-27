import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "./assets/img/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-theme">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          <img src={logo} alt="Team" className="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <span className="close-icon">&times;</span> // This shows "X"
          ) : (
            <span className="navbar-toggler-icon"></span> // Default hamburger
          )}
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={closeMenu}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs" onClick={closeMenu}>Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeMenu}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
