import React, { useEffect, useState } from "react";
import "./Applyjob1.css";

import { FaMapMarkerAlt, FaClock, FaCalendarAlt, FaBriefcase, FaUser, FaBook, FaShareAlt } from "react-icons/fa";
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi';
import { Link } from "react-router-dom";

const Careerpage1 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const jobDetailsPosition = document.getElementById("job-details").getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (jobDetailsPosition < windowHeight) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="career-page">
      {/* Banner Section */}
      <div className="banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1>PRODUCT DESIGNER</h1>
          <p>Job Type: Full Time | No. of Vacancies: 02</p>
          <Link to ="/jobapplicationform"><button className="jobapply-button" style={{width:"150px"}}>Apply Now <HiArrowCircleRight size={24}/></button></Link>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      {/* Main Content Section */}
      <div className="main-content">
        {/* Left Section */}
        <div
          id="job-details"
          className={`job-details reveal ${isVisible ? "active" : ""}`}
        >
          <h2>PRODUCT DESIGNER</h2>

          <section>
            <h3>Who Are We Looking For</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Nullam dictum ligula a gravida porta.</li>
              <li>Nam pellentesque orci ut odio blandit.</li>
              <li>Vivamus semper magna suscipit leo malesuada.</li>
              <li>Integer et felis a purus convallis condimentum nec vel eros.</li>
            </ul>
          </section>

          <section>
            <h3>What You Will Be Doing</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Nullam dictum ligula a gravida porta.</li>
              <li>Nam pellentesque orci ut odio blandit.</li>
              <li>Vivamus semper magna suscipit leo malesuada.</li>
            </ul>
          </section>

          <section>
            <h3>Bonus Points for Familiarity with</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Nullam dictum ligula a gravida porta.</li>
              <li>Nam pellentesque orci ut odio blandit.</li>
            </ul>
          </section>

          <section>
            <h3>Educational Requirement</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
          </section>

          <section>
            <h3>Salary</h3>
            <ul>
              <li>Salary: 18,000 to 36,000 BDT (Depends on Skill and Experience)</li>
              <li>Salary Review: Yearly</li>
            </ul>
          </section>

          <section>
            <h3>Working Hours</h3>
            <p>8 AM - 5 PM</p>
          </section>

          <section>
            <h3>Working Days</h3>
            <p>Weekly: 6 days, Weekend: Friday, Saturday</p>
          </section>

          <section>
            <h3>Perks & Benefits You’ll Get</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Nullam dictum ligula a gravida porta.</li>
              <li>Nam pellentesque orci ut odio blandit.</li>
            </ul>
          </section>

          <section>
            <h3>The Application Process</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Nullam dictum ligula a gravida porta.</li>
              <li>Nam pellentesque orci ut odio blandit.</li>
            </ul>
          </section>

          <section>
            <h3>Our Statement</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
            <br></br>
            <Link to ="/jobapplicationform"><button className="jobapply-button"style={{width:"150px"}}>Apply Now <HiArrowCircleRight size={24}/></button></Link>
          </section>
          
          <br></br>
          <br></br>
          <br></br>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {/* Right Section */}
        <div className="job-summary">
          <div className="job-summary-card">
            <Link to="/jobapplicationform"><button className="apply-button2"> Apply Now <HiArrowCircleRight size={24}/></button></Link>
            <br></br>
            <br></br>
            <br></br>
            <ul className="job-summary-list">
              <li>
                <FaMapMarkerAlt className="icon" />
                <div>
                  <strong>Location:</strong>
                  <p>South Breeze Center, Banani 11</p>
                </div>
              </li>
              <li>
                <FaBriefcase className="icon" />
                <div>
                  <strong>Job Type:</strong>
                  <p>Full Time</p>
                </div>
              </li>
              <li>
                <FaCalendarAlt className="icon" />
                <div>
                  <strong>Date Posted:</strong>
                  <p>Posted 1 month ago</p>
                </div>
              </li>
              <li>
                <FaBook className="icon" />
                <div>
                  <strong>Experience:</strong>
                  <p>1-3 years</p>
                </div>
              </li>
              <li>
                <FaClock className="icon" />
                <div>
                  <strong>Working Hours:</strong>
                  <p>9 AM - 6 PM</p>
                </div>
              </li>
              <li>
                <FaUser className="icon" />
                <div>
                  <strong>Vacancy:</strong>
                  <p>No. of Vacancies: 3</p>
                </div>
              </li>
            </ul>
            <Link to="/careers">
              <button className="view-all-button"><HiArrowCircleLeft size={24}/>View all Job Offers</button>
            </Link>
          </div>

          {/* Share Section */}
          <div className="share-section1">
            <p>Share this: <FaShareAlt className="icon-share" /></p>
            <br></br>
            <br></br>
            <div className="social-media1">
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careerpage1;
