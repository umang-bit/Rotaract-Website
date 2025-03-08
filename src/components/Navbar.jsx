import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navlinks = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },{
      id: 2,
      title: "About Us",
      link: "/about-us",
    },{
      id: 3,
      title: "Gallery",
      link: "/gallery",
    },{
      id: 4,
      title: "Events",
      link: "/events",
    },{
      id: 5,
      title: "Our Team",
      link: "/our-team",
    },{
      id: 6,
      title: "Contact Us",
      link: "/contact-us",
    },
  ];
  return (
    <>
    <div className="h-[50px] md:h-[80px] bg-white drop-shadow-xl sticky top-0 z-50">
        <div className="flex justify-between items-center px-10 md:px-32 xl:px-40 h-full">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/dpmlrxlzr/image/upload/v1737817192/image_1_v0op0j.svg"
              alt="rota-logo"
              className="h-[40px] md:h-[60px]"
            />
          </div>
          {/* Nav Links */}
          <div className="hidden lg:flex items-center">
            <ul className="flex items-center space-x-10">
              {navlinks.map((link) => (
                <li
                  key={link.id}
                  className="text-[#006E99] text-[16px] font-semibold"
                >
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Burger Menu */}
          <div className="lg:hidden">
            <button
              className="text-[#006E99] focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-[#000000b8] bg-opacity-80 z-50 flex items-center justify-center">
          <button
            className="absolute top-5 right-5 text-white focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="space-y-8 text-center">
            {navlinks.map((link) => (
              <li key={link.id} className="text-white text-xl font-semibold">
                <a href={link.link} onClick={() => setIsOpen(false)}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;


