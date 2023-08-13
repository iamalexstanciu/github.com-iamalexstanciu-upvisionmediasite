import React from "react";
import Alex from "../assets/alex.png";
import "../styling/About.css";

function About() {
  return (
    <div className="about-container">
      <div className="header">
        <h1>Our Team</h1>
        <p>upVisionMedia: Elevating web experiences.</p>
        <p>
          Our expert team crafts captivating landing pages, fusing design and
          functionality for impactful digital presence.
        </p>
        <div class="divider"></div>
      </div>
      <div className="team-cards">
        <div className="first-card">
          <img
            className="profile-image"
            src={Alex}
            style={{ width: "50%" }}
            alt="Alex"
          />
          <h4 className="hide-when-hover">Founder & CEO</h4>
          <p className="hidden-message">Full Stack Developer </p>
          <p className="hidden-message">
            {" "}
            [Passionate in Front-end development and huge FC Juventus fan!]
          </p>
        </div>
        <div className="first-card">
          <img
            className="profile-image"
            src={Alex}
            style={{ width: "50%" }}
            alt="Alex"
          />
          <h4 className="hide-when-hover">Founder & CEO</h4>
          <p className="hidden-message">Full Stack Developer </p>
          <p className="hidden-message">
            {" "}
            [Passionate in Front-end development and huge FC Juventus fan!]
          </p>
        </div>
        <div className="first-card">
          <img
            className="profile-image"
            src={Alex}
            style={{ width: "50%" }}
            alt="Alex"
          />
          <h4 className="hide-when-hover">Founder & CEO</h4>
          <p className="hidden-message">Full Stack Developer </p>
          <p className="hidden-message">
            {" "}
            [Passionate in Front-end development and huge FC Juventus fan!]
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
