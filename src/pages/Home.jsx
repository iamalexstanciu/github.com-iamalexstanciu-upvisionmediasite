import React from "react";
import "../styling/Home.css";
import HomeBannerImage from "../assets/home.png";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <div className="container-home">
      <div className="left-side-home">
        <div className="text-content">
          <h1 className="animatedTextHome">
            <Typewriter
              words={[
                "Welcome to upvisionMedia.",
                "Your business, our priority.",
                "Unleash Your Digital Potential.",
              ]}
              loop={200}
              cursor
              cursorStyle="|"
              typeSpeed={200}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <h4 className="h4TextHomepage">
            Ready to take your web presence to new heights?
          </h4>
          <h4 className="h4TextHomepage">
            Collaborate with us for cutting-edge web solutions.
          </h4>
        </div>
        <div className="circle-button">
          <span className="arrow"></span>
        </div>
      </div>
      <div className="right-side-home">
        <img
          className="imageHomePagePresentation"
          src={HomeBannerImage}
          alt="home upvision media banner"
        />
      </div>
    </div>
  );
}

export default Home;
