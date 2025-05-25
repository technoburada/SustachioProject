import React from "react";
import "./StatsSection.css";

const StatsSection = () => {
  return (
    <div className="aboutcompanystats-section">
      <div className="aboutcompanystat-item">
        <i className="fas fa-box icon"></i> {/* Package Icon */}
        <h2>15+</h2>
        <p>Pilot Partnerships</p>
      </div>
      <div className="aboutcompanystat-item">
        <i className="fas fa-seedling icon"></i> {/* Sustainability Icon */}
        <h2>1,000+</h2>
        <p>Units Sold in Prototype Testing Phases</p>
      </div>
      <div className="aboutcompanystat-item">
        <i className="fas fa-recycle icon"></i> {/* Circular Economy Icon */}
        <h2>100%</h2>
        <p>Circular Production Process</p>
      </div>
      <div className="aboutcompanystat-item">
        <i className="fas fa-industry icon"></i> {/* Factory Icon */}
        <h2>1</h2>
        <p>Facility Planned for Launch in 2025</p>
      </div>
    </div>
  );
};

export default StatsSection;
