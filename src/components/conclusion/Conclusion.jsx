import React from "react";
import "./conclusion.css";

const Conclusion = () => {
  return (
    <footer>
      <div className="container header__container">
        <h1 className="text-primary shadow-text" data-aos="fade-right">
          Conclusion
        </h1>
        <div className="header__text">
          <h5>
            Now that you’ve learned a little bit more about me, from my{" "}
            <span className="text-primary">
              understanding of the company’s mission and statistics
            </span>{" "}
            to my <span className="text-primary">long history with tech,</span>{" "}
            I want to thank you for taking the time to view this React.js
            project. <br />
            <br /> If you haven’t realized already, this project simply mirrors
            what I would bring to the table at iCapital. As Lawrence Calcano
            explained, one of the big tasks of iCapital is to make alternative
            investments{" "}
            <span className="text-primary">
              easier to access and understand.
            </span>
            <br />
            <br />
            Through this project, I have made my value to the company{" "}
            <span className="text-primary">easier to understand</span> by using
            technology to build a project that demonstrates some of my skills.
            This is also much{" "}
            <span className="text-primary">easier to access</span> than a
            resume, all you have to do is send the link. If awarded the
            position, I will put my skills and effort towards advancing
            alternative investments.
          </h5>

          <h5>
            <br />
            Sincerely, <br />
            <br />
            <span className="text-primary">Mitchell Stahl</span>
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Conclusion;
