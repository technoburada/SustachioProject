import React, { useState } from "react";  
import { Link, useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faSpinner, faUnlock, faEnvelope, faKey, faArrowLeft, faEye, faEyeSlash, faPaperPlane } from "@fortawesome/free-solid-svg-icons"; 
import "./ForgotPassword.css"; 
import Signimage from "./signinforgotpass.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState(""); 
  const [resetStep, setResetStep] = useState(false); 
  const [newPassword, setNewPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+,/´#])[A-Za-z\d@$!%*?&+,/#]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoading(true); 
    setError("");

    if (!email) { 
      setError("Error: Please enter your email address!"); 
      setLoading(false); 
      return; 
    }

    // Simulate API call for sending reset link
    setTimeout(() => {
      setResetStep(true);
      setLoading(false);
    }, 1000);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault(); 
    setLoading(true); 
    setError("");

    if (!validatePassword(newPassword)) { 
      setError(
        <div>
        <strong>Error: Your Password does not meet the following requirements:</strong>
        <ul>
          <li>Be at least 8 characters long</li>
          <li>Include at least one uppercase letter (A-Z)</li>
          <li>Include at least one lowercase letter (a-z)</li>
          <li>Include at least one number (0-9)</li>
          <li>Include at least one special character (e.g., *, @, !, etc.)</li>
        </ul>
      </div>
      );
      setLoading(false); 
      return; 
    }

    if (newPassword !== confirmPassword) { 
      setError("Error: Passwords do not match!"); 
      setLoading(false); 
      return; 
    }

    // Simulate API call for resetting the password
    setTimeout(() => {
      setLoading(false);
      navigate("/Signin");
    }, 1000);
  };

  return (
    <div className="password-recover-container">
      <div className="recoverpassword-left-section">
        <h1>Forgot Your Password? <FontAwesomeIcon icon={faUnlock} /></h1>
        <img src={Signimage} alt="Forgot Password" className="recoverpassword-image" />
        <div className="recoverpasswordsigninsocial-icons">
          <i className="fa-brands fa-x-twitter" aria-label="Twitter"></i>
          <i className="fab fa-facebook" aria-label="Facebook"></i>
          <i className="fab fa-linkedin" aria-label="LinkedIn"></i>
          <i className="fab fa-instagram" aria-label="Instagram"></i>
          <i className="fab fa-youtube" aria-label="YouTube"></i>
        </div>
      </div>

      {!resetStep ? (
        <div className="recoverpassword-right-section">
          <h2>Recover Your Account</h2>
          <form onSubmit={handleSubmit} className="recoverpassword-form">
            <div className="recoverpasswordform-group">
              <label htmlFor="email">Email Address</label>
              <div className="recoverpasswordinput-wrapper">
                <FontAwesomeIcon icon={faEnvelope} className="recoverpasswordinput-icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {error && <p className="recoverpassworderror-text">{error}</p>}

            <button type="submit" className="recoverpasswordsubmit-btn" disabled={loading}>
              {loading ? (
                <FontAwesomeIcon icon={faSpinner} spin />
              ) : (
                <>
                  Send Reset Link <FontAwesomeIcon icon={faPaperPlane} className="recoverpasswordbutton-icon" />
                </>
              )}
            </button>
          </form>
          <div className="back-link">
            <Link to="/Signin">
              <FontAwesomeIcon icon={faArrowLeft} /> Back to Sign-in
            </Link>
          </div>
        </div>
      ) : (
        <div className="password-reset-section">
          <h2>Reset Your Password</h2>
          <form onSubmit={handleResetPassword} className="password-reset-form">
            <div className="password-resetform-group">
              <label htmlFor="new-password">New Password</label>
              <div className="password-resetinput-wrapper">
                <FontAwesomeIcon icon={faKey} className="password-resetinput-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="new-password"
                  placeholder="Enter New Password *"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="password-resetpassword-info">
              <strong>Info: Password must meet the following requirements:</strong>
                        <ul>
                          <li>Be at least 8 characters long</li>
                          <li>Include at least one uppercase letter (A-Z)</li>
                          <li>Include at least one lowercase letter (a-z)</li>
                          <li>Include at least one number (0-9)</li>
                          <li>Include at least one special character (e.g., *, @, !, etc.)</li>
                        </ul>
              </div>
            </div>

            <div className="password-resetform-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <div className="password-resetinput-wrapper">
                <FontAwesomeIcon icon={faKey} className="password-resetinput-icon" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  placeholder="Confirm New Password *"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {error && <p className="password-reseterror-text">{error}</p>}

            <button type="submit" className="password-resetsubmit-btn" disabled={loading}>
              {loading ? (
                <FontAwesomeIcon icon={faSpinner} spin />
              ) : (
                <>
                  Reset Password <FontAwesomeIcon icon={faKey} className="password-resetbutton-icon" />
                </>
              )}
            </button>
          </form>
          <div className="back-link">
            <Link to="/Signin">
              <FontAwesomeIcon icon={faArrowLeft} /> Back to Sign-in
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
