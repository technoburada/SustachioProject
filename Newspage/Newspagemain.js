import React, { useEffect } from "react";
import Newspage from "./newsdetails/Newspage";
import NewspageHero from "./newsdetails/NewspageHero";
import "./Newspagemain.css"; 

const Newspagemain = () => {
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

  return (
    <div className="Newspagemain">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* NewspageHero Section */}
      <div className="reveal">
        <NewspageHero />
      </div>
      
      {/* Newspage Section */}
      <div className="reveal">
        <Newspage />
      </div>
    </div>
  );
};

export default Newspagemain;
