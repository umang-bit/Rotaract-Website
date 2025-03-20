import React, { useState, useEffect } from "react";
import "./HomePage.css";
import image1 from "../assets/images/image1.jpg";  
import image2 from "../assets/images/image2.jpg";  
import image3 from "../assets/images/image3.jpg";  
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";    
import HomePageComponent from "../pages/HomePage"; 


const HomePage = () => {
  const images = [image1, image2, image3,image4,image5]; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="fullscreen-container">

      <div className="carousel">
        <button className="arrow left-arrow" onClick={handlePrevious}>
          &#8592;
        </button>
        <img
          src={images[currentImageIndex]} 
            alt="carousel"
            className="carousel-image active"
            style={{ width: "100%", height: "auto", objectFit: "cover" }} 
            />
        
        <div className="carousel-content">
          <h1>MAKE A DIFFERENCE</h1>
          <p>Our Mission</p>
        </div>

        <button className="arrow right-arrow" onClick={handleNext}>
          &#8594;
        </button>
      </div>

    </div>
  );
};

export default HomePage;