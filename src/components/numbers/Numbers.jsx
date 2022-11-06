import React from "react";
import Numberscard from "../numberscard/Numberscard";
import "./numbers.css";

const Numbers = () => {
  return (
    <section id="numbers">
      <div className="blue-box-numbers container shadow" data-aos="fade-up">
        <h4 className="text-primary shadow-text">Dissecting the Numbers</h4>
        <div className="numbers-grid">
          <Numberscard
            header="Increased Assets to"
            middle="$108 Billion"
            footer="^ 59%"
          />
          <Numberscard
            header="Recognized as"
            middle="Top Fintech Firm"
            footer="2018, 2019, 2020, 2021"
          />
          <Numberscard header="Employs" middle="750+" footer="Globally" />
        </div>
      </div>
      <div className="exhibit-b container" data-aos="fade-up">
        <h5 id="exhibit-b-text shadow-text">
          <span className="text-primary ">Exhibit B:</span> Understanding the
          dynamic and statistics of a company is extremely important. These
          statistics tell me that iCapital is growing at an extremely fast rate,
          which would allow me to be apart of something that is actively
          evolving and, most importantly, making a difference in the world.
        </h5>
      </div>
    </section>
  );
};

export default Numbers;
