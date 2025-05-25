import React, { useEffect } from "react";
import SustainabilityHero from "./Sustainabilitypagecomponents/SustainabilityHero";
import SustainabilityVideoBanner from "./Sustainabilitypagecomponents/SustainabilityVideoBanner";
import SustainabilityWhatWeDo from "./Sustainabilitypagecomponents/SustainabilityWhatWeDo";
import Ourvalues from "./Sustainabilitypagecomponents/Ourvalues";
import "./Sustainabilitymain.css";

const Sustainabilitymain = () => {
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
    <div className="Sustainabilitymain">
      <br /><br />

      {/* SustainabilityHero Section */}
      <div className="reveal">
        <SustainabilityHero />
      </div>
      <br /><br /><br />

      {/* Ourvalues Section */}
      <div className="reveal">
        <Ourvalues />
      </div>
      <br /><br />

      {/* SustainabilityVideoBanner Section */}
      <div className="reveal">
        <SustainabilityVideoBanner />
      </div>
      <br /><br />
      <br /><br />

      {/* SustainabilityWhatWeDo Section */}
      <div className="reveal">
        <SustainabilityWhatWeDo />
      </div>
    </div>
  );
};

export default Sustainabilitymain;
