import React from 'react';

const Event = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.imageUrl} alt={event.title} className="event-image" />
      <div className="event-details">
        <h2>{event.title}</h2>
        <p><strong>Venue:</strong> {event.venue}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Program duration:</strong> {event.duration}</p>
        <p>{event.description}</p>
        <button>JOIN THE PROGRAM</button>
        <div className="event-date">{event.date}</div>
      </div>
    </div>
  );
};

export default Event;


