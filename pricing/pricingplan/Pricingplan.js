import React, { useState } from 'react';
import { HiXCircle } from "react-icons/hi2"; // Inactive icon
import { IoCheckmarkCircleSharp } from "react-icons/io5"; // Active icon
import "./Pricingplan.css";

const PricingPlan = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };

  // Define pricing based on the billing cycle
  const prices = {
    base: isAnnual ? "$100/year" : "$10/month",
    business: isAnnual ? "$200/year" : "$20/month",
    enterprise: isAnnual ? "$300/year" : "$30/month",
  };

  return (
    <div className="pricing-plan-container">
      <h1 className="pricing-title">Pricing & Plan</h1>

      <div className="pricing-underline">
        <span className="pricingdot"></span>
        <span className="pricingline"></span>
        </div>
        <br></br>

      <p className="pricing-subtitle">
        Donec dignissim, odio ac imperdiet luctus, ante nisl accumsan justo, et venenatis ante metus pellentesque sem.
      </p>
      <button className="compare-button">Compare Features</button>
      <div className="arrow">&#8595;</div>

      <div className="pricing-toggle-section">
        <h2 className="section-title">Choose The Right Plan For Your Business!</h2>
        <p className="section-description">
          We have several powerful plans to showcase your business and get discovered as a creative entrepreneur. Everything you need.
        </p>
        <div className="billing-toggle">
          <span className={!isAnnual ? 'active1' : ''}>Bill Monthly</span>
          <div className="toggle-switch" onClick={toggleBilling}>
            <div className={`switch ${isAnnual ? 'annual' : 'monthly'}`}></div>
          </div>
          <span className={isAnnual ? 'active' : ''}>Bill Annually</span>
        </div>

        <div className="plans-container">
          {/* Base Plan */}
          <div className="plan base">
            <h3>Base</h3>
            <ul>
              <li><IoCheckmarkCircleSharp /> Upload Video with HD Resolution</li>
              <li><IoCheckmarkCircleSharp /> Attachment & Post Scheduling</li>
              <li><IoCheckmarkCircleSharp /> Attachment & Post Scheduling</li>
              <li className="inactive"><HiXCircle /> Set your rates</li>
              <li className="inactive"><HiXCircle /> Exclusive Deals</li>
              <li className="inactive"><HiXCircle /> Advanced Statistics</li>
            </ul>
            <p className="price">{prices.base}</p>
            <button className="choose-button">Try 1 month</button>
          </div>

          {/* Business Plan */}
          <div className="plan business">
            <div className="best-choice-badge">Best Choice</div>
            <h3>Business</h3>
            <span className="save-badge">Save $40</span>
            <ul>
              <li><IoCheckmarkCircleSharp /> Upload Video with HD Resolution</li>
              <li><IoCheckmarkCircleSharp /> Attachment & Post Scheduling</li>
              <li><IoCheckmarkCircleSharp /> Set your rates</li>
              <li><IoCheckmarkCircleSharp /> Exclusive Deals</li>
              <li><IoCheckmarkCircleSharp /> Advanced Statistics</li>
            </ul>
            <p className="price">{prices.business}</p>
            <button className="try-button">Choose</button>
          </div>

          {/* Enterprise Plan */}
          <div className="plan enterprise">
            <h3>Enterprise</h3>
            <ul>
              <li><IoCheckmarkCircleSharp /> Upload Video with 4K Resolution</li>
              <li><IoCheckmarkCircleSharp /> Attachment & Post Scheduling</li>
              <li><IoCheckmarkCircleSharp /> Set your rates</li>
              <li><IoCheckmarkCircleSharp /> Exclusive Deals</li>
              <li><IoCheckmarkCircleSharp /> Advanced Statistics</li>
            </ul>
            <p className="price">{prices.enterprise}</p>
            <button className="choose-button">Choose</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
