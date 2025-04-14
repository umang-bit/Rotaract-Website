import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navlinks = [
    { id: 1, title: "HOME", link: "/" },
    { id: 2, title: "ABOUT", link: "/about-us" },
    { id: 3, title: "GALLERY", link: "/gallery" },
    { id: 4, title: "OUR EVENTS", link: "/events" },
    { id: 5, title: "OUR TEAM", link: "/our-team" },
    { id: 6, title: "CONTACT US", link: "/contact-us" },
  ];

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-inner">
          {/* Logo */}
          <div className="navbar-logo">
            <img
              src="https://res.cloudinary.com/dpmlrxlzr/image/upload/v1737817192/image_1_v0op0j.svg"
              alt="rota-logo"
            />
          </div>
          {/* Nav Links */}
          <div className="nav-links">
            <ul>
              {navlinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.link}
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Burger Menu */}
          <div className="burger-menu">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="mobile-overlay">
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul>
            {navlinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.link}
                  className="mobile-nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;


