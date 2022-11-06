import React from "react";
import "./aboutme.css";
import drake from "../../assets/Drake.jpg";
import ancestry from "../../assets/ancestry.jpg";
import technology from "../../assets/Technology.jpg";
import Aboutcard from "../aboutcard/Aboutcard";

const Aboutme = () => {
  return (
    <section id="aboutme">
      <div
        className="blue-box-about container shadow gradient-class"
        data-aos="fade-up"
      >
        <h4 className="text-shadow">Brief Stats About Mitchell Stahl</h4>
        <div className="about-grid">
          <Aboutcard
            header="Favorite Artist"
            middle={drake}
            footer="When working on tasks, especially programming, I am much more efficient when listening to music. Drake is one of my favorite artists becuase of his style and diversity."
          />
          <Aboutcard
            header="Current Favorite Hobby"
            middle={ancestry}
            footer="I am always learning, growing, and evolving. My hobbies always change, however my current favorite hobby is learning about my ancestors and building my family tree."
          />
          <Aboutcard
            header="Tech History"
            middle={technology}
            footer="Tech is a passion that runs deep within me. At the age of 13 I demanded My Bar Mitzvah be technology themed. For as long as I can remember, tech has played a huge role in my life."
          />
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
