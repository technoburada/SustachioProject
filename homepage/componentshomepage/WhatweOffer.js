import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import { FaMotorcycle, FaShoppingBag, FaConciergeBell, FaUtensils, FaStore, FaShoppingCart } from "react-icons/fa"; 
import "./WhatweOffer.css";

// Import images
import biobased from "./biobased.png";
import microwave from "./microwave.png";
import meat from "./meat.png";
import varietysproducts from "./varietysproducts.png";

const images = [biobased, microwave, meat, varietysproducts];

const services = [
  {
    image: biobased,
    title: "Delivery & Takeout",
    icon: <FaMotorcycle />,
  },
  {
    image: microwave,
    title: "Grab & Go",
    icon: <FaShoppingBag />, 
  },
  {
    image: meat,
    title: "Food Service",
    icon: <FaConciergeBell />, 
  },
  {
    image: varietysproducts,
    title: "Restaurants",
    icon: <FaUtensils />, 
  },
  {
    image: varietysproducts,
    title: "Convenience Stores",
    icon: <FaStore />, 
  },
  {
    image: varietysproducts,
    title: "Grocery",
    icon: <FaShoppingCart />,
  },
];

const WhatweOffer = () => {
  return (
    <section className="what-we-offer">
      <h5 className="weoffersection-subtitle">Our Top Seller Sustainable Products</h5>
      <h2 className="weoffersection-title">What We Offer</h2>
      <div className="weofferservice-cards">
        {services.map((service, index) => (
          <div className="weofferservice-card" key={index}>
            <img src={service.image} alt={service.title} className="weofferservice-image" />
            <div className="weofferservice-content">
              <div className="weofferservice-icon">{service.icon}</div>
              <h3 className="weofferservice-title">{service.title}</h3>
              <button className="weofferservice-button">
                Buy <HiArrowCircleRight size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatweOffer;
