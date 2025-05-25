import React, { useState, useEffect } from "react";
import "./Aboutherosection.css";

import pistachioImage1 from "./food.png"; 
import pistachioImage2 from "./beerwaste.png"; 
import pistachioImage3 from "./pistachio.png"; 

const Sustainability = () => {
  const images = [pistachioImage1, pistachioImage2, pistachioImage3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Aboutherosection-container">
      
      {/* New Section Similar to MediaMarkt Banner */}
      <div className="Aboutherosection-background">
      </div>

      <div className="Aboutherosectiontree-container">
        <div className="Aboutherosection-image">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Pistachio Sustainability"
              className={`Aboutherosection-img ${currentImage === index ? "active" : ""}`}
            />
          ))}
          <div className="Aboutherosection-overlay"></div>

        </div>
      </div>

      <div className="Aboutherosection-content">
          <h2><strong>Sustachio GmbH </strong> is the number 1 in the Foodware Industry</h2>
          <div className="Aboutherosection-icons-container">
        <div className="Aboutherosection-icon-box">
          <i className="fas fa-recycle"></i>
        </div>
        <div className="Aboutherosection-icon-box">
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div className="Aboutherosection-icon-box">
          <i className="fas fa-industry"></i>
        </div>
        <div className="Aboutherosection-icon-box">
          <i className="fas fa-tools"></i>
        </div>
        <div className="Aboutherosection-icon-box">
          <i className="fas fa-brain"></i>
        </div>
        <div className="Aboutherosection-icon-box">
          <i className="fas fa-trash-alt"></i>
        </div>
        <div className="Aboutherosection-icon-box">
          <i className="fas fa-wind"></i>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Sustainability;
