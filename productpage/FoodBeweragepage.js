import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HiArrowCircleRight } from "react-icons/hi";

import "./FoodBeweragepage.css";
import foodwareImage from "./cartoon.jpg";
import palletsImage from "./cartoon.jpg";
import toysImage from "./cartoon.jpg";
import organicImage from "./cartoon.jpg";
import freshImage from "./cartoon.jpg";
import fenestrationImage from "./cartoon.jpg";

// Data for product cards
const products = [
  { id: 1, title: "Tableware Plates", image: foodwareImage, link: "/Productlist" },
  { id: 2, title: "Industrial Pallets", image: palletsImage, link: "/" },
  { id: 3, title: "Toys Solutions", image: toysImage, link: "/" },
  { id: 4, title: "Organic Solutions", image: organicImage, link: "/" },
  { id: 5, title: "Fresh Products", image: freshImage, link: "/" },
  { id: 7, title: "Double wall cups", image: fenestrationImage, link: "/" },
  { id: 8, title: "Single wall cups", image: fenestrationImage, link: "/" },
  { id: 9, title: "Microflute boxes & trays", image: fenestrationImage, link: "/" },
  { id: 10, title: "Kraft food containers", image: fenestrationImage, link: "/" },
  { id: 11, title: "Sandwich platter", image: fenestrationImage, link: "/" },
  { id: 12, title: "Sandwich and wrap boxes", image: fenestrationImage, link: "/" },
  { id: 13, title: "Salad boxes", image: fenestrationImage, link: "/" },
  { id: 14, title: "Hot bags and wraps", image: fenestrationImage, link: "/" },
  { id: 15, title: "Food cartons", image: fenestrationImage, link: "/" },
  { id: 15, title: "Bags to go", image: fenestrationImage, link: "/" },
  { id: 15, title: "Fast food and pizza", image: fenestrationImage, link: "/" },
  { id: 15, title: "Food cartons", image: fenestrationImage, link: "/" },
  { id: 15, title: "Food cartons", image: fenestrationImage, link: "/" },
];

const ProductPage = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  // Separate product cards into two groups
  const firstRow = products.slice(0, 4); 
  const secondRow = products.slice(5, 10); 
  const thirdRow = products.slice(11, 15); 

  return (
    <div className="product-page">

      {/* Banner Section */}
      <div className="banner reveal">
        <div className="banner-overlay"></div>
        <h1>Food & Beverage Products</h1>
      </div>
      <br /><br /><br /><br /><br />

      {/* Product Cards Section */}
      <div className="product-cards-wrapper">
        {/* First Row */}
        <div className="product-row reveal">
          {firstRow.map((product) => (
            <Link to={product.link} key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <div className="card-overlay">
                <h3>{product.title}<HiArrowCircleRight size={24}/></h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Second Row */}
        <div className="product-row reveal">
          {secondRow.map((product) => (
            <Link to={product.link} key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <div className="card-overlay">
                <h3>{product.title}<HiArrowCircleRight size={24}/></h3>
              </div>
            </Link>
          ))}
        </div>

                {/* Third Row */}
                <div className="product-row reveal">
          {thirdRow.map((product) => (
            <Link to={product.link} key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <div className="card-overlay">
                <h3>{product.title}<HiArrowCircleRight size={24}/></h3>
              </div>
            </Link>
          ))}
        </div>

        <br /><br /><br />
      </div>
    </div>
  );
};

export default ProductPage;
