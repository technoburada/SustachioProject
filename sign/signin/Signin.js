import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faSmile, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import "./Signin.css";
import Signimage from "../signin.png";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+,/´#])[A-Za-z\d@$!%*?&+,/#]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email || !password) {
      setError("Error: Please fill out your Email Address and Password!");
      setLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      setError(
        <div className="error-message">
          <strong>Error: Password must meet the following requirements:</strong>
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

    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      navigate("/Myprofile");
    }, 1000);
  };

  return (
    <div className="signin-container">
      {/* Left Section - Image */}
      <div className="signin-left">
        <h1>
          Welcome back! <FontAwesomeIcon icon={faSmile} />
        </h1>
        <img src={Signimage} alt="Sustachio Logo" className="signinSignimage" />
        <br />
        <div className="signinsocial-icons">
          <i className="fa-brands fa-x-twitter" aria-label="Twitter"></i>
          <i className="fab fa-facebook" aria-label="Facebook"></i>
          <i className="fab fa-linkedin" aria-label="LinkedIn"></i>
          <i className="fab fa-instagram" aria-label="Instagram"></i>
          <i className="fab fa-youtube" aria-label="YouTube"></i>
        </div>
      </div>

      {/* Right Section - Sign-in Form */}
      <div className="signin-right">
        <h2>Sign-in</h2>
        <form onSubmit={handleSubmit} className="signin-form">
          {/* Email Input */}
          <div className="signin-form-group">
            <label htmlFor="signin-email">
              Email Address<span className="signinrequired"> </span>
            </label>
            <div className="signin-input-wrapper">
              <input
                type="email"
                id="signin-email"
                placeholder="Enter Your Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="signin-form-group">
            <label htmlFor="password">
              Password <span className="signinrequired"> </span>
            </label>
            <div className="signin-input-wrapper">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter Your Password *"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => {
                  if (!validatePassword(password)) {
                    setError(
                      <div className="signerror-message">
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
                  } else {
                    setError("");
                  }
                }}
                required
              />
            </div>
          </div>

          {/* Display Error */}
          {error && <div className="error-message">{error}</div>}

          {/* Remember Me */}
          <div className="signin-remember-me">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me (Optional)</label>
          </div>

          {/* Login Button */}
          <button type="submit" className="signin-login-button" disabled={loading}>
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              <>
                Sign-in <FontAwesomeIcon icon={faSignInAlt} />
              </>
            )}
          </button>
        </form>

        {/* Forgot Password and Sign-Up Links */}
        <div className="signin-links">
          <Link to="/ForgotPassword">Forgot Password?</Link>
          <span> - - - - - - - - - - - Or - - - - - - - - - - - </span>
          <Link to="/Signup">Don't have an account? Sign-up</Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;