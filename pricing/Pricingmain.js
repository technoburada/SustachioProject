import React, { useEffect } from "react";
import Pricingplan from './pricingplan/Pricingplan';
import Companybar from './companybar/Companybar';
import Pricingdetail from './pricingdetail/Pricingdetail';
import Askedquestionspricing from './askedquestionspricing';

const Pricingmain = () => {
  
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
    <div className="Pricingmain">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      {/* Pricing Plan */}
      <div className="reveal">
        <Pricingplan />
      </div>

      {/* Company Bar */}
      <div className="reveal">
        <Companybar />
      </div>

      {/* Pricing Detail */}
      <div className="reveal">
        <Pricingdetail />
        
        {/* Asked Questions Pricing */}
      <div className="reveal">
        <Askedquestionspricing />
      </div>
    </div>
    </div>
  );
};

export default Pricingmain;
