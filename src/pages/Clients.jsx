import React from "react";
import "../styling/Clients.css";
import CoverProject from "../assets/portfolio.jpg";
import CoverProject1 from "../assets/portfolio1.jpg";
import CoverProject2 from "../assets/portfolio2.jpg";

function Clients() {
  return (
    <div className="clients-section" id="clients">
      <div className="our-cases">Our cases</div>
      <div className="description-clients">
        These are some examples of projects in which we have put all our
        professionalism and passion.
      </div>
      <div className="projects-container">
        <div class="card-project">
          <div class="card1 card-img">
            <p className="title-front">Hover to see more</p>
          </div>
          <div class="card-body">
            <span class="bg"></span>
            <span class="bg"></span>
            <span class="bg"></span>
            <div class="card-content">
              <h2 class="title">Website Name</h2>
              <p class="para">
                A project description to tell user what we've done for this
                client.
              </p>
            </div>
          </div>
        </div>
        <div class="card-project">
          <div class="card2 card-img">
            <p className="title-front">Hover to see more</p>
          </div>
          <div class="card-body">
            <span class="bg"></span>
            <span class="bg"></span>
            <span class="bg"></span>
            <div class="card-content">
              <h2 class="title">Website Name</h2>
              <p class="para">
                A project description to tell user what we've done for this
                client.
              </p>
            </div>
          </div>
        </div>
        <div class="card-project">
          <div class="card3 card-img">
            <p className="title-front">Hover to see more</p>
          </div>
          <div class="card-body">
            <span class="bg"></span>
            <span class="bg"></span>
            <span class="bg"></span>
            <div class="card-content">
              <h2 class="title">Website Name</h2>
              <p class="para">
                A project description to tell user what we've done for this
                client.
              </p>
            </div>
          </div>
        </div>
        <div class="card-project">
          <div class="card4 card-img">
            <p className="title-front">Hover to see more</p>
          </div>
          <div class="card-body">
            <span class="bg"></span>
            <span class="bg"></span>
            <span class="bg"></span>
            <div class="card-content">
              <h2 class="title">Website Name</h2>
              <p class="para">
                A project description to tell user what we've done for this
                client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
