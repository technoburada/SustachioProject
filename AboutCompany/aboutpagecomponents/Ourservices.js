import React from "react";
import "./Ourservices.css";

const services = [
  {
    icon: "🌍",
    title: "Sustainability First",
    description: "Specializes in electro-mechanical contracting for environmental pollution control, offering expertise in process design, supply, testing, commissioning, and operation/maintenance of treatment plants.",
  },
  {
    icon: "🔬 & 📈",
    title: "Innovation & Performance",
    description: "Experienced fabricators, welders, and designers create a variety of metal support structures and hangers.",
  },
  {
    icon: "♻️",
    title: "Circular Economy Integration",
    description: "Comprehensive repair and maintenance services for office automation equipment including printers, monitors, and photocopying machines.",
  },
  {
    icon: "🛡️ & ✅",
    title: "Transparency & Trust",
    description: "Committed to supplying essential items to support communities, ensuring high-quality deliveries for well-being and resilience.",
  },
  {
    icon: "🌱",
    title: "Regenerative Impact ",
    description: "Committed to supplying essential items to support communities, ensuring high-quality deliveries for well-being and resilience.",
  },
  {
    icon: "🤝 & 🚀",
    title: "Collaboration & Growth ",
    description: "Committed to supplying essential items to support communities, ensuring high-quality deliveries for well-being and resilience.",
  },
];

const OurServices = () => {
  return (
    <div className="our-services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
