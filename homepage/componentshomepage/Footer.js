import React, { useState } from "react";
import {Link} from "react-router-dom";

import "./Footer.css";
import footerlogo from "./logo.png";

function Footer() {
  const [showCookiePopup, setShowCookiePopup] = useState(false);
  const [language, setLanguage] = useState("English - En");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      {/* Main Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          {/* Logo and About Section */}
          <div className="footer-section footerabout">
            <Link to ="/Home"><img src={footerlogo} alt="Sustachio Logo" className="footer-logo" /></Link>
            <p className="footer-description">
              Sustachio creates eco-friendly foodware from upcycled materials, replacing plastics with sustainable alternatives. 🌱♻️
            </p>

            {/* Language Selector */}
            <div className="footerlanguage-selector">
              <div className="dropdown-wrapper">
                <select
                  className="footerlanguage-dropdown"
                  value={language}
                  onChange={handleLanguageChange}
                >
                  <option value="English - En">English - En</option>
                  <option value="Deutsch - De">Deutsch - De</option>
                  <option value="Español - Es">Español - Es</option>
                  <option value="Français - Fr">Français - Fr</option>
                  <option value="中文 - Zh">中文 - Zh</option>
                  <option value="العربية - Ar">العربية - Ar</option>
                  <option value="Русский - Ru">Русский - Ru</option>
                  <option value="हिंदी - Hi">हिंदी - Hi</option>
                </select>
                <i className="fas fa-angle-down dropdown-icon" />
              </div>
            </div>
          </div>

          {/* Explore Section */}
          <div className="footer-section footerexplore">
            <h3>Get to know us</h3>
            <ul>
              <li>
                <a href="/AboutCompany">
                  <i className="fas fa-info-circle"></i> About us
                </a>
              </li>
              <li>
                <a href="/Products">
                  <i className="fas fa-box"></i> Our Products
                </a>
              </li>
              <li>
                <a href="/Sustainability">
                  <i className="fas fa-leaf"></i> Sustainability
                </a>
              </li>
              <li>
                <a href="/FQA">
                  <i className="fas fa-certificate"></i> Our Certifications
                </a>
              </li>
              <li>
                <a href="/News">
                  <i className="fas fa-medal"></i> Our Awards
                </a>
              </li>
              <li>
                <a href="/News">
                  <i className="fa fa-sticky-note"></i> Our Environmental Policy
                </a>
              </li>
              <li>
                <a href="/News">
                  <i className="fa fa-wpforms"></i> Our Quality Policy
                </a>
              </li>
              <li>
                <a href="/Careers">
                  <i className="fas fa-briefcase"></i> Careers
                </a>
              </li>
              <li>
                <a href="/News">
                  <i className="fas fa-newspaper"></i> Our Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support Section */}
          <div className="footer-section customersupport">
            <h3>Customer Support</h3>
            <ul>
              <li>
                <a href="/Contact">
                  <i className="fas fa-envelope"></i> Contact
                </a>
              </li>
              <li>
                <a href="/FQA">
                  <i className="fas fa-truck"></i> Delivery & Returns
                </a>
              </li>
              <li>
                <a href="/FQA">
                  <i className="fa fa-location-arrow"></i> Track Your Order
                </a>
              </li>
              <li>
                <a href="/FQA">
                  <i className="fas fa-credit-card"></i> Payment Methods
                </a>
              </li>
              <li>
                <a href="/FQA">
                  <i className="fas fa-leaf"></i> Compost your prodcut
                </a>
              </li>
              <li>
                <a href="/FQA">
                  <i className="fas fa-comment"></i> Contact
                </a>
              </li>
              <li>
                <a href="/FQA">
                  <i className="fas fa-comments"></i> Chat Online
                </a>
              </li>
              <li>
                <a href="/FQA">
                  <i className="fas fa-question-circle"></i> FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* News Section */}
          <div className="footer-section footernews">
            <h3>News</h3>
            <div className="footernews-item">
              <a href="/News">Bringing Foodware Production Back To Cities</a>
              <p>July 5, 2025</p>
            </div>
            <div className="footernews-item">
              <a href="/News">The Future of Smart Packaging Solutions</a>
              <p>July 5, 2025</p>
            </div>
            <div className="footernews-item">
              <a href="/News">Bringing Foodware Production Back To Cities</a>
              <p>July 5, 2025</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="footer-section footer-contact">
            <h3>Contact</h3>
            <a href="#phonenumber"> <i className="fas fa-phone"></i> +49 XXXX XXXX </a>
            <br />
            <br />
            
            <a href="#email"><i className="fas fa-envelope"></i> info@sustachio.com</a>
            <br />
            <br />
            
            <a href="/contact"> <i className="fas fa-map-marker-alt"></i>
              {" "}
              89231, HNU Founders Space, John-F.-Kennedy | Neu-Ulm, Germany
            </a>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Your Email Address"
                className="footeremail-input"
              />
              <button type="send" className="sendsubmit-btn">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </footer>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        {/* Footer Bottom Content */}
        <div className="footer-bottom-content">
          {/* Copyright Section */}
          <div className="footer-section copyright">
            <p>© All Copyright 2025 by Sustachio GmbH</p>
          </div>

          {/* Links Section */}
          <div className="footer-bottomsection links">
            <div className="footerbottom-links">
              <a href="#terms">Terms & Conditions</a>
              <span>|</span>
              <a href="#privacy">Data Privacy Policy</a>
              <span>|</span>
              <a href="/Cookieconsent">Cookie Policy</a>
              <span>|</span>
              <a href="/Cookieconsent">Imprint</a>
              <span>|</span>
              <a href="/Cookieconsent">Terms of Delivery</a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="footerbottom-section social-media">
            <div className="footerbottom-social-media">
              <a href="#">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;