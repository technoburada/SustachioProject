import React, { useEffect } from "react";
import Careerus from "./careerpagecomponents/Careerus";
import CareerBenefit from "./careerpagecomponents/CareerBenefit";
import Careersearchbox from "./careerpagecomponents/Careersearchbox";
import CareerSearchResult from "./careerpagecomponents/CareerSearchResult";
import "./Careerpage.css";

const Careerpage = () => {
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
    <div className="Careerpage">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* Hero Section */}
      <div className="reveal">
        <Careerus />
      </div>

      {/* Benefit Section */}
      <div className="reveal">
        <CareerBenefit />
      </div>

      <br></br>
      <br></br>

      {/* Career Search Box Section */}
      <div className="reveal">
        <Careersearchbox />
      </div>

      <br></br>
      <br></br>

      {/* Career Search Result Section */}
      <div className="reveal">
        <CareerSearchResult />
      </div>

      <br></br>
      <br></br>
    </div>
  );
};

export default Careerpage;
