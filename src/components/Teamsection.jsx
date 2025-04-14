
import React, { useState } from "react";
import "./TeamSection.css";

const TeamSection = () => {
  const [year, setYear] = useState(2024);

  
  const teamData = {
    2023: [
      { name: "Atyshraj Yadav", role: "President", image: "atyush.jpg" },
      { name: "Subarna Bhownik", role: "Vice President", image: "subarna.jpg" },
      { name: "Vedant Asawa", role: "Treasurer", image: "vedant.jpg" },
      { name: "Soumyashree Nayak", role: "Secretary", image: "soumya.jpg" },
      { name: "Labhesh Sonawane", role: "Design Head", image: "labhesh.jpg" },
      { name: "Shubranki Maharana", role: "Sergeant at arms", image: "shubhranki.jpg" },
      
    ],
    2024: [
      { name: "Nitin Rai", role: "President", image: "david.jpg" },
      { name: "Swashreeta Senapati", role: "Vice President", image: "swashreeta.jpg"},
      { name: "Jatin Saini", role: "Treasurer", image: "Jatin.jpg" },
      { name: "Vidisha Rout", role: "Secretary", image: "vidisha.jpg" },
      { name: "Sai Sohan Sajja", role: "Editor in cheif", image: "saisojan.png" },
      { name: "Nishi Singh", role: "Sergeant at arms", image: "Nishi.jpg" },
      { name: "Elizabet Grace Stanley", role: "PR officer", image: "El.jpg" },
    ],

  };

  return (
    <section className="team-section">
        <div className="head">
        <h1>OUR TEAM</h1>
        </div>
     
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
  );
};

export default TeamSection;
