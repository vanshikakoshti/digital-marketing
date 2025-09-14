import React from 'react'
import { Link } from 'react-router-dom';
import logo from "./assets/img/logo.png"; 
export default function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-theme">
        <div className="container">
          <a className="navbar-brand" href="/"><img src={logo} alt="Team" className="logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link className="nav-link" to="/about">About</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blogs">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
        </div>
      </nav>
    </div>
  )
}
