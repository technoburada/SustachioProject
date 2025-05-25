import React from "react";
import "./CompanyHistory.css";

const CompanyHistory = () => {
  return (
    <div className="timeline-container">
      {/* Heading */}
      <div className="timeline-header">
        <h1>Sustachio Story: From Waste to Worth <i className="fas fa-leaf"></i></h1>
        <p>
        In 2024, a shared vision brought together a group of innovators passionate about turning food waste into sustainable solutions by using pistachio shells and brewery residue (beer waste). 
        We brought unique insights into waste valorization and circular economy practices, laying the foundation for Sustachio.
        </p>
      </div>

      {/* Timeline */}
      <div className="timeline">
        {/* Timeline Item */}
        <div className="timeline-item">
          <div className="circle"></div>
          <h3>2024</h3>
          <p>The Idea is Born</p>
        </div>

        <div className="timeline-item">
          <div className="circle"></div>
          <h3>Mid-2024</h3>
          <p>Finding the Perfect Materials</p>
        </div>

        <div className="timeline-item">
          <div className="circle"></div>
          <h3>Late 2024</h3>
          <p>Expanding the Team & Business Strategy</p>
        </div>

        <div className="timeline-item">
          <div className="circle"></div>
          <h3>2025</h3>
          <p>Scaling Up & First Facility</p>
        </div>
      </div>

    </div>
  );
};

export default CompanyHistory;
