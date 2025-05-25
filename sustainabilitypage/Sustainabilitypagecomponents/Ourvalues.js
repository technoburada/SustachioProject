import React from "react";
import "./Ourvalues.css";

const OurValues = () => {
  const values = [
    {
      icon: "🌟",
      title: "Customer Care",
      description:
        "We're here to help you with solar panel installation in Devon and Cornwall. If we were to sum ourselves up in a few words, those would be 'reliable, honest and friendly.' We're with you from the start of the project to the finish.",
    },
    {
      icon: "💰",
      title: "Price",
      description:
        "As I'm sure you'll have seen, solar systems don't tend to come cheap. Our aim is to make solar power accessible to everyone, so we price ourselves in a way that makes solar energy more affordable. We're focused on helping you and helping the environment, rather than on turning a profit.",
    },
    {
      icon: "🌍",
      title: "Sustainability",
      description:
        "As we've said, we do this because we truly care about the planet and about seeing people embrace a greener, more eco-friendly approach to power. The world of green energy can be jargon-filled and opaque, so we want to help educate people on the big and little things they can do to protect our planet!",
    },
    {
      icon: "🌟",
      title: "Customer Care",
      description:
        "We're here to help you with solar panel installation in Devon and Cornwall. If we were to sum ourselves up in a few words, those would be 'reliable, honest and friendly.' We're with you from the start of the project to the finish.",
    },
    {
      icon: "💰",
      title: "Price",
      description:
        "As I'm sure you'll have seen, solar systems don't tend to come cheap. Our aim is to make solar power accessible to everyone, so we price ourselves in a way that makes solar energy more affordable. We're focused on helping you and helping the environment, rather than on turning a profit.",
    },
    {
      icon: "🌍",
      title: "Sustainability",
      description:
        "As we've said, we do this because we truly care about the planet and about seeing people embrace a greener, more eco-friendly approach to power. The world of green energy can be jargon-filled and opaque, so we want to help educate people on the big and little things they can do to protect our planet!",
    },
  ];

  return (
    <section className="our-values">
      <h2>Our Values</h2>
      <p>More than 3000 users have been helped by World Online Course.</p>
      <div className="values-container">
        {values.map((value, index) => (
          <div key={index} className="value-card">
            <div className="icon">{value.icon}</div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
