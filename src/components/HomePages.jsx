import React, { useState, useEffect } from "react";
import "./HomePage.css";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";

const HomePage = () => {
  const slides = [
    {
      image: image1,
      title: "Welcome to Rotaract NIT Rourkela",
      subtitle: "Uniting for a better tomorrow",
    },
    {
      image: image2,
      title: "Service Above Self",
      subtitle: "Serving the community with heart and action",
    },
    {
      image: image3,
      title: "Make the Difference",
      subtitle: "Be the change you wish to see",
    },
    {
      image: image4,
      title: "Empower and Inspire",
      subtitle: "Young leaders transforming lives",
    },
    {
      image: image5,
      title: "Building a Better World",
      subtitle: "Through teamwork, service, and leadership",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const { image, title, subtitle } = slides[currentIndex];

  return (
    <div className="fullscreen-container">
      <div className="carousel">
        <button className="arrow left-arrow" onClick={handlePrevious}>
          &#8592;
        </button>

        <img
          src={image}
          alt="slide"
          className="carousel-image active"
        />

        <div className="carousel-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>

        <button className="arrow right-arrow" onClick={handleNext}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default HomePage;
