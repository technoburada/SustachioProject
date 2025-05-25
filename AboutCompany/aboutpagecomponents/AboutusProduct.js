import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./AboutusProduct.css";
import Food from "./food.png";

const AboutusProduct = () => {
  return (
    <div className="about-company">
      <div className="aboutherocontent-section">
        {/* Left: Stacked Images */}
        <div className="aboutheroimage-box">
          <div className="aboutherosplit-image">
            <div className="aboutheroimage-section aboutherotop-left"></div>
            <div className="aboutheroimage-section aboutherobottom-left"></div>
            <div className="aboutheroimage-section aboutherotop-left"></div>
            <div className="aboutheroimage-section aboutherobottom-left"></div>
            <div className="aboutheroimage-section aboutherobottom-left"></div>
            <div className="aboutheroimage-section aboutherobottom-right"></div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="aboutherotext-section">
          <p className="aboutherosubtitle">Sustachio Story: From Waste to Worth</p>
          <h2 className="aboutherotitle">A Vision Rooted in Sustainability and Innovation</h2>
          <p className="aboutherodescription">
            At Sustachio, we redefine eco-friendly foodware products by utilizing upcycled, bio-based materials such as pistachio shells,
            brewery spent grains, and bio-starches. Our innovative biocomposite foodware products are designed to reduce reliance on traditional plastics and virgin wood fibers,
            offering a high-performance, sustainable alternative for food service.
          </p>
          <p className="aboutherodescription">
            Through our compostable plates, bowls, trays, and containers, we empower businesses and consumers to make greener choices without compromising durability or functionality.
            By integrating our solutions into everyday use, we contribute to a circular economy that transforms waste into valuable resources.
          </p>

          <ul className="aboutherofeatures">
            <li> Sustachio redefines sustainable foodware products with upcycled, bio-based materials.</li>
            <li> Uses pistachio shells, brewery spent grains, and bio-starches to create biocomposite foodware.</li>
            <li> Reduces reliance on traditional plastics and virgin wood fibers.</li>
            <li> Provides durable, functional, and eco-conscious foodware solutions.</li>
            <li> Offers plates, bowls, trays, and containers that break down naturally.</li>
            <li>Transforms waste into valuable resources for a more sustainable future.</li>
            <li> Enables businesses and consumers to adopt environmentally responsible foodware products.</li>
          </ul>

          <Link to="/products" className="aboutherodiscover-button flex items-center gap-2">
            Discover More <HiArrowCircleRight size={24} />
          </Link>

          {/* Food Image on Right */}
          <img src={Food} alt="Delicious food" className="aboutheroimage3" />
        </div>
      </div>
    </div>
  );
};

export default AboutusProduct;
