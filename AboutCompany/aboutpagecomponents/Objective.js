import React from "react";
import "./Objective.css"; // Import the corresponding CSS file

const Objective = () => {
  return (
    <div className="container">
      {/* Mission and Vision Section */}
      <div className="mission-vision-section">
        <div className="mission-box">
          <h3>
            <span className="icon">🚀</span> Our Mission
          </h3>
          <p>At Sustachio, we transform foodware products by upcycling waste into durable, compostable solutions. Using innovative biomaterials like pistachio shells and brewery spent grains, 
            we help businesses reduce plastic waste and transition towards a circular economy without compromising performance or food safety.</p>
        </div>
        <div className="vision-box">
          <h3>
            <span className="icon">👁</span> Our Vision
          </h3>
          <p>
          We envision a future where foodware products are no longer a source of waste but a solution for sustainability, where every discarded item enriches the planet instead of polluting it.
          </p>
        </div>
      </div>

      {/* Core Values Section - Wrapped in a Circular Container */}
      <div className="core-values-container">
        <div className="core-values-section">
          <h2>Our Core Values</h2>

          <div className="quadrilateral-container">
  <div className="quadrilateral blue1">
    <i className="fas fa-seedling"></i> 
    <p>Sustainability First</p> 
  </div>
  <div className="quadrilateral blue2">
    <i className="fas fa-rocket"></i> 
    <p>Innovation & Performance</p> 
  </div>
  <div className="quadrilateral orange3">
    <i className="fas fa-recycle"></i> 
    <p>Circular Economy Integration</p> 
  </div>
  <div className="quadrilateral green4">
    <i className="fas fa-eye"></i> 
    <p>Transparency & Trust</p> 
  </div>
  <div className="quadrilateral green5">
    <i className="fas fa-leaf"></i> 
    <p>Regenerative Impact</p> 
  </div>
  <div className="quadrilateral green6">
    <i className="fas fa-handshake"></i> 
    <p>Collaboration & Growth</p> 
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Objective;
