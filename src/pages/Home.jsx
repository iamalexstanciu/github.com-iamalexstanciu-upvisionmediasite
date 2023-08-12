import React from "react";
import "../styling/Home.css";
import HomeBannerImage from "../assets/home.png";
import { Typewriter } from "react-simple-typewriter";
import Cards from "./Cards";
function Home() {
  
  return (
    <div
      classNameName="container-home"
     
    >
      <div className="container">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src="https://cdn-icons-png.flaticon.com/256/3159/3159301.png" />
              <h3> Design </h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                {" "}
                Web designing is the process of planning, conceptualizing, and
                implementing the plan for designing a website in a way that is
                functional and offers a good user experience.{" "}
              </p>
              <a href="#"> Read More </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src="https://cdn-icons-png.flaticon.com/256/10479/10479781.png" />
              <h3> Code </h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Coding creates a set of instructions for computers to follow.
                These instructions determine what actions a computer can and
                cannot take.{" "}
              </p>
              <a href="#"> Read More</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src="https://cdn-icons-png.flaticon.com/256/2498/2498090.png" />
              <h3>Launch</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Your website will officially be published online and become
                viewable to people all over the world.
              </p>
              <a href="#"> Read More</a>
            </div>
          </div>
        </div>
      </div>
      <Cards/>
    </div>
  );
}

export default Home;
