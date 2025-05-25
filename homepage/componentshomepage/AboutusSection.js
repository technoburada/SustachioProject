import React from "react";
import { Link } from "react-router-dom"; 
import { HiArrowCircleRight } from "react-icons/hi";
import "./AboutusSection.css";


const AboutUsSection = () => {
  return (
    <section className="homepageabout-us-section">
      <div className="homepageabout-us-content">
        <div className="homepageimages-container">
          <div className="homepagelarge-circle">
            <img
              src="aboutuspagelarge.png" // Replace with the tractor image

              className="homepagelarge-image"
            />
          </div>
          <div className="homepagesmall-circle">
            <img className="homepagesmall-image"
              src="aboutuspagesmall.png" // Replace with the hand inspecting crops image 
    
            />
          </div>
        </div>

        <div className="homepagetext-content">
          <h5 className="homepagesection-intro">Our Promise To You</h5>
          <h2 className="homepagesection-title">Sustachio</h2>
          <h3 className="homepagesection-subtitle">
          We help you meet & exceed your foodware products with sustainability goals
          </h3>
          <p className="homepagesection-description"> Sustachio, we offer certified sustainable foodware products for restaurants and manufacturers, 
            providing eco-friendly, recyclable, 
            and compostable alternatives that meet top EU food safety standards.
          </p>

          <div className="homepagefeatures">
            <div className="homepagefeature-box">
              <i className="fas fa-seedling homepagefeature-icon"></i>
              <h4><a href="#">Using Pistachio shells and Spent grains (Beer Waste) <i class="fa fa-external-link"></i></a></h4> 
            </div>
            <div className="homepagefeature-box">
              <i className="fas fa-recycle homepagefeature-icon2"></i>
              <h4><a href="#">Tips for Composting our products <i class="fa fa-external-link"></i></a></h4>
            </div>
          </div>

          <ul className="homepagekey-points">
          
            <li> <i className="fas fa-check-circle"></i> We use plant-based fibers to create sustainable Foodware Products.</li>
            <li><i className="fas fa-check-circle"></i> Our production process minimizes carbon emissions.</li>
            <li><i className="fas fa-check-circle"></i> Our Foodware Solutions are designed to fit into a circular economy.</li>
            <li><i className="fas fa-check-circle"></i> We help businesses cut down on plastic use.</li>
            <li><i className="fas fa-check-circle"></i> We meet environmental regulations and standards.</li>
            <li><i className="fas fa-check-circle"></i> We support eco-conscious consumer expectations.</li>
            <li><i className="fas fa-check-circle"></i> We design for businesses of all sizes.</li>
            <li><i className="fas fa-check-circle"></i> We innovative and compliant for sustainable Foodware Products.</li>
          </ul>

          <Link className="homepagediscover-more-btn flex items-center gap-2" to="/AboutCompany">
          Learn more about us <HiArrowCircleRight size={24} />
          </Link> 
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
