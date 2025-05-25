import React, { useState } from "react";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";
import "./NewspageHero.css";

import Newsimage1 from "./newsimage1.jpg";
import Newsimage2 from "./newsimage2.jpg";
import Sustainable from "./Sustainable.jpg";

const NewspageHero = () => {
  const slides = [
    {
      id: 1,
      image: Sustainable,
      title: "Sustainability in Modern Times",
      date: "January 9, 2025",
      buttonText: "LEARN MORE",
    },
    {
      id: 2,
      image: Newsimage2,
      title: "Breaking News Update",
      date: "February 15, 2025",
      buttonText: "READ MORE",
    },
    {
      id: 3,
      image: Newsimage1,
      title: "Innovations in Technology",
      date: "March 5, 2025",
      buttonText: "DISCOVER MORE",
    },
    {
      id: 4,
      image: Newsimage1,
      title: "The Future of AI",
      date: "April 20, 2025",
      buttonText: "EXPLORE",
    },
    {
      id: 5,
      image: Newsimage1,
      title: "Climate Change Solutions",
      date: "May 15, 2025",
      buttonText: "FIND OUT",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="newspage-hero">
      <div
        className="newspageslide"
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      >
        <div className="newspagecontent">
          <h2>{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].date}</p>
          <button>{slides[currentIndex].buttonText}<HiArrowCircleRight size={24} /></button>
        </div>
      </div>
      <div className="newspagecontrols">
        <button onClick={prevSlide}><HiArrowCircleLeft size={24} /></button>
        <button onClick={nextSlide}><HiArrowCircleRight size={24} /></button>
      </div>
      <div className="dots">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={index === currentIndex ? "active" : ""}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default NewspageHero;
