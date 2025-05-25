import React, { useState } from 'react';
import { IoCheckmarkCircleSharp } from "react-icons/io5"; // Active icon
import { HiXCircle } from "react-icons/hi2"; // Inactive icon
import './Pricingdetail.css';

const Pricingdetail = () => {

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
    <div className="pricing-container">
<div className="pricingdetailsection-title">
<h2>Choose The Right Plan For Your Business!</h2>
        <p className="pricingdetailsection-description">
          We have several powerful plans to showcase your business and get discovered as a creative entrepreneur. Everything you need.
        </p>
      {/* Billing Toggle Section */}
      <div className="pricingbilling-toggle">
        <span className={!isAnnual ? 'pricingactive1' : ''}>Bill Monthly</span>
        <div className="pricingtoggle-switch" onClick={toggleBilling}>
          <div className={`pricingswitch ${isAnnual ? 'pricingannual' : 'pricingmonthly'}`}></div>
        </div>
        <span className={isAnnual ? 'pricingactive' : ''}>Bill Annually</span>
      </div>
        </div>
      {/* Pricing Cards Section */}
      <div className="pricing-card base">
        <h2>Base</h2>
        <p>The basics for individuals & organizations</p>
        <div className="price">
          <span>{prices.base}</span>
        </div>
        <p>forever</p>
        <button className="join-button">Join for free</button>
        
        <div className="divider"></div>

        <ul>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> Unlimited public/private repositories</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> Automatic security and version updates</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> 2,000 CI/CD minutes/month </li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> 500MB of Packages storage </li>
          <li className="pricingdetailinactive-icon" style={{ color: '#ee8282', textDecoration: 'none', marginRight: '100px', fontSize: '16px'}}><HiXCircle />  Set your rates</li>
          <li className="pricingdetailinactive" style={{color:'#ee8282', textDecoration: 'none',marginRight:'20px', fontSize:'16px'}}><HiXCircle />  Set your rates</li>
          <li className="pricingdetailinactive" style={{color:'#ee8282', textDecoration: 'none',marginRight:'20px', fontSize:'16px'}}><HiXCircle />  Set your rates</li>
        </ul>
      </div>

      <div className="pricing-card detailbusiness">
        <h2>Business</h2>
        <p>Advanced collaboration for individuals and organizations</p>
        <div className="price">
          <span>{prices.business}</span>
          <span className="discounted-price"> save $3.67</span>
          <p>per user/month</p>
        </div>
        <p>for the first 12 months*</p>
        <button className="join-button">Continue with Team</button>
        <div className="divider"></div>
        <ul>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> Everything included in Free, plus...</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> Access to GitHub Codespaces</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> Protected branches</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> Multiple reviewers in pull requests</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> Draft pull requests</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> Code owners</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> Required reviewers</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> Pages and Wikis</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> Environment deployment branches and secrets</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> 3,000 CI/CD minutes/month </li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> GB of Packages storage </li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> Web-based support</li>
        </ul>
        <p className="note">* Discounted pricing is for new yearly customers paying with credit cards or PayPal. After the first year, the price is subject to change. GitHub will send a notification email at least 30 days in advance of any price change.</p>
      </div>

      <div className="pricing-card enterprise">
        <h2>Enterprise</h2>
        <p>Security, compliance, and flexible deployment</p>
        <div className="price">
          <span>{prices.enterprise}</span>
          <span className="discounted-price"> save $19.25</span>
          <p>per user/month</p>
        </div>
        <p>for the first 12 months*</p>
        <button className="join-button">Contact Sales</button>
        <div className="divider"></div>
        <ul>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> Everything included in Team, plus...</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> Enterprise Managed Users</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> User provisioning through SCIM</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> Enterprise Account to centrally manage multiple organizations</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> Environment protection rules</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> Audit Log API</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> SOC1, SOC2, type 2 reports annually</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> FedRAMP Tailored Authority to Operate (ATO)</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> SAML single sign-on</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> Advanced auditing</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> GitHub Connect</li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> 50,000 CI/CD minutes/month </li>
          <li><IoCheckmarkCircleSharp className="pricingdetailactive-icon" /> 50GB of Packages storage </li>
        </ul>
        <p className="note">* Discounted pricing is for new yearly customers paying with credit cards or PayPal. 
          After the first year, the price is subject to change. 
          GitHub will send a notification email at least 30 days in advance of any price change.</p>
      </div>
      
    </div>
    
  );
};

export default Pricingdetail;