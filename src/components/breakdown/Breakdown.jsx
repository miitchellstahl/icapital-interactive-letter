import React from "react";
import "./breakdown.css";
import photo from "./breakdownpic.png";
import Typewriter from "typewriter-effect";

const Breakdown = () => {
  return (
    <section id="breakdown">
      <div className="blue-box-breakdown container shadow" data-aos="fade-up">
        <h4 className="text-primary shadow-text">Let's Break it Down</h4>
        <img className="shadow" src={photo} alt="" />
      </div>
      <div className="exhibit-c container">
        <h4 className=" text-primary exhibit-c-text shadow-text">Exhibit C:</h4>
      </div>
      <ul className="container list">
        <li className="container">
          <h5 className="shadow-text" data-aos="fade-up">
            I demonstrated my knowledge about web application development when I
            created <a href="https://www.nolelodging.com">NoleLodging</a>. Using
            JavaScript(Node), Mongo, Express, and EJS I created a dynamic web
            app that actually has active users.
          </h5>
        </li>
        <li className="container">
          <h5 className="shadow-text" data-aos="fade-up">
            This project was created using React, which is one of the most
            popular JavaScript frameworks
          </h5>
        </li>
        <li className="container">
          <h5 className="shadow-text" data-aos="fade-up">
            When approached with a problem, I always use a hands on approach to
            solve it. My goal for this project was to showcase my ability,
            passion, and skill in a simple and playful way. I think I did just
            that.
          </h5>
        </li>
        <li className="container">
          <h5 className="shadow-text" data-aos="fade-up">
            <Typewriter
              options={{
                strings: [
                  "mkdir MitchellSkills",
                  "cd MitchellSkills",
                  "touch node.js creativity.js",
                  "exit",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h5>
        </li>
      </ul>
    </section>
  );
};

export default Breakdown;
