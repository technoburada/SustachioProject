import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import './Signup.css';
import Signimage from '../signin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaSignInAlt } from "react-icons/fa";
import { faUser, faEnvelope, faLandmark, faBuilding, faMapMarkerAlt, faCity, faGlobe, faLock, faEye, faEyeSlash, faHashtag } from '@fortawesome/free-solid-svg-icons';

const countryOptions = [
  { value: 'us', label: '🇺🇸 United States' },
  { value: 'gb', label: '🇬🇧 United Kingdom' },
  { value: 'ca', label: '🇨🇦 Canada' },
  { value: 'au', label: '🇦🇺 Australia' },
  { value: 'fr', label: '🇫🇷 France' },
  { value: 'de', label: '🇩🇪 Germany' },
  { value: 'in', label: '🇮🇳 India' },
  { value: 'jp', label: '🇯🇵 Japan' },
  { value: 'cn', label: '🇨🇳 China' },
];

const Signup = () => {
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  // State to track input values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postCode, setPostCode] = useState('');
  const [region, setRegion] = useState('');

  const handleCountryChange = (selectedOption) => {
    setCountry(selectedOption);
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      if (!passwordRegex.test(password)) {
        setPasswordError(
          <div style={{
            color: '#e74c3c',
            fontSize: '14px',
            textAlign: 'left',
            padding: '4px',
            border: '1px solid #e74c3c',
            borderRadius: '5px',
            backgroundColor: 'rgba(231, 76, 60, 0.1)'
          }}>
            <strong>Info: Password must meet the following requirements:</strong>
            <ul>
              <li>Be at least 8 characters long</li>
              <li>Include at least one uppercase letter (A-Z)</li>
              <li>Include at least one lowercase letter (a-z)</li>
              <li>Include at least one number (0-9)</li>
              <li>Include at least one special character (e.g., *, @, !, etc.)</li>
            </ul>
          </div>
        );
      }
       else if (password !== confirmPassword) {
      setPasswordError(<p>Passwords do not match, please try again!</p>);
    } else {
      setPasswordError('');
    }
  };

  useEffect(() => {
    validatePassword();
  }, [password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordError) {
      alert('Please fix the errors before submitting the form.');
      return;
    }

    console.log('Form Submitted');
  };

  const openTermsModal = () => {
    setShowTermsModal(true);
  };

  const closeTermsModal = () => {
    setShowTermsModal(false);
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1>Welcome back!</h1>
        <h2>Join us today <span role="img" aria-label="wave">👋</span></h2>
        <img src={Signimage} alt="Sustachio Logo" className="signup-image" />
        <div className="signupsocial-icons">
          <i className="fa-brands fa-x-twitter" aria-label="Twitter"></i>
          <i className="fab fa-facebook" aria-label="Facebook"></i>
          <i className="fab fa-linkedin" aria-label="LinkedIn"></i>
          <i className="fab fa-instagram" aria-label="Instagram"></i>
          <i className="fab fa-youtube" aria-label="YouTube"></i>
        </div>
      </div>

      <div className="signup-right">
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-form-row">
            <div className="signup-form-group">
              <label htmlFor="firstName">
                First Name <span className="signup-required"> </span>
                <div className="signup-input-icon">
                  {!firstName && <FontAwesomeIcon icon={faUser} className="signup-icon" />}
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Enter Your First Name*"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
              </label>
            </div>
            <div className="signup-form-group">
              <label htmlFor="lastName">
                Last Name<span className="signup-required"></span>
                <div className="signup-input-icon" style={{ width: "330px" }}>
                  {!lastName && <FontAwesomeIcon icon={faUser} className="signup-icon" />}
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Enter Your Last Name*"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </label>
            </div>
          </div>

          <div className="signup-form-row">
            <div className="signup-form-group">
              <label htmlFor="email">
                Email<span className="signup-required"></span>
                <div className="signup-input-icon">
                  {!email && <FontAwesomeIcon icon={faEnvelope} className="signup-icon" />}
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter Your Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </label>
            </div>
            <div className="signup-form-group">
              <label htmlFor="phone">
                Phone Number<span className="signup-required"></span>
                <div className="phone-input-container">
                  <PhoneInput
                    country={'us'}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    placeholder="Enter Your Phone Number*"
                    inputProps={{
                      required: true,
                      id: 'phone',
                    }}
                  />
                </div>
              </label>
            </div>
          </div>

          <div className="signup-form-row">
            <div className="signup-form-group">
              <label htmlFor="organization">
                Organization Name<span className="signup-required"></span>
                <div className="signup-input-icon">
                  {!organization && <FontAwesomeIcon icon={faBuilding} className="signup-icon" />}
                  <input
                    id="organization"
                    type="text"
                    placeholder="Your business or organization name*"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    required
                  />
                </div>
              </label>
            </div>
          </div>

          <div className="signup-form-row">
            <div className="signup-form-group">
              <label htmlFor="address">
                Street <span className="signup-required"></span>
                <div className="signup-input-icon">
                  {!address && <FontAwesomeIcon icon={faMapMarkerAlt} className="signup-icon" />}
                  <input
                    id="address"
                    type="text"
                    placeholder="Street*"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
              </label>
            </div>
            <div className="signup-form-group">
              <label htmlFor="city">
                City <span className="signup-required"></span>
                <div className="signup-input-icon" style={{ width: "330px" }}>
                  {!city && <FontAwesomeIcon icon={faCity} className="signup-icon" />}
                  <input
                    id="city"
                    type="text"
                    placeholder="City*"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
              </label>
            </div>
          </div>

          <div className="signup-form-row">
            <div className="signup-form-group">
              <label htmlFor="postCode">
                Post Code <span className="signup-required"></span>
                <div className="signup-input-icon">
                  {!postCode && <FontAwesomeIcon icon={faHashtag} className="signup-icon" />}
                  <input
                    id="postCode"
                    type="text"
                    placeholder="Post Code*"
                    value={postCode}
                    onChange={(e) => setPostCode(e.target.value)}
                    required
                  />
                </div>
              </label>
            </div>
            <div className="signup-form-group">
              <label htmlFor="country">
                Country <span className="signup-required"></span>
                <div className="signup-input-icon">
                  <FontAwesomeIcon icon={faGlobe} className="signup-icon" />
                  <Select
                    options={countryOptions}
                    placeholder="Select Country*"
                    value={country}
                    onChange={handleCountryChange}
                    isSearchable
                    inputId="country"
                  />
                </div>
              </label>
            </div>
          </div>

          <div className="signup-form-row">
            <div className="signup-form-group">
              <label htmlFor="region">
                Region/State <span className="signup-required"></span>
                <div className="signup-input-icon">
                  {!region && <FontAwesomeIcon icon={faLandmark} className="signup-icon" />}
                  <input
                    id="region"
                    type="text"
                    placeholder="Region/State*"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    required
                  />
                </div>
              </label>
            </div>
          </div>

          <div className="signup-form-row">
            <div className="signup-form-group">
              <label htmlFor="password">
                Password <span className="signup-required"></span>
                <div className="signup-input-icon password-field">
                  <FontAwesomeIcon icon={faLock} className="signup-icon" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password*"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={validatePassword}
                    required
                  />
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={() => togglePasswordVisibility('password')}
                    style={{ cursor: 'pointer' }}
                    aria-label="Toggle password visibility"
                  />
                </div>
                {passwordError && <div className="error-message">{passwordError}</div>}
              </label>
            </div>
            <div className="signup-form-group">
              <label htmlFor="confirmPassword">
                Repeat Password <span className="signup-required"></span>
                <div className="signup-input-icon password-field">
                  <FontAwesomeIcon icon={faLock} className="signup-icon" />
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Repeat Password*"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <FontAwesomeIcon
                    icon={showConfirmPassword ? faEyeSlash : faEye}
                    onClick={() => togglePasswordVisibility('confirmPassword')}
                    style={{ cursor: 'pointer' }}
                    aria-label="Toggle confirm password visibility"
                  />
                </div>
                {password !== confirmPassword && confirmPassword && (
                  <p className="signuperror-message2">Error: Passwords do not match, please try again!</p>
                )}
              </label>
            </div>
          </div>

          <div className="signup-checkbox-group">
            <label>
              <input type="checkbox" /> Remember me (Optional)
            </label>
            <label>
              <input type="checkbox" required /> I agree to all the{' '}
              <a href="/TermsPolicy" onClick={openTermsModal}>
                Terms and Privacy Policy*
              </a>
            </label>
          </div>

          <button type="submit" className="btn-submit">
            Create Account <FaSignInAlt />
          </button>
          <p className="login-link">
            Have an account? <a href="/Signin">Sign-in</a>
          </p>
        </form>
      </div>

      {showTermsModal && (
        <div className="terms-modal">
          <div className="modal-content">
            <h3>Terms and Privacy Policy</h3>
            <p>
              By using this service, you agree to our terms and privacy policies.
              Ensure you read and understand the conditions before proceeding.
            </p>
            <button onClick={closeTermsModal} className="btn-close">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
