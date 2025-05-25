import React, { useEffect } from "react";
import AboutusProduct from "./aboutpagecomponents/AboutusProduct";
import Objective from "./aboutpagecomponents/Objective";
import Ourproductdetail from "./aboutpagecomponents/Ourproductdetail";
import CompanyHistory from "./aboutpagecomponents/CompanyHistory";
import OurTeam from "./aboutpagecomponents/OurTeam";
import StatsSection from "./aboutpagecomponents/StatsSection";
import Ourservices from "./aboutpagecomponents/Ourservices";
import Aboutherosection from "./aboutpagecomponents/Aboutherosection";
import "./AboutCompany.css";

const AboutCompany = () => {
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
    <div className="AboutCompany">
      <br /><br /><br /><br /><br /><br /><br /><br />

      {/* Aboutherosection Section */}
      <div className="reveal">
        <Aboutherosection />
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      {/* About Us Section */}
      <div className="reveal">
        <AboutusProduct />
      </div>
      <br /><br /><br />
      
      {/* Company History Section */}
      <div className="reveal">
        <CompanyHistory />
      </div>
      <br /><br /><br /><br /><br /><br />

      {/* Objective Section */}
      <div className="reveal">
        <Objective />
      </div>
      <br /><br /><br /><br />

      {/* Our Services Section */}
      <div className="reveal">
        <Ourservices />
      </div>
      <br /><br /><br></br><br></br>

      {/* Product Detail Section */}
      <div className="reveal">
        <Ourproductdetail />
      </div>
      <br></br>

      {/* Stats Section */}
      <div className="reveal">
        <StatsSection />
      </div>
      <br /><br />

      {/* Team Members Section */}
      <div className="reveal">
        <OurTeam />
      </div>
      <br /><br />
    </div>
  );
};

export default AboutCompany;
