import React from "react";
import { Link } from "react-router-dom";
import { HiArrowCircleRight } from "react-icons/hi";
import "./BenefitSection.css";

import backgroundImg from "./herosectionhomepage.png";

const BenefitSection = () => {
  return (
    <section className="benefit-section">
      <div className="homebenefitleft-content">
        {/* Image Grid Section */}
        <div className="homebenefitimage-grid">
          <div className="homebenefitgrid-item">
            <img src={backgroundImg} alt="Benefit 1" />
          </div>
          <div className="homebenefitgrid-item">
            <img src={backgroundImg} alt="Benefit 2" />
          </div>
          <div className="homebenefitgrid-item">
            <img src={backgroundImg} alt="Benefit 2" />
          </div>
          <div className="homebenefitgrid-item">
            <img src={backgroundImg} alt="Benefit 2" />
          </div>
          <div className="homebenefitgrid-item">
            <img src={backgroundImg} alt="Benefit 2" />
          </div>
          <div className="homebenefitgrid-item">
            <img src={backgroundImg} alt="Benefit 2" />
          </div>
          <div className="homebenefitgrid-item">
            <img src={backgroundImg} alt="Benefit 3" />
          </div>
          <div className="homebenefitgrid-item">
            <img src={backgroundImg} alt="Benefit 4" />
          </div>
        </div>

      </div>

      <div className="homebenefitright-content">
        <h5>Superior Packaging for a Cleaner, Greener Planet</h5>
        <h2>Why Sustachio?</h2>
        <p>
          There are many variations of passages available, but the majority
          have suffered alterations in some form by injected humor or random
          word choices which don’t even look right.
        </p>
        
        <ul>
          <li>
            <i className="fas fa-check-circle"></i>
            <span>
              <strong>Sustainability You Can Trust - 100% Compostable (Eco-friendly)</strong>
              <br />
              Our commitment to ethical sourcing, safe production practices,
              and meeting EU sustainability standards makes us a reliable partner for businesses transitioning to eco-friendly foodware solutions.
            </span>
          </li>
          <li>
            <i className="fas fa-check-circle"></i>
            <span>
              <strong>Bio-fertilizer for indoor & outdoor plants</strong>
              <br />
              There are variations. You need to be sure there is anything hidden
              in the middle of text.
            </span>
          </li>
          <li>
            <i className="fas fa-check-circle"></i>
            <span>
              <strong>Circular Economy Integration</strong>
              <br />
              Our packaging is fully recyclable and compostable, closing the loop by returning to the earth as nutrient-rich compost,
              contributing to a zero-waste lifecycle.
            </span>
          </li>
          <li>
            <i className="fas fa-check-circle"></i>
            <span>
              <strong>Food Freshness Extended</strong>
              <br />
              With natural antimicrobial properties from pistachio hulls, our foodware products help to extend food shelf life,
              minimizing food waste and ensuring freshness longer.
            </span>
          </li>
          <li>
            <i className="fas fa-check-circle"></i>
            <span>
              <strong>Innovative & High-Performance Materials</strong>
              <br />
              The combination of fibrous brewery grains and pistachio shells creates a durable biocomposite foodware material that outperforms alternatives in functionality,
              including microwaveability and heat resistance.
            </span>
          </li>
          <li>
            <i className="fas fa-check-circle"></i>
            <span>
              <strong>Upcycled Food Waste Materials</strong>
              <br />
              We use brewery spent grains and pistachio shells (natural byproducts) to create high-performance,
              eco-friendly packaging that helps reduce single-use plastics and supports sustainability goals.
            </span>
          </li>
        </ul>
        <Link to="/products">
          <button className="benefitdiscover-more flex items-center gap-2">
            Explore our products <HiArrowCircleRight size={24} />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BenefitSection;
