import React from 'react';
import Event from './Event';
import './EventsPage.css';
import eventimage from '../assets/eventimage.png';
const eventsData = [
  {
    title: "VRIDDHI",
    venue: "SAC Garden",
    time: "4pm to 6pm",
    duration: "3 days",
    description: "Vriddhi is the event you don't wanna miss upon. Always appreciates about the uniqueness of the event.",
    imageUrl: eventimage, 
    date: "Date"
  },
  {
    title: "VRIDDHI",
    venue: "SAC Garden",
    time: "4pm to 6pm",
    duration: "3 days",
    description: "Vriddhi is the event you don't wanna miss upon. Always appreciates about the uniqueness of the event.",
    imageUrl: eventimage, 
    date: "Date"
  },
  {
    title: "VRIDDHI",
    venue: "SAC Garden",
    time: "4pm to 6pm",
    duration: "3 days",
    description: "Vriddhi is the event you don't wanna miss upon. Always appreciates about the uniqueness of the event.",
    imageUrl: eventimage,  
    date: "Date"
  },
  {
    title: "VRIDDHI",
    venue: "SAC Garden",
    time: "4pm to 6pm",
    duration: "3 days",
    description: "Vriddhi is the event you don't wanna miss upon. Always appreciates about the uniqueness of the event.",
    imageUrl: eventimage,  
    date: "Date"
  }
];

// Step 2: Render the EventsPage component
const EventsPages = () => {
  return (
    <div className="events-container">
      {eventsData.map((event, index) => (
        <Event key={index} event={event} />
      ))}
    </div>
  );
};

export default EventsPages;

