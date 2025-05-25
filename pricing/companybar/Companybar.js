import React from 'react';
import './Companybar.css';
import coinbaseLogo from './coinbase.png';
import dropboxLogo from './dropbox.png';
import googleLogo from './google.png';
import slackLogo from './slack.png';
import squareLogo from './square.png';
import zoomLogo from './zoom.png';

const companies = [
  { name: 'coinbase', logo: coinbaseLogo },
  { name: 'Dropbox', logo: dropboxLogo },
  { name: 'Google', logo: googleLogo },
  { name: 'Slack', logo: slackLogo },
  { name: 'Square', logo: squareLogo },
  { name: 'Zoom', logo: zoomLogo },
];

const CompanyBar = () => {
  return (
    <div>
      {/* Compare before Company Logos Section */}
      <div className="compare-bar">
        <button className="compare-button">Trusted by millions of eco-conscious consumers and businesses worldwide.</button>
        <div className="arrow">↓</div>
      </div>

      {/* Company Logos Section */}
      <div className="company-bar">
        {companies.map((company, index) => (
          <img
            key={index}
            src={company.logo}
            alt={company.name}
            className="company-logo"
          />
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>

      {/* Compare before Company Logos Section */}
      <div className="compare-bar">
        <button className="compare-button">Compare Your Desired Feature More in Detail</button>
        <div className="arrow">↓</div>
      </div>
    </div>
  );
};

export default CompanyBar;
