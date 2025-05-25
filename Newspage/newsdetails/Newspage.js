import React, { useState } from "react";
import "./Newspage.css";
import Newsimage1 from "./newsimage1.jpg";
import { FaUserAlt, FaCommentDots } from "react-icons/fa";

// Data for the news
const newsData = [
  {
    title: "Bringing Foodware Production Back To Earth",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 1,
    imageUrl: Newsimage1,
    link: "/Newsdetail1",
  },
  {
    title: "Bringing Foodware Production Back To Earth",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 1,
    imageUrl: Newsimage1,
    link: "/Newsdetail1",
  },
  {
    title: "Bringing Foodware Production Back To Earth",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 1,
    imageUrl: Newsimage1,
    link: "/Newsdetail1",
  },
  {
    title: "Bringing Foodware Production Back To Earth",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 1,
    imageUrl: Newsimage1,
    link: "/Newsdetail1",
  },
  {
    title: "Bringing Foodware Production Back To Earth",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 1,
    imageUrl: Newsimage1,
    link: "/Newsdetail1",
  },
  {
    title: "Bringing Foodware Production Back To Earth",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 1,
    imageUrl: Newsimage1,
    link: "/Newsdetail1",
  },
  {
    title: "Bringing Foodware Production Back To Earth",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 1,
    imageUrl: Newsimage1,
    link: "/Newsdetail1",
  },
  {
    title: "Bringing Foodware Production Back To Earth",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 1,
    imageUrl: Newsimage1,
    link: "/Newsdetail1",
  },
  {
    title: "The Future of Foodwares, Sustainable Irrigation Solutions",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 0,
    imageUrl: Newsimage1,
    link: "/news/future-foodwares-irrigation-solutions",
  },
  {
    title: "Agronomy and Relation to Other Sciences",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 0,
    imageUrl: Newsimage1,
    link: "/news/agronomy-other-sciences",
  },
  {
    title: "We Grow Products with the Bio-Based Materials",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 0,
    imageUrl: Newsimage1,
    link: "/news/bio-based-materials",
  },
  {
    title: "A Quick Solution to Foodware Production in America",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 0,
    imageUrl: Newsimage1,
    link: "/news/foodware-production-america",
  },
  {
    title: "Winter Wheat Harvest Organic Gather Nice Moment",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 0,
    imageUrl: Newsimage1,
    link: "/news/winter-wheat-harvest",
  },
  // Add more items as needed
];

// Sidebar categories and tags
const categories = [
  "Foodware Products",
  "Industrial Pallets",
  "Fenestration Solutions",
  "Toys Solutions",
  "Harvest",
];

const tags = ["box", "food", "packages", "eco-friendly", "Shelf-life"];

// NewsCard Component for Reusability
const NewsCard = ({ news }) => {
  return (
    <div className="newspagemainnews-card">
      <a href={news.link} className="newspagemainnews-link">
        <img
          src={news.imageUrl}
          alt={news.title}
          className="newspagemainnews-image"
        />
        <div className="newspagemainnews-info">
          <p className="newspagemainnews-date" style={{color:"white"}}>{news.date}</p>
          <p className="newspagemainnews-author">
            <FaUserAlt /> by {news.author} • <FaCommentDots /> {news.comments}{" "}
            Comment
            {news.comments !== 1 ? "s" : ""}
          </p>
          <h3 className="newspagemainnews-title">{news.title}</h3>
        </div>
      </a>
    </div>
  );
};

const Newspage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 12;

  // Calculate the indices for slicing the newsData array
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = newsData.slice(indexOfFirstNews, indexOfLastNews);

  // Calculate total pages
  const totalPages = Math.ceil(newsData.length / newsPerPage);

  // Pagination handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="news-page-container">
      {/* Main Content */}
      <div className="newspagemain-content">
        <div className="newspagemainnews-header">
        </div>

        {/* News Grid */}
        <div className="newspagemainnews-grid">
          {currentNews.map((news, index) => (
            <NewsCard news={news} key={index} />
          ))}
        </div>

        {/* Pagination */}
        <div className="newspagepagination">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="newspagepagination-btn"
          >
           <i class='fas fa-angle-left'></i> Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="newspagepagination-btn"
          >
            Next <i class='fas fa-angle-right'></i>;
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="newspagesidebar">
        {/* Search Bar */}
        <div className="newspagesearch-bar">
          <input
            type="text"
            placeholder="Search here..."
            className="search-input"
          />
          <button className="newspagesearch-button">🔍</button>
        </div>

        {/* Latest Posts */}
        <div className="newspagelatest-posts">
          <h3>Latest Posts</h3>
          {newsData.slice(0, 9).map((news, index) => (
            <div className="newspagelatest-post" key={index}>
              <a href={news.link} className="newspagelatest-post-link">
                <p className="newspagelatest-post-title">{news.title}</p>
                <small className="newspagelatest-post-author">
                  by {news.author}
                </small>
              </a>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="newspagecategories">
          <h3>Categories</h3>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>

 {/* Tags */}
 <div className="newspagetags">
          <h3>Tags</h3>
          <div className="newspagetags-container">
            {tags.map((tag, index) => (
              <span className="newspagetag" key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="newspagemainsocial-icons">
          <h3> Share this: </h3>
          <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default Newspage;
