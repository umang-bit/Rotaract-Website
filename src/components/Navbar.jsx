import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import logo from '../assets/rotaract-logo.png'; // Adjust the path as needed

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Rotaract Club Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/events">Events</Link>
        <Link to="/our-team">Our Team</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;


