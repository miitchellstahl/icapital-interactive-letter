import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <h5 id="date">November 5th, 2022</h5>
      <div className="container header__container">
        <h1 className="text-primary shadow-text" data-aos="fade-right">
          Dear iCapital,
        </h1>
        <div className="header__text">
          <h5>
            One of the most obvious, yet impactful, lessons I have learned in
            life is to <span className="text-primary">chase</span> your dreams.
            From genealogy to weightlifting to{" "}
            <span className="text-primary">programming,</span> I have
            outperformed the competition and poured my heart into every passion
            I possess. My creativity, work ethic, and skill is{" "}
            <span className="text-primary">unmmatched.</span> <br />
            <br /> That statement may sound impressive and all, but everyone
            claims that they’re the “most” skilled and “the perfect” candidate
            for the role. Resumes and Zoom interviews can only show so much. I
            believe in <span className="text-primary">proving</span> my worth.{" "}
            <br />
            <br />
            In order to thoroughly prove my understanding of the company and
            show the <span className="text-primary">value</span> I would bring,
            this project is a <span className="text-primary">necessity.</span>
            <br />
            <br />I believe this project demonstrates more about me than any
            technical interview can.
            <br />
            <h5 className="text-primary">Thank you</h5>
          </h5>
        </div>
      </div>
    </header>
  );
};

export default Header;
