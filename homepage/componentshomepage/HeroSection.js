import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HiArrowCircleRight } from "react-icons/hi";
import '@emotion/styled';
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

import "./HeroSection.css";

import herosectionhomepage from "./herosectionhomepage.png";
import aboutuspagesmall from "./aboutuspagesmall.png";
import biobased from "./biobased.png";

const images = [herosectionhomepage, aboutuspagesmall, biobased];


function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homehero-section">
      {/* Background Section */}
      <div
        className="homehero-background"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="homehero-overlay">
          {/* Hero Text */}
          <div className="homehero-text">
            <p className="homewelcome-text">
              WELCOME TO SUSTACHIO <span className="homewelcome-textsmile-icon">😊</span>
            </p>
            <h1>
              Sustachio
              <span className="leaf-icon"> a revolution in Sustainable Foodware Industry <i className="fas fa-leaf"></i></span>
            </h1>
            <h3 style={{ fontFamily: '"Covered By Your Grace", sans-serif' }}>
              <i className="fas fa-recycle"></i> From Food Waste to Future Packaging  <i className="fas fa-seedling"></i>
            </h3>
            <p className="homehero-description">
              We upcycle brewery spent grains and pistachio shells into high-performance, 
              eco-friendly Foodware Products to help businesses ditch single-use plastics while staying compliant with EU sustainability regulations.
            </p>
            <Link to="/AboutCompany">
              <button className="homediscover-button flex items-center gap-2">
                Learn more about us <HiArrowCircleRight size={24} />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="infohome-section">
        <div className="infohome-box">
          <i className="fas fa-undo-alt"></i>
          <h3>Return Policy</h3>
          <p>Money Back Guarantee</p>
        </div>
      
        <div className="vertical-barhero"></div>

        <div className="infohome-box">
          <i className="fas fa-truck"></i>
          <h3>Free Shipping</h3>
          <p>On All Orders Over $45.00</p>
        </div>
        
        <div className="vertical-barhero"></div>

        <div className="infohome-box">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Store Locator</h3>
          <p>Find Your Nearest Store</p>
        </div>

        <div className="vertical-barhero"></div>
        <div className="infohome-box">
          <FontAwesomeIcon icon={faHeadset} size="3x" style={{ color: "#4caf50" }} />
          <h3>Customer Service</h3>
          <p>+49 XXX XXX XXX XX</p>
          <p>Mon - Thu: 08:00 - 17:00 </p>
          <p>Fri: 08:00 - 15:00</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
