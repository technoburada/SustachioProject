import React, { useState } from 'react';
import './AskedQuestionssearchbox.css';
import { FaCommentDots } from 'react-icons/fa';
import searchboximage from "./searchboximage.png";

const AskedQuestionsSearchbox = () => {

  return (
    <div className="faq-search-container">
      <div className="faq-banner">
        <h1>Frequently Asked Questions</h1>
        

      </div>

      <div className="faq-search-content">
        {/* Assistant Section */}
        <div className="faq-prompt">
          <img src={searchboximage} alt="Assistant" className="faq-avatar" />
          <div className="faq-bubble">
            <FaCommentDots className="faq-icon" />
            <p>Have a question?</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AskedQuestionsSearchbox;
