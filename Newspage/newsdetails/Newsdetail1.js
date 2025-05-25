import React from "react";
import "./Newsdetail1.css";
import blogimage from "./newsimage1.jpg"

import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn } from "react-icons/fa";

const Newdetail = () => {
  return (
    <div className="newdetail-container">
      <div className="blog-post">
        <img
          src={blogimage}
          alt="Agriculture"
          className="post-image"
        />
        <div className="post-content">
          <span className="post-date">05 July 2022</span>
          <h2 className="post-title">
            The Future of Foodwares, Sustainable Irrigation Solutions
          </h2>
          <p className="post-text">
            Lorem ipsum dolor sit amet, chicle mund et duo, vim exerci phaedrum Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of
passages of Lorem Ipsum available, but the majority have alteration in some injected or words which
don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
sure there isn’t anything embarrang hidden in the middle of text. All the Lorem Ipsum generators on the
Internet tend to repeat predefined chunks as necessary, making this the first true generator on the
Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
structures, to generate Lorem Ipsum which looks reasonable.
Lorem ipsum dolor sit amet, chicle mund et duo, vim exerci phaedrum Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of
passages of Lorem Ipsum available, but the majority have alteration in some injected or words which
don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
sure there isn’t anything embarrang hidden in the middle of text. All the Lorem Ipsum generators on the
Internet tend to repeat predefined chunks as necessary, making this the first true generator on the
Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
structures, to generate Lorem Ipsum which looks reasonable.
          </p>
        </div>
        <div className="tags">
          <span className="tag">box</span>
          <span className="tag">food</span>
        </div>
        <div className="related-links">
          <div className="related-item">Agronomy and relation to Other Sciences</div>
          <div className="related-item">Bringing Foodwares Production Back to Earth</div>
        </div>
        <div className="social-icons">
          <FaFacebookF className="icon" />
          <FaTwitter className="icon" />
          <FaPinterestP className="icon" />
          <FaLinkedinIn className="icon" />
        </div>
      </div>
      <div className="comment-section">
        <h3>Leave a Comment</h3>
        <input type="text" placeholder="Full Name" className="comment-input" />
        <input type="email" placeholder="Email Address" className="comment-input" />
        <textarea placeholder="Write Comment" className="comment-textarea"></textarea>
        <button className="post-comment">Post Comment</button>
      </div>
    </div>
  );
};

export default Newdetail;
