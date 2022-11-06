import React from "react";
import "./numberscard.css";

const Numberscard = (props) => {
  return (
    <div className="number-card shadow">
      <div className="number-header">
        <h5 className="shadow-text">{props.header}</h5>
      </div>
      <div className="number-middle">
        <h2 className="text-primary shadow-text">{props.middle}</h2>
      </div>
      <div className="number-footer">
        <h5 className="shadow-text">{props.footer}</h5>
      </div>
    </div>
  );
};

export default Numberscard;
