import React from "react";
import "../styling/About.css";
import Alex from "../assets/alex.png";
import ProfileImage from "../assets/profile.png";

export default function About() {
  return (
    <div className="about-section">
      <div class=""></div>
      <div class="meet-our-team">Meet our team</div>
      <div class="description">
        Our team consists of highly qualified specialists with international
        Experience in Web Development, Mobile Development, Product management
        and design. We design ideas, put them into practice and take the user
        experience to the next level, your business is our priority.
      </div>

      <div class="cards-container">
        <div className="profile-card">
          <img
            class="profile-picture"
            src={ProfileImage}
            alt="presentation card"
          />
          <h3>Razvan Tache</h3>
          <h5>Full-Stack Developer</h5>
        </div>
        <div className="profile-card">
          <img class="profile-picture" src={Alex} alt="presentation card" />
          <h3>Alexandru Stanciu</h3>
          <h5>Full-Stack Developer</h5>
        </div>
        <div className="profile-card">
          <img
            class="profile-picture"
            src={ProfileImage}
            alt="presentation card"
          />
          <h3>Constantin Iancu</h3>
          <h5>Full-Stack Developer</h5>
        </div>
      </div>
    </div>
  );
}
