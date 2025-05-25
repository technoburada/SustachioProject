import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "./logo.png";
import "./Navbar.css";

// Updated search index with section IDs for scrolling
const searchIndex = [
  { id: "home", title: "Home", content: "services and products", url: "/Home#services" },
  { id: "pricing", title: "Pricing", content: "Check out our affordable pricing plans.", url: "/pricing#plans" },
  { id: "about", title: "About Us", content: "Learn more about our company and mission.", url: "/AboutCompany#mission" },
  { id: "sustainability", title: "Sustainability", content: "Discover our commitment to sustainability.", url: "/sustainability#commitment" },
  { id: "blog", title: "Blog", content: "Read our latest news and updates.", url: "/news#updates" },
  { id: "contact", title: "Contact", content: "Get in touch with us for inquiries.", url: "/contact#inquiries" },
  { id: "careers", title: "Careers", content: "Join our team and grow with us.", url: "/careers#team" },
];

function Navbar() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [language, setLanguage] = useState("English", "German");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Add active class to the current link
  useEffect(() => {
    const links = document.querySelectorAll(".navbarnavbar-links li a");
    links.forEach((link) => {
      if (link.getAttribute("href") === location.pathname) {
        link.parentElement.classList.add("active"); // Add active class to the parent <li>
      } else {
        link.parentElement.classList.remove("active"); // Remove active class from other <li>
      }
    });
  }, [location.pathname]);

  const handleFocus = () => setIsSearchFocused(true);
  const handleBlur = () => setIsSearchFocused(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setLanguageMenuOpen(false);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      const results = searchWebsiteContent(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchResults.length > 0) {
      navigate(searchResults[0].url, { state: { highlight: searchQuery } });
      setSearchQuery("");
      setSearchResults([]);
    }
  };

  const searchWebsiteContent = (query) => {
    // Simple search logic (replace with a more advanced search library or API call)
    return searchIndex.filter((item) => {
      const searchText = `${item.title} ${item.content}`.toLowerCase();
      return searchText.includes(query.toLowerCase());
    });
  };

  return (
    <header className="navbarheader">
      {/* Top Section */}
      <div className="navbartop-section">
        <div className="navbarlogo-container">
          <Link to="/">
            <img src={logo} alt="Sustachio Logo" className="navbarlogo" />
          </Link>
        </div>

        <div className="navbartop-info">
  <div className="navbarcontact-section">
{/* Call Anytime */}
<div className="navbarcontact-box">
      <i className="fab fa-whatsapp"></i>
      <div className="navbarcontact-text">
        <h5>Call anytime</h5>
        <p>+49 XXX XXX XXX XX</p>
      </div>
    </div>

    <div className="vertical-bar1"></div>

    <div className="vertical-bar"></div>

    {/* Send Email */}
    <div className="navbarcontact-box">
      <i className="far fa-envelope-open"></i>
      <div className="navbarcontact-text">
        <h5>Send email</h5>
        <p><a href="mailto:info@sustachio.com">info@sustachio.com</a></p>
      </div>
    </div>

    <div className="vertical-bar2"></div>

    {/* Location */}
    <div className="navbarcontact-box">
      <i className="fas fa-route"></i>
      <div className="navbarcontact-text">
        <h5>89231, HNU Founders Space, John-F.-Kennedy</h5>
        <p>Neu-Ulm, Germany</p>
      </div>
    </div>


    {/* Language Selector */}
    <div className="navbarlanguage-map-circle">
      <div className="navbarlanguage-icon" onClick={() => setLanguageMenuOpen(!languageMenuOpen)}>
        <i className="fa fa-globe"></i>
      </div>
      {languageMenuOpen && (
        <div className="navbarlanguage-options">
          {["English", "German", "Hindi", "Turkish", "Russian", "Espanol", "Francais"].map((lang) => (
            <div key={lang} className="navbarlanguage-option" onClick={() => handleLanguageChange(lang)}>
              {lang}
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
</div>

      </div>

      {/* Navigation Bar */}
      <nav className="navbarnavbar">
        <ul className="navbarnavbar-links">
          <li className="navbardropdown">
            <Link to="#" className="navbardropdown-link">Product Categories <i className="fas fa-chevron-down"></i></Link>
            <ul className="navbardropdown-menu">
              <li><Link to="/Foodbeverage"><i className="fas fa-motorcycle"></i> Delivery & Takeout</Link></li>
              <li><Link to="/products"><i className="fas fa-shopping-bag"></i> Grab & Go</Link></li>
              <li><Link to="/Foodbeverage"><i className="fas fa-concierge-bell"></i> Food Services</Link></li>
              <li><Link to="/products"><i className="fas fa-utensils"></i> Restaurants</Link></li>
              <li><Link to="/products"><i className="fas fa-store"></i> Convenience Stores</Link></li>
              <li><Link to="/products"><i className="fas fa-shopping-cart"></i> Grocery</Link></li>
            </ul>
          </li>
          
          <li><Link to="/pricing">Pricing</Link></li>
          <li className="navbardropdown">
            <Link to="#" className="navbardropdown-link">Company <i className="fas fa-chevron-down"></i></Link>
            <ul className="navbardropdown-menu">
            <li><Link to="/AboutCompany"><i className="fas fa-info-circle"></i> About Us</Link></li>
<li><Link to="/ourteam"><i className="fas fa-users"></i> Our Team</Link></li>
<li><Link to="/ourmaterials"><i className="fas fa-cogs"></i> Our Materials</Link></li>
<li><Link to="/brandsupport"><i className="fas fa-hands-helping"></i> Brand Support</Link></li>
<li><Link to="/brandsupport"><i className="fas fa-file-alt"></i> Our Reports</Link></li>

            </ul>
          </li>
          
          <li className="navbardropdown">
            <Link to="#" className="navbardropdown-link">Sustainability <i className="fas fa-chevron-down"></i></Link>
            <ul className="navbardropdown-menu">
            <li><Link to="/Sustainability"><i className="fas fa-seedling"></i> Sustainability</Link></li>
<li><Link to="/composting"><i className="fas fa-leaf"></i> Composting</Link></li>
            </ul>
          </li>


          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/news">Blog</Link></li>
        </ul>

        {/* Navbar Icons Section */}
        <div className="navbarnavbar-icons">
          <div className="navbarnavbar-icons-left">
            <form className="navbarsearch-container" onSubmit={handleSearchSubmit}>
              <i className={`fas fa-search green-icon navbarsearch-icon ${isSearchFocused ? "hidden" : ""}`}></i>
              <input
                type="text"
                placeholder="Search..."
                className="navbarsearch-input"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleSearchChange}
                value={searchQuery}
              />
              {searchQuery && (
                <div className="navbarsearch-results">
                  {searchResults.length > 0 ? (
                    searchResults.map((result, index) => (
                      <Link key={index} to={result.url} className="navbarsearch-result-item">
                        {result.title}
                      </Link>
                    ))
                  ) : (
                    <div className="navbarsearch-result-item">No results found</div>
                  )}
                </div>
              )}
            </form>
          </div>

          <div className="vertical-bar"></div>

          {/* Shopping Cart */}
          <div className="navbarcart">
            <a href="#"><i className="fas fa-shopping-cart green-icon"></i></a>
          </div>

          <div className="navbarsign-in">
          <Link to="/Signin">
            <button><i className="fas fa-user"></i> Customer Log in</button>
          </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;