import React, { useState } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi"; 
import { FaLeaf } from "react-icons/fa"; 

import CareerSearchResult from "./CareerSearchResult"; 
import "./Careersearchbox.css"; 

const Careersearchbox = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  const handleSearch = () => {
    setSearchClicked(true);
  };

  return (
    <div className="job-search-section">
      {/* Header Section */}
      <div className="jobheader-content">
        <h1>
          Find Your <span className="jobhighlight">Dream & Green job</span>{" "}
          <FaLeaf className="jobleaf-icon" />
        </h1>
        <p>
          Find your next career at companies like HubSpot, Nike, and Dropbox.
        </p>
      </div>

      {/* Search Bar Section */}
      <div className="jobsearch-bar">
        <div className="jobinput-group">
          <FiSearch className="jobicon" />
          <input
            type="text"
            placeholder="Job title or keyword"
            className="jobsearch-input"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className="jobinput-group">
          <FiMapPin className="jobicon" />
          <input
            type="text"
            placeholder="Florence, Italy"
            className="jobsearch-input"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button className="jobsearch-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Render CareerSearchResult only after search is clicked */}
      {searchClicked && (
        <CareerSearchResult jobTitle={jobTitle} location={location} />
      )}
    </div>
  );
};

export default Careersearchbox;
