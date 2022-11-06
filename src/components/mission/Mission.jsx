import React from "react";
import "./mission.css";
import { useState } from "react";
import JSConfetti from "js-confetti";
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();

const jsConfetti = new JSConfetti();

const Mission = () => {
  const [currentStress, setCurrentStress] = useState("Stressed");
  const [currentConfusion, setCurrentConfusion] = useState("Confused");
  const [currentEase, setCurrentEase] = useState("Not Easy");
  const [currentAccess, setCurrentAccess] = useState("Not Available");

  const [currentColor, setCurrentColor] = useState("red");

  const changeMissionHandler = () => {
    setCurrentStress("Not Stressed");
    setCurrentConfusion("Not Confused");
    setCurrentEase("Easy");
    setCurrentAccess("Available");
    setCurrentColor("green");
    jsConfetti.addConfetti({ emojis: ["💸", "💎"], confettiNumber: 50 });
  };

  return (
    <section id="mission">
      <h5 className="container story" data-aos="fade-up">
        <span className="text-primary ">Story Time:</span> Tim Jones wants to
        start investing in alternative investments, but he is extremely
        overwhelmed and confused. His financial advisor just started working
        with iCapital, and has access to Simon and other technologies. Through
        the centralized platform, Tim's financial advisor is able to make sure
        that Tim has the smoothest investment process possible. Click on the
        button below to see Tim's before and after.
      </h5>
      <div className="container blue-box shadow" data-aos="fade-up">
        <div className="box-title">
          <h4>Before & After iCapital</h4>
        </div>
        <div className="box-categories">
          <h4>
            Stress Level: <span className={currentColor}>{currentStress}</span>
          </h4>
          <h4>
            Confusion: <span className={currentColor}>{currentConfusion}</span>
          </h4>
          <h4>
            Ease of Use: <span className={currentColor}>{currentEase}</span>
          </h4>
          <h4>
            Availability of Assets:{" "}
            <span className={currentColor}>{currentAccess}</span>
          </h4>
        </div>

        <div className="box-button">
          <button className="btn shadow" onClick={changeMissionHandler}>
            <h5>Introduce iCapital's Technology</h5>
          </button>
        </div>
      </div>

      <div className="exhibit-a container" data-aos="fade-up">
        <h5 id="exhibit-a-text shadow-text">
          <span className="text-primary">Exhibit A:</span> I demonstrated the
          company's mission in a creative and extremely SIMPLE way, making it
          clear that the main goal of iCapital is to create technology that
          allows high net worth individuals to understand, access, and
          incorporate alternative investments in their porfolio. PS: This is an
          example of a React Hook.
        </h5>
      </div>
    </section>
  );
};

export default Mission;
