import React, { useState, useEffect } from "react";
import "./HomePage.css";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import eventimage from '../assets/eventimage.png';

const eventsData = [
  {
    title: "VRIDDHI",
    venue: "SAC Garden",
    time: "4pm to 6pm",
    duration: "3 days",
    description: "Vriddhi is the event you don't wanna miss upon.",
    imageUrl: eventimage, 
    date: "Date"
  },
  {
    title: "VRIDDHI",
    venue: "SAC Garden",
    time: "4pm to 6pm",
    duration: "3 days",
    description: "Vriddhi is the event you don't wanna miss upon.",
    imageUrl: eventimage, 
    date: "Date"
  }
];

const HomePage = () => {
  const slides = [
    { image: image1, title: "Welcome to Rotaract NIT Rourkela", subtitle: "Uniting for a better tomorrow" },
    { image: image2, title: "Service Above Self", subtitle: "Serving the community with heart and action" },
    { image: image3, title: "Make the Difference", subtitle: "Be the change you wish to see" },
    { image: image4, title: "Empower and Inspire", subtitle: "Young leaders transforming lives" },
    { image: image5, title: "Building a Better World", subtitle: "Through teamwork, service, and leadership" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [year, setYear] = useState(2024);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  const handlePrevious = () => setCurrentIndex((prevIndex) => prevIndex === 0 ? slides.length - 1 : prevIndex - 1);
  const { image, title, subtitle } = slides[currentIndex];

  const teamData = {
    2023: [
      { name: "Atyshraj Yadav", role: "President", image: "david.jpg" },
      { name: "Subarna Bhownik", role: "Vice President", image: "david.jpg" },
      { name: "Vedant Asawa", role: "Treasurer", image: "david.jpg" }
    ],
    2024: [
      { name: "Nitin Rai", role: "President", image: "david.jpg" },
      { name: "Swashreeta Senapati", role: "Vice President", image: "swashreeta.jpg" },
      { name: "Jatin Saini", role: "Treasurer", image: "Jatin.jpg" }
    ],
  };

  return (
    <div className="home-page">
      <section id="home" className="fullscreen-container">
        <div className="carousel">
          <button className="arrow left-arrow" onClick={handlePrevious}>&#8592;</button>
          <img src={image} alt="slide" className="carousel-image active" />
          <div className="carousel-content">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <button className="arrow right-arrow" onClick={handleNext}>&#8594;</button>
        </div>
      </section>

      <section id="events" className="events-container">
        <h2>Upcoming Events</h2>
        {eventsData.map((event, index) => (
          <div key={index} className="event-box">
            <img src={event.imageUrl} alt={event.title} className="event-image" />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <span>{event.date}</span>
            <span>{event.time}</span>
            <span>{event.venue}</span>
          </div>
        ))}
      </section>

      <section id="team" className="team-section">
        <h1>Our Team</h1>
        <div className="year-selector">
          <button onClick={() => setYear(2023)}>2023</button>
          <button onClick={() => setYear(2024)}>2024</button>
        </div>
        <div className="team-grid">
          {teamData[year].map((member, index) => (
            <div key={index} className="team-box">
              <img src={member.image} alt={member.name} className="team-image" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about-us-section">
        <h1>About Us</h1>
        <p>This is the About Us section (you can fill this in later).</p>
      </section>

      <section id="contact" className="contact-us-section">
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, feel free to reach out!</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;
