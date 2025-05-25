import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./OurTeam.css";

import member1 from "./beerwaste.png";
import member2 from "./beerwaste.png";
import member3 from "./beerwaste.png";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Mohammad Ziyad Thahzeeb",
      role: "Chief Product & Innovation Officer (CPO & CIO)",
      image: member1,
      linkedin: "https://www.linkedin.com/in/mohammadziyad", // Replace with actual LinkedIn profile
      email: "ziyad@example.com",
    },
    {
      name: "Ömer Kücükacar",
      role: "Chief Operating & Technology Officer (COO & CTO)",
      image: member2,
      linkedin: "https://www.linkedin.com/in/omer-a-365789193/", // Replace with actual LinkedIn profile
      email: "omer@example.com",
    },
    {
      name: "Mariana Martinez",
      role: "Chief Marketing & Financial Officer (CMO & CFO)",
      image: member3,
      linkedin: "https://www.linkedin.com/in/mariana", // Replace with actual LinkedIn profile
      email: "mariana@example.com",
    },
    {
      name: "Mariana Martinez",
      role: "Chief Marketing & Financial Officer (CMO & CFO)",
      image: member3,
      linkedin: "https://www.linkedin.com/in/mariana", // Replace with actual LinkedIn profile
      email: "mariana@example.com",
    },
    {
      name: "Mariana Martinez",
      role: "Chief Marketing & Financial Officer (CMO & CFO)",
      image: member3,
      linkedin: "https://www.linkedin.com/in/mariana", // Replace with actual LinkedIn profile
      email: "mariana@example.com",
    },
    {
      name: "Mariana Martinez",
      role: "Chief Marketing & Financial Officer (CMO & CFO)",
      image: member3,
      linkedin: "https://www.linkedin.com/in/mariana", // Replace with actual LinkedIn profile
      email: "mariana@example.com",
    },
  ];

  return (
    <div className="team-section">
            <button className="compare-button">Our Team</button>
            <div className="arrow">&#8595;</div>
      <h2 className="team-section-title">Meet The Minds Behind Sustachio</h2>
      <p className="team-section-subtitle">OUR EXPERTS</p>
      <p className="team-section-subtitle">Innovation, Sustainability & Business Excellence</p>
      <div className="team-cards-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-card-image" />
            <div className="team-card-content">
              <h3 className="team-card-name">{member.name}</h3>
              <p className="team-card-role">{member.role}</p>
              
              {/* Social Icons */}
              <div className="team-card-icons">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={35} />
                </a>
                <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
                  <FaEnvelope size={35} />
                </a>
              </div>

              <Link to="/contact" className="team-card-button-container">
                <button className="team-card-button">
                  More about<HiArrowCircleRight size={24} />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
