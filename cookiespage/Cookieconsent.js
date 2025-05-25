import React, { useState, useEffect } from 'react'; 
import './Cookieconsent.css';

const Cookieconsent = () => {
  const [showConsent, setShowConsent] = useState(true);
  const [error, setError] = useState('');
  const [fadeOut, setFadeOut] = useState(false); // Track the fade-out state

  const handleAccept = () => {
    localStorage.setItem('Cookieconsent', 'accepted');
    setFadeOut(true); // Trigger fade-out effect
    setTimeout(() => setShowConsent(false), 300); // Delay hiding consent modal
  };

  const handleSave = () => {
    // Logic to save specific cookie preferences
    setFadeOut(true); // Trigger fade-out effect
    setTimeout(() => setShowConsent(false), 300); // Delay hiding consent modal
  };

  const handleReject = () => {
    // Logic to save specific cookie preferences
    setFadeOut(true); // Trigger fade-out effect
    setTimeout(() => setShowConsent(false), 300); // Delay hiding consent modal
  };

  if (!showConsent) return null;

  return (
    <div className={`cookie-consent-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="cookie-consent-modal">
        <h2>We respect your privacy</h2>
        <p>We use services, including those from third-party providers, that we need for the operation of the website (technically necessary) or that help us to optimise our website (analysis / statistics) and to display personalised advertising (personalisation). In order to be allowed to use the analysis and personalization services, we need your consent.</p>
        <p>By clicking on "Accept all", you voluntarily consent to the convenience and marketing data processing. This also includes your consent in accordance with Art. 49 (1) (a) GDPR to data processing outside the EEA, e.g. in the USA. In these countries, despite careful selection and commitment of service providers, the high European level of data protection cannot necessarily be guaranteed. If data is transferred to the USA, there is e.g. the risk that this data may be processed by U.S. authorities for control and surveillance purposes without effective remedies or enforceable all rights of data subjects. You can revoke your consent at any time.</p>
        <br></br>
        <div className="cookiesettings">
          <label>
            <input type="checkbox" checked disabled /> 
            Technically Necessary (3) 
            <i className="fas fa-question-circle" title="These cookies are required for the website to function properly."></i>
          </label>

          <label>
            <input type="checkbox" /> 
            Analysis / Statistics (1) 
            <i className="fas fa-question-circle" title="These cookies help us understand user behavior through analytics."></i>
          </label>

          <label>
            <input type="checkbox" /> 
            Personalization (1) 
            <i className="fas fa-question-circle" title="These cookies enable personalized content and advertising."></i>
          </label>
        </div>

        {error && <p style={{color:"#f44336"}} className="cookieerror-message">{error}</p>}

        <br></br>
        <div className="cookieactions">
          <button onClick={handleReject}> <i className="fas fa-times-circle"></i> Reject</button>
          <button onClick={handleSave}> <i className="fas fa-shield-alt"></i> Accept only necessaries</button>
          <button onClick={handleAccept}> <i className="fas fa-check-circle"></i> Accept all</button>
        </div>

        <div className="cookiefooter">
          <a href="/imprint">
            <i className="fas fa-file-contract"></i> Imprint
          </a>
          <a href="/privacy-policy">
            <i className="fas fa-user-shield"></i> Privacy Policy
          </a>
          <a href="/settings">
            <i className="fas fa-cog"></i> Cookie Settings
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cookieconsent;
