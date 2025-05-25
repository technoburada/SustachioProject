import React from 'react';
import { Link } from "react-router-dom";
import { HiArrowCircleRight } from "react-icons/hi";

import './SustainabilityWhatWeDo.css';
import qualityImage from './heroimage.jpg';
import compostableImage from './heroimage.jpg';
import productsImage from './heroimage.jpg';
import compost from './compost.jpg';

const FoodwareSection = () => {
  return (
    <div className="foodware-container">
      {/* Quality Standards Section */}
      <div className="quality-section">
        <div className="quality-cards">
          <div className="quality-card">
            <img src={qualityImage} alt="Quality Standards" />
            <h3>Quality Standards</h3>
            <button>Read More<HiArrowCircleRight size={24}/></button>
          </div>
          <div className="quality-card">
            <img src={compostableImage} alt="100% Compostable" />
            <h3>100% Compostable</h3>
            <button>Read More<HiArrowCircleRight size={24}/></button>
          </div>
          <div className="quality-card">
            <img src={productsImage} alt="Products" />
            <h3>Products</h3>
            <button>Read More<HiArrowCircleRight size={24}/></button>
          </div>
        </div>
      </div>

      {/* Healthy Foodwares Section */}
      <div className="healthy-foodwares">
        <div className="content">
          <h5>What We Do</h5>
          <h2>Healthy Foodwares for Earth</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse
            suscipit sagittis leo sit amet metus estibulum posuere cubilia
            curae. Leo sit met entum cubilia crae onec.rgregwregrgergdfgdfgdfg
          </p>
          <p>
            Lorem ipsum dolor sit amet adipiscing elit. Nulla placerat posuere
            dui. Pellentesque venenatis sem non lacus ac auctor.fdgfdgwrtrggegfdg
          </p>
          <p>
            Lorem ipsum dolor sit amet adipiscing elit. Nulla placerat posuere
            dui. Pellentesque venenatis sem non lacus ac auctor.fdgfdgwrtrggegfdg
          </p>
          <div className="icon-cards">
            <div className="icon-card">
              <i className="fas fa-leaf"></i>
              <h4>Harvesting</h4>
            </div>
            <div className="icon-card">
              <i className="fas fa-tools"></i>
              <h4>Maintenance</h4>
            </div>
            <div className="icon-card">
              <i className="fas fa-tractor"></i>
              <h4>Fencing</h4>
            </div>
          </div>
          <Link to="#">
            <button className="readmorewhatwedo">Read More<HiArrowCircleRight size={24}/></button>
          </Link>
        </div>
        <div className="image-section">
          <img src={compost} alt="Farmer" />
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-section1">
        <h3>
          <span>Foodware Market Leaders</span>
        </h3>
        <p>We’re popular in Foodware industry globally</p>
        <button className="discover-button">Discover More<HiArrowCircleRight size={24}/></button>
      </div>
    </div>
  );
};

export default FoodwareSection;
