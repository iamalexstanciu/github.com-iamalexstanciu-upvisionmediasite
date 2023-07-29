import React from "react";
import "../styling/Home.css";
import { Link } from "react-router-dom";
import HomeBannerImage from "../assets/upvisionMediaHomePageBanner.png";

function Home() {
  return (
    <div className="container-home">
      <div className="left-side-home">
        <h1>Your business, our priority.</h1>
        <h3>"Unleash Your Digital Potential. Welcome to upvisionMedia."</h3>
        <Link to="/contact">
          <button className="contact-homepage">Let's Begin!</button>
        </Link>
      </div>
      <div className="right-side-home">
        <img src={HomeBannerImage} alt="home upvision media banner" />
      </div>
    </div>
  );
}

export default Home;
