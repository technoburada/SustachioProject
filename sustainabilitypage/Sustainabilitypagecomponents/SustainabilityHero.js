import React from 'react';
import { HiArrowCircleRight } from "react-icons/hi";

import './SustainabilityHero.css';


// Importing images
import sdg3Img from "./goal3.jpeg";
import sdg12Img from "./goal12.jpeg";
import sdg15Img from "./goal15.jpeg";
import sdg17Img from "./goal17.jpeg";
import heroImg from "./heroimage.jpg"; // Hero section background

const SustainabilityHero = () => {
  const sdgCards = [
    { id: 3, image: sdg3Img, title: 'SDG 3' },
    { id: 12, image: sdg12Img, title: 'SDG 12' },
    { id: 15, image: sdg15Img, title: 'SDG 15' },
    { id: 17, image: sdg17Img, title: 'SDG 17' },
  ];

  return (
    <div className="sustainability-hero">
      {/* Hero Section */}
      <div
        className="sustainabilityhero-section1"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="sustainabilityhero-overlay1"></div>
        <div className="sustainabilityhero-content1">
          <h1>
            <i className="fas fa-leaf"></i> Sustainability <i className="fas fa-leaf"></i>
          </h1>
        </div>

        {/* Circular Icons */}
      <div className="sustainabilityhero-icons-container">
        <div className="sustainabilityhero-icon-box">
          <i className="fas fa-recycle"></i>
        </div>
        <div className="sustainabilityhero-icon-box">
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div className="sustainabilityhero-icon-box">
          <i className="fas fa-industry"></i>
        </div>
        <div className="sustainabilityhero-icon-box">
          <i className="fas fa-tools"></i>
        </div>
        <div className="sustainabilityhero-icon-box">
          <i className="fas fa-brain"></i>
        </div>
        <div className="sustainabilityhero-icon-box">
          <i className="fas fa-trash-alt"></i>
        </div>
        <div className="sustainabilityhero-icon-box">
          <i className="fas fa-wind"></i>
        </div>
      </div>
      </div>

      <br></br>
      <br></br>
        {/* Sustainable Development Section */}
      <div className="compare-bar">
        <button className="compare-button">Our Sustainable Development Goals</button>
        <div className="arrow">↓</div>
      </div>

      {/* SDG Cards Section */}
      <div className="sdg-cards">
        {sdgCards.map((card) => (
          <div key={card.id} className="sdg-card">
            <img src={card.image} alt={card.title} className="sdg-card-image" />
            <div className="sdg-card-content">
              <h3>{card.title}</h3>
              <button className="read-more-button">Read More <HiArrowCircleRight size={24}/> </button>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default SustainabilityHero;
