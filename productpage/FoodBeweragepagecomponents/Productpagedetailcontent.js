import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Productpagedetailcontent.css";

import cartoon from "./cartoon1.jpg";
import cartoon1 from "./cartoon1.jpg";
import cartoon2 from "./cartoon2.jpg";
import cartoon3 from "./cartoon3.jpg";
import cartoon4 from "./cartoon4.jpg";

function Productpagedetailcontent() {
  // States for product detail content
  const [mainImage, setMainImage] = useState(cartoon);
  const [zoomed, setZoomed] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const [activeTab, setActiveTab] = useState("Description");

  // States for sidebar functionality
  const [setPrice] = useState(20);
  const [ setDesiredPrice] = useState("");
  const [ setDesiredWeight] = useState("");

  // Handlers for product detail content
  const handleThumbnailClick = (image) => {
    setMainImage(image);
    setZoomed(false);
  };

  const handleZoom = () => {
    setZoomed(!zoomed);
  };

  const handleQuantityClick = (quantity) => {
    setSelectedQuantity(quantity);
  };

  const handleManualQuantityChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value > 0) {
      setSelectedQuantity(Number(value));
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Description":
        return (
          <div className="description">
            <h4>Packaging & Delivery</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in
              vero perferendis dolor!
            </p>
          </div>
        );
      case "Information":
        return (
          <div className="information">
            <h4>Product Information</h4>
            <p>
              Details about the product, specifications, usage, and more
              detailed information about the product's features and benefits.
            </p>
          </div>
        );
      case "Review":
        return (
          <div className="review">
            <h4>Customer Reviews</h4>
            <p>
              User feedback and ratings on the product's quality, performance,
              and overall satisfaction.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  // Handlers for sidebar functionality
  const handlePriceChange = (e) => {
    setPrice(Number(e.target.value));
    setDesiredPrice("");
  };

  const handleManualPriceChange = (e) => {
    const value = e.target.value;
    setDesiredPrice(value);
    if (value >= 10 && value <= 10000) {
      setPrice(Number(value));
    }
  };

  const handleManualWeightChange = (e) => {
    const value = e.target.value;
    setDesiredWeight(value);
  };

  const handleWeightChange = (e) => {
    const weight = e.target.id;
    if (weight === "2kg") setDesiredWeight(2);
    else if (weight === "20kg") setDesiredWeight(20);
    else if (weight === "30kg") setDesiredWeight(30);
  };

  return (
    <div className="product-detail-content">
      {/* Main Content */}
      <div className="main-content">
        <h1>Tableware Plate Details</h1>
      </div>

      {/* Product Header */}
      <div className="product-header">
        <div className="product-image-gallery">
          <img
            className={`main-image ${zoomed ? "zoomed" : ""}`}
            src={mainImage}
            alt="Main Product"
            onClick={handleZoom}
          />
          <div className="thumbnail-gallery">
            <img
              src={cartoon1}
              alt="Thumbnail 1"
              onClick={() => handleThumbnailClick(cartoon1)}
            />
            <img
              src={cartoon2}
              alt="Thumbnail 2"
              onClick={() => handleThumbnailClick(cartoon2)}
            />
            <img
              src={cartoon3}
              alt="Thumbnail 3"
              onClick={() => handleThumbnailClick(cartoon3)}
            />
            <img
              src={cartoon4}
              alt="Thumbnail 4"
              onClick={() => handleThumbnailClick(cartoon4)}
            />
            <img
              src={cartoon4}
              alt="Thumbnail 4"
              onClick={() => handleThumbnailClick(cartoon4)}
            />
            <img
              src={cartoon4}
              alt="Thumbnail 4"
              onClick={() => handleThumbnailClick(cartoon4)}
            />
          </div>
        </div>

        <div className="product-info">
          <h1>Seeds Of Change Organic Quinoa, Brown</h1>
          <p className="product-description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. In, iure
            minus error doloribus saepe natus?
          </p>
          <div className="rating">
            <span>⭐⭐⭐⭐⭐</span>
            <p>(0 Review)</p>
          </div>
          <ul className="product-details">
          <li><strong>Brand:</strong> ESTA BETTERU CO</li>
          <li><strong>Flavour:</strong> Super Saver Pack</li>
          <li><strong>Diet Type:</strong> Vegetarian</li>
          <li><strong>Weight:</strong> 200 Grams</li>
          <li><strong>Speciality:</strong> Gluten Free, Sugar Free</li>
          <li><strong>Info:</strong> Egg Free, Allergen-Free</li>
          <li><strong>Available Items:</strong> 100</li>
          </ul>
          
          <div className="quantity">
            <h3>Quantity</h3>
            <div className="weight-options">
              <button onClick={() => handleQuantityClick(50)}>50kg</button>
              <button onClick={() => handleQuantityClick(80)}>80kg</button>
              <button onClick={() => handleQuantityClick(120)}>120kg</button>
              <button onClick={() => handleQuantityClick(200)}>200kg</button>
            </div>
            {selectedQuantity && (
              <div className="selected-quantity">
                <p>Selected: {selectedQuantity}kg</p>
              </div>
            )}
            <div className="cart-actions">
              <input
                type="number"
                value={selectedQuantity || ""}
                min="1"
                placeholder="Enter e.g., 10"
                onChange={handleManualQuantityChange}
              />
              <Link to="">
              <button className="add-to-cart">Choose</button></Link>
              <button className="wishlist">&#10084;</button>
              <button className="compare">&#128270;</button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="product-tabs">
        <ul className="tabs">
          <li
            className={activeTab === "Description" ? "active" : ""}
            onClick={() => setActiveTab("Description")}
          >
            Description
          </li>
          <li
            className={activeTab === "Information" ? "active" : ""}
            onClick={() => setActiveTab("Information")}
          >
            Information
          </li>
          <li
            className={activeTab === "Review" ? "active" : ""}
            onClick={() => setActiveTab("Review")}
          >
            Review
          </li>
        </ul>
        <div className="tab-content">{renderTabContent()}</div>
      </div>
    </div>
  );
}

export default Productpagedetailcontent;
