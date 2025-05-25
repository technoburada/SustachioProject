import React, { useState } from "react"; 
import "./AskedQuestions.css";

const AskedQuestions = () => {
  const faqSections = [
    {
      title: "Payments",
      faqs: [
        { question: "Can I cancel my subscription anytime?", answer: "Yes, you can cancel anytime from your account settings." },
        { question: "How do I update my payment method?", answer: "You can update your payment method from your account settings." },
        { question: "Are there any late fees for payments?", answer: "No, we do not charge late fees for payments." }
      ]
    },
    {
      title: "Subscription",
      faqs: [
        { question: "How do I upgrade my subscription?", answer: "You can upgrade your subscription by visiting your account settings." },
        { question: "Can I cancel my subscription anytime?", answer: "Yes, you can cancel anytime from your account settings." },
        { question: "What happens if I cancel my subscription?", answer: "You will continue to have access until the end of your billing period." }
      ]
    },
    {
      title: "Refunds & Policies",
      faqs: [
        { question: "How do I request a refund?", answer: "To request a refund, contact our support team through the Help Center." },
        { question: "What is your refund policy?", answer: "We offer a 30-day money-back guarantee for all our subscription plans." },
        { question: "Can I get a refund if I cancel early?", answer: "Refunds are provided only within the first 30 days of your subscription." }
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pricingfaq-container">
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '20vh',
          textAlign: 'center'
        }}
      >
        <button 
          className="compare-button" 
          style={{
            padding: '12px 24px',
            backgroundColor: '#FFC727', 
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
        >
          Frequently Asked Questions
        </button>
        <div 
          className="arrow" 
          style={{
            fontSize: '36px',
            color: '#4caf50', 
          }}
        >
          ↓
        </div>
      </div>

      <div className="generalaskedquestionsfaq-list">
        {faqSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="generalaskedquestionsfaq-section">
            <h3 className="generalaskedquestionsfaq-section-title">{section.title}</h3>
            {section.faqs.map((faq, index) => {
              const uniqueIndex = `${sectionIndex}-${index}`;
              return (
                <div
                  key={uniqueIndex}
                  className={`generalaskedquestionsfaq-item ${activeIndex === uniqueIndex ? "active" : ""}`}
                  onClick={() => toggleFAQ(uniqueIndex)}
                >
                  <div className="generalaskedquestionsfaq-question">
                    {faq.question}
                    <span className="generalaskedquestionsfaq-toggle">
                      {activeIndex === uniqueIndex ? "−" : "+"}
                    </span>
                  </div>
                  {activeIndex === uniqueIndex && <div className="generalaskedquestionsfaq-answer">{faq.answer}</div>}
                </div>
              );
            })}
          </div>
        ))}

        <div className="generalaskedquestionshelpcenter">
          <h4>Still have a question?</h4>
          <a href="/Contact">Help Center <i className="fas fa-paper-plane"></i></a>
        </div>
      </div>
    </div>
  );
};

export default AskedQuestions;