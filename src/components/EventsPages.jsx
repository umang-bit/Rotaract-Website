import React from 'react';
import Event from './Event';
import './EventsPage.css';

// Import different images for each event
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpg';
import event4 from '../assets/event4.jpg';

const eventsData = [
  {
    title: "CLOTH DONATION",
    venue: "Azad Basti , Birsa Munda School , Sector 4 , etc.",
    time: "4pm to 6pm",
    duration: "1 day",
    description: "We organise  cloth donation drives regularly, distributing gently used clothes to those in need and spreading warmth and kindness within the community.",
    imageUrl: event1, 
    date: Recurrent
  },
  {
    title: "BIRSA MUNDA SCHOOL",
    venue: "Birsa Munda School , Jagda Rd",
    time: "9am to 12am",
    duration: "1 day",
    description: "Our club members conduct regular teaching sessions at Birsa Munda School, helping students with their studies and inspiring a love for learning through consistent support and guidance.",
    imageUrl: event2, 
    date: "Every Wednesday and Saturday"
  },
  {
    title: "RotaOlympics",
    venue: "Sports Complex , NIT RKL",
    time: "4pm to 6pm",
    duration: "3 days",
    description: "Rota Olympics is a fun-filled sports event where multiple teams compete in various games, promoting teamwork and sportsmanship. The funds raised are used to support meaningful social causes and community welfare initiatives.",
    imageUrl: event3,  
    date: "11 Nov 2024"
  },
  {
    title: "SaPNA 3.0",
    venue: "Koel Saraswati Shishu Vidya Mandir",
    time: "4pm to 6pm",
    duration: "3 days",
    description: "SaPNA is an initiative focused on menstrual hygiene, where we distribute sanitary pads to underprivileged women and spread awareness about menstrual health to promote dignity and well-being.",
    imageUrl: event4,  
    date: "26 Aug 2024"
  }
];

// EventsPages Component
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


