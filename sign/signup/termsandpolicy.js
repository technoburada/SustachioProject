import React from 'react';
import './termsandpolicy.css';

const TermsPrivacy = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Privacy Policy</h1>
      <section>
        <h2>Terms of Service</h2>
        <p>
          By using this service, you agree to comply with our terms and
          conditions. Please read them carefully before using our platform.
        </p>
        <ul>
          <li>Usage of the platform must align with our guidelines.</li>
          <li>Any violation of terms may result in account suspension.</li>
          <li>We reserve the right to modify these terms at any time.</li>
        </ul>
      </section>

      <section>
        <h2>Privacy Policy</h2>
        <p>
          We value your privacy and ensure your personal data is protected.
          Below are key details regarding our privacy practices:
        </p>
        <ul>
          <li>We collect essential user data for account creation and security.</li>
          <li>Your data will not be shared with third parties without consent.</li>
          <li>Cookies are used to enhance user experience.</li>
        </ul>
      </section>

      <footer>
        <p>
          If you have any questions, contact us at{' '}
          <a href="mailto:support@example.com">support@example.com</a>.
        </p>
      </footer>
    </div>
  );
};

export default TermsPrivacy;