import React from "react";
import "./Ourproductdetail.css"; // Import the CSS file
import Foodbox2 from "./foodbox2.png";

const Ourproductdetail = () => {
  return (
    <div className="companyproductdetail">
      {/* Main food image in the center */}
      <div className="companyproductdetailfood-image-container">
        <h1>Our Product</h1>
        <img
          src={Foodbox2}
          alt="Foodbowl Image"
          className="companyproductdetailfood-image"
        />
      </div>

      {/* Product detail boxes */}
      <div className="companyproductdetaildetail-box long-shelf-life">
        <div className="companyproductdetailicon">
          <i className="fas fa-circle"></i> {/* Icon for long shelf life */}
        </div>
        <div className="companyproductdetailcontent">
          <h3>Long Shelf-Life</h3>
          <p>
          Plastic-Free & Waste-Reducing – By upcycling food industry waste, 
          we help businesses lower their carbon footprint and move towards a true circular economy.
          </p>
        </div>
      </div>

      <div className="companyproductdetaildetail-box compostable">
        <div className="companyproductdetailicon">
          <i className="fas fa-clock"></i> {/* Icon for compostable */}
        </div>
        <div className="companyproductdetailcontent">
          <h3>Compostable</h3>
          <p>
          100% Compostable & Eco-Friendly – Made from agricultural byproducts, our Foodware products break down naturally, 
          reducing environmental impact.
          </p>
        </div>
      </div>

      <div className="companyproductdetaildetail-box durable">
        <div className="companyproductdetailicon">
          <i className="fas fa-dumbbell"></i> {/* Icon for durability */}
        </div>
        <div className="companyproductdetailcontent">
          <h3>Durable & Microwaveable</h3>
          <p>
          Superior Durability & Food Safety – Unlike conventional compostable Foodware Products, our unique material blend ensures a longer shelf life, 
          moisture resistance, and strength, 
          making it ideal for hot and cold food applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ourproductdetail;
