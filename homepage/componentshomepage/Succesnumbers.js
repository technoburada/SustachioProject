import React from "react";
import "./Succesnumbers.css";

const SuccessNumbers = () => {
  return (
    <div className="successnumber-container">
      <h2>
        <span className="successnumberhighlight">Our Success</span> Numbers
      </h2>
      <div className="successnumber-stats">
        <div className="successnumberstat1">
          <span className="successnumbericon">🍽️</span>
          <h3>1,500,000</h3>
          <p>Total Products Sold</p>
        </div>
        <div className="successnumberdivider"></div>
        <div className="successnumberstat2">
          <span className="successnumbericon">⭐</span>
          <h3>+1,000</h3>
          <p>Average star review. 4.5 stars out of 5</p>
        </div>
        <div className="successnumberdivider"></div>
        <div className="successnumberstat3">
          <span className="successnumbericon">👥</span>
          <h3>+20,000</h3>
          <p>Number of Clients</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessNumbers;
