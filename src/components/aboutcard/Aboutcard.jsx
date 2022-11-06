import React from "react";
import "./aboutcard.css";

const Aboutcard = (props) => {
  return (
    <div className="about-card" data-aos="fade-up">
      <div className="about-header">
        <h5 className="text-shadow">{props.header}</h5>
      </div>
      <div className="about-middle">
        <img className="shadow" src={props.middle} alt="" />
      </div>
      <div className="about-footer">
        <h5 className="text-shadow">{props.footer}</h5>
      </div>
    </div>
  );
};

export default Aboutcard;
