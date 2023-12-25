import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="section">
        <div className="content">
          <h2 style={{fontFamily:"cursive",fontWeight: "bold"}}>Welcome to Our Story</h2>
          <p>
            Here goes your narrative text describing your company or yourself. This could include a brief history, vision, mission, or any other relevant information.
          </p>
          <img
            src="/imgs/ab2.jpg"
            alt="Five PCs arranged on a desk"
            className="image-large"
          />
        </div>
      </div>
      <div className="section">
        <div className="content">
          <h2 style={{fontFamily:"cursive",fontWeight: "bold"}}>Our Unique Approach</h2>
          <p>
            Add a captivating description of your unique approach, methodology, or values here.
          </p>
          <div className="image-mirrored-container">
            <img
              src="/imgs/ab1.jpg"
              alt="Mirrored five PCs arranged on a desk"
              className="image-mirrored"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
