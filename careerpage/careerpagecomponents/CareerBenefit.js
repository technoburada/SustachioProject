import React from "react";
import { FiUsers, FiShield, FiBook, FiBarChart, FiClock, FiSmile } from "react-icons/fi";
import "./CareerBenefit.css";

const BenefitsSection = () => {
  return (
    <div className="careerbenefits-section">
      {/* Header */}
      <div className="careerbenefits-header">
        <h5>BENEFITS</h5>
        <h2>Why You Should Join Our Awesome Team</h2>
        <p>
          We want you to feel at home when working at JMC (Japan Marketing & Consultancy Limited), and for that, we have curated a great set of benefits for you. It all starts with the free lunch!
        </p>
      </div>

      {/* Benefit Cards */}
      <div className="careerbenefits-grid">
        <div className="careerbenefit-card">
          <div className="careericon">
            <FiUsers size={30} color="#333" />
          </div>
          <h4>Team Work</h4>
          <p>Collaborate with like-minded individuals and build strong relationships that will drive success.</p>
        </div>
        
        <div className="careerbenefit-card">
          <div className="careericon">
            <FiShield size={30} color="#333" />
          </div>
          <h4>Secured Future</h4>
          <p>Enjoy a stable career path with opportunities for growth and a secure future in the company.</p>
        </div>
        
        <div className="careerbenefit-card">
          <div className="careericon">
            <FiBook size={30} color="#333" />
          </div>
          <h4>Learning Opportunity</h4>
          <p>Access continuous learning programs to enhance your skills and knowledge in your field.</p>
        </div>
        
        <div className="careerbenefit-card">
          <div className="careericon">
            <FiBarChart size={30} color="#333" />
          </div>
          <h4>Upgrade Skills</h4>
          <p>Take part in workshops and training that allow you to continually improve and upgrade your skillset.</p>
        </div>

        <div className="careerbenefit-card">
          <div className="careericon">
            <FiClock size={30} color="#333" />
          </div>
          <h4>Flexible Hours</h4>
          <p>Work-life balance is important, so we offer flexible working hours to suit your lifestyle.</p>
        </div>

        <div className="careerbenefit-card">
          <div className="careericon">
            <FiSmile size={30} color="#333" />
          </div>
          <h4>Employee Wellbeing</h4>
          <p>We care about your well-being, offering programs that focus on mental health, fitness, and work-life balance.</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
