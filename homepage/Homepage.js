import React, { useEffect } from "react";
import HeroSection from "./componentshomepage/HeroSection";
import AboutusSection from "./componentshomepage/AboutusSection";
import BenefitSection from "./componentshomepage/BenefitSection";
import WhatweOffer from "./componentshomepage/WhatweOffer";
import VideoBanner from "./componentshomepage/VideoBanner";
import TestimonialsSection from "./componentshomepage/TestimonialsSection";
import Succesnumbers from "./componentshomepage/Succesnumbers";
import "./Homepage.css";

const Homepage = () => {
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
    revealOnScroll(); // Run once on page load

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  return (
    <div className="Homepage">
      
      {/* Hero Section */}
      <div className="reveal">
        <HeroSection />
      </div>
      <br /><br /><br /><br /><br /><br />

      {/* About Us Section */}
      <div className="reveal">
        <AboutusSection />
      </div>
      <br /><br /><br /><br /><br /><br />

      {/* Video Banner */}
      <div className="reveal">
        <VideoBanner />
      </div>
      <br /><br /><br /><br /><br /><br />

      {/* What We Offer Section */}
      <div className="reveal">
        <WhatweOffer />
      </div>
      <br /><br /><br /><br /><br /><br />

      {/*   Our Succes Numbers Section */}
      <div className="reveal">
        <Succesnumbers />
      </div>
      <br /><br /><br /><br /><br /><br />

      {/* Benefits Section */}
      <div className="reveal">
        <BenefitSection />
      </div>
      <br /><br /><br /><br /><br /><br />

      {/* Testimonials Section */}
      <div className="reveal">
        <TestimonialsSection />
      </div>
    </div>
  );
};

export default Homepage;
