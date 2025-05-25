import React from "react";
import { FaUser, FaLock, FaMoneyCheckAlt, FaFileInvoice, FaBell, FaShieldAlt, FaGlobe, FaSuitcase, FaGift, FaTools, FaHistory, FaRegCreditCard} from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Customerprofile.css";

function CustomerProfile() {
  return (
    <div className="customercustomer-profile">
      <header className="customerprofile-header">
        <h1>My Account</h1>
        <p>
          Mr Ömer, <span className="customeremail">hello@ömerkucuk.io</span>{" "}
          <a href="#" className="customerprofile-link">
            Go to profile
          </a>
        </p>
      </header>

      <div className="customerprofile-sections">
      <Link to ="/Personalinfo" style={{textDecoration: 'none'}}> <div className="customersection-card">
          <FaUser className="customercard-icon" />
          <h2>Personal info</h2>
          <p>Provide personal details and how we can reach you</p>
        </div></Link>

        <Link to ="/Home" style={{textDecoration: 'none'}}> <div className="customersection-card">
          <FaLock className="customercard-icon" />
          <h2>Login & security</h2>
          <p>Update your password and secure your account</p>
        </div></Link>

        <Link to ="/Home" style={{textDecoration: 'none'}}><div className="customersection-card">
          <FaHistory className="customercard-icon" />
          <h2>Your orders</h2>
          <p>Get professional tools if you manage several properties on Airbnb</p>
        </div></Link>

        <Link to ="/Home" style={{textDecoration: 'none'}}><div className="customersection-card">
          <FaRegCreditCard className="customercard-icon" />
          <h2>Subscription & Membership</h2>
          <p>Get professional tools if you manage several properties on Airbnb</p>
        </div></Link>
        
        <Link to="/Home" style={{ textDecoration: 'none' }}>
        <div className="customersection-card">
          <div className="customercard-icon-wrapper">
            <FaMoneyCheckAlt className="customercard-icon" /> & 
            <FaGift className="customercard-icon1" />
            </div>
            <h2>Payments & payouts</h2><p>Review payments, payouts, coupons, and gift cards</p>
            </div>
            </Link>

        <Link to ="/Home" style={{textDecoration: 'none'}}><div className="customersection-card">
          <FaBell className="customercard-icon" />
          <h2>Notifications</h2>
          <p>Choose notification preferences and how you want to be contacted</p>
        </div></Link>

        <Link to ="/Home" style={{textDecoration: 'none'}}><div className="customersection-card">
          <FaShieldAlt className="customercard-icon" />
          <h2>Privacy & sharing</h2>
          <p>Manage your personal data, connected services, and data sharing settings</p>
        </div></Link>

        <Link to ="/Home" style={{textDecoration: 'none'}}><div className="customersection-card">
          <FaGlobe className="customercard-icon" />
          <h2>Global preferences</h2>
          <p>Set your default language, currency, and timezone</p>
        </div></Link>

        <Link to ="/Home" style={{textDecoration: 'none'}}><div className="customersection-card">
          <FaSuitcase className="customercard-icon" />
          <h2>Delivery Services</h2>
          <p>Add a work email for business trip benefits</p>
        </div></Link>


      </div>

      <footer className="customerprofile-footer">
        <p>Need to deactivate your account?</p>
        <br></br>
        <a href="#" className="customerdeactivate-link">
          Take care of that now
        </a>
      </footer>
    </div>
  );
}

export default CustomerProfile;
