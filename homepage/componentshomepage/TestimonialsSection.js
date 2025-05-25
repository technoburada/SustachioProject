import React, { useState, useEffect } from "react";
import "./TestimonialsSection.css";

// Import images manually
import whatsay1 from "./whatsay1.png";
import whatsay2 from "./whatsay2.png";
import whatsay3 from "./whatsay3.png";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // State for fade effect

  const testimonials = [
    {
      id: 1,
      name: "John D.",
      role: "Operations Manager",
      text: "As an operations manager at a meat processing facility in Baden-Württemberg, finding sustainable packaging that complies with Germany’s strict food safety regulations while maintaining product freshness was a major challenge. Sustachio’s innovative materials exceeded our expectations—they are sturdy, food-safe, and fully recyclable. Thanks to this solution, we have met our sustainability goals while ensuring full regulatory compliance.",
      rating: 4,
    },
    {
      id: 2,
      name: "John D.",
      role: "Supply Chain Director, Food Manufacturer, Nuremberg",
      text: "As a national food manufacturer based in Bavaria, we needed an eco-friendly packaging solution that could support our high-volume production. Sustachio not only provided us with a fully recyclable alternative but also one that seamlessly integrates into our existing processes. Their close collaboration helped us develop tailored solutions for the German market. We are proud to reduce our CO₂ footprint and shape the future of sustainable food packaging.",
      rating: 5,
    },
    {
      id: 3,
      name: "John D.",
      role: "Owner, Green Table Café, Munich",
      text: "Our restaurant in the heart of Munich focuses on regionality and sustainability and packaging is an essential part of that. With Sustachio, we finally found durable, compostable packaging that meets our high-quality standards. Our customers appreciate that we are becoming more eco-friendly, and the pricing is competitive. A true win for our business and the environment!",
      rating: 3,
    },
    {
      id: 4,
      name: "John D.",
      role: "CEO, EcoPack Solutions",
      text: "Sustachio’s sustainable packaging solutions have completely transformed our product offerings. Not only are the materials eco-friendly, but the quality is on par with traditional options. This partnership has been key in positioning us as an industry leader in sustainability.",
      image: whatsay1,
      rating: 5,
    },
    {
      id: 5,
      name: "John D.",
      role: "Founder, GreenCycle Inc.",
      text: "Our company needed a packaging solution that was both environmentally friendly and durable. Sustachio has provided us with a solution that fits both criteria while being cost-effective. We’re happy to be part of the eco-friendly movement!",
      rating: 4,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setFade(true);
      }, 500); // Short delay to create smooth transition effect
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 300);
  };

  const goToNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setFade(true);
    }, 300);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>Join millions of eco-conscious consumers who choose sustainable foodware for a greener future with us.</h2>
        <h6>
          We partnered with businesses across Bavaria and Baden-Württemberg to
          provide innovative, sustainable packaging solutions that meet strict
          German and EU environmental standards.
        </h6>
      </div>

      <div className={`testimonials-container ${fade ? "fade-in" : "fade-out"}`}>
        {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-name">
              <strong>{testimonial.name}</strong>
            </p>
            <p className="testimonial-role">{testimonial.role}</p>

            <div className="testimonial-rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <i
                  key={index}
                  className={`fas fa-star ${index < testimonial.rating ? "filled" : ""}`}
                ></i>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="navigation-button left-button" onClick={goToPrevious}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="navigation-button right-button" onClick={goToNext}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </section>
  );
};

export default TestimonialsSection;
