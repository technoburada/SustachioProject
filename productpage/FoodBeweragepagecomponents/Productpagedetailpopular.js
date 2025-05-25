import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";

import "./Productpagedetailpopular.css";
import cartoon1 from "./cartoon1.jpg";

const ProductPageDetailPopular = () => {
  const products = [
    {
      id: 1,
      image: cartoon1,
      category: "Snacks",
      rating: 4.5,
      title: "Best snacks with hazel nut mix pack 200gm",
      buttonText1: "Learn More",
      buttonText2: "Add to chart",
    },
    {
      id: 2,
      image: cartoon1,
      category: "Snacks",
      rating: 5.0,
      title: "Sweet snacks crunchy nut mix 250gm pack",
      buttonText1: "Learn More",
      buttonText2: "Add to chart",
    },
    {
      id: 3,
      image: cartoon1,
      category: "Snacks",
      rating: 4.5,
      title: "Best snacks with hazel nut mix pack 200gm",
      buttonText1: "Learn More",
      buttonText2: "Add to chart",
    },
    {
      id: 4,
      image: cartoon1,
      category: "Snacks",
      rating: 5.0,
      title: "Sweet snacks crunchy nut mix 250gm pack",
      buttonText1: "Learn More",
      buttonText2: "Add to chart",
    },
  ];

  return (
    <div className="popular-products-container">
      <h2 className="popularsection-title">Popular Products</h2>
      <p className="popularsection-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et vivamus accumsan lacus vel facilisis.
      </p>
      <div className="popularproducts-grid">
        {products.map((product) => (
          <div className="popularproduct-card"  key={product.id}><i className="fas fa-shopping-bag"></i>
            <img
              src={product.image}
              alt={product.title}
              className="popularproduct-image"
            />
            <div className="popularproduct-category">{product.category}</div>
            <div className="popularproduct-rating">
              {" "}
              {Array(Math.floor(product.rating))
                .fill("⭐")
                .join("")}{" "}
              ({product.rating})
            </div>
            <h3 className="popularproduct-title">{product.title}</h3>
            <button className="add-to-cart-button1">{product.buttonText1}<HiArrowCircleRight size={24}/></button>
            <button className="add-to-cart-button2">{product.buttonText2}<i className="fas fa-shopping-bag"> </i></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPageDetailPopular;
