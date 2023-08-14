import React from "react";
import Alex from "../assets/alex.png";
import Profile from "../assets/profile.png";
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
            src={Profile}
            style={{ width: "45%" }}
            alt="Alex"
          />

          <h4 className="hide-when-hover">Iancu Constantin</h4>
          <h5 className="hide-when-hover">Founder & CEO</h5>
          <div className="hidden-message">
            <p> Full Stack Developer </p>
            <p> Description</p>
            <div className="socialmedia-connections">
              <a href="https://www.instagram.com/alex.stanciu/">Instagram</a>
              <a href="https://twitter.com/AlexStanciu_">Twitter</a>
              <a href="https://www.linkedin.com/in/iamalexstanciu/">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="first-card">
          <img
            className="profile-image"
            src={Alex}
            style={{ width: "45%" }}
            alt="Alex"
          />

          <h4 className="hide-when-hover">Alexandru Stanciu</h4>
          <h5 className="hide-when-hover">Founder & CEO</h5>
          <div className="hidden-message">
            <p>Full Stack Developer </p>
            <p>
              {" "}
              Passionate in Front-end development and huge FC Juventus fan!
            </p>
            <div className="socialmedia-connections">
              <a href="https://www.instagram.com/alex.stanciu/">Instagram</a>
              <a href="https://twitter.com/AlexStanciu_">Twitter</a>
              <a href="https://www.linkedin.com/in/iamalexstanciu/">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="first-card">
          <img
            className="profile-image"
            src={Profile}
            style={{ width: "45%" }}
            alt="Alex"
          />

          <h4 className="hide-when-hover">Razvan Tache</h4>
          <h5 className="hide-when-hover">Founder & CEO</h5>
          <div className="hidden-message">
            <p>Full Stack Developer </p>
            <p> Description</p>
            <div className="socialmedia-connections">
              <a href="https://www.instagram.com/alex.stanciu/">Instagram</a>
              <a href="https://twitter.com/AlexStanciu_">Twitter</a>
              <a href="https://www.linkedin.com/in/iamalexstanciu/">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
