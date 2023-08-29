import React from "react";
import "../styling/Clients.css";

function Clients() {
  return (
    <div className="clients-section" id="clients">
      <div className="our-cases">Our cases</div>
      <div className="description-clients">
        These are some examples of projects in which we have put all our
        professionalism and passion.
      </div>
      <div className="projects-container">
        <div className="card-project">
          <div className="card1 card-img">
            <p className="title-front">Hover to see more</p>
          </div>
          <div className="card-body">
            <span className="bg"></span>
            <span className="bg"></span>
            <span className="bg"></span>
            <div className="card-content">
              <h2 className="title">Website Name</h2>
              <p className="para">
                A project description to tell user what we've done for this
                client.
              </p>
            </div>
          </div>
        </div>
        <div className="card-project">
          <div className="card2 card-img">
            <p className="title-front">Hover to see more</p>
          </div>
          <div className="card-body">
            <span className="bg"></span>
            <span className="bg"></span>
            <span className="bg"></span>
            <div className="card-content">
              <h2 className="title">Website Name</h2>
              <p className="para">
                A project description to tell user what we've done for this
                client.
              </p>
            </div>
          </div>
        </div>
        <div className="card-project">
          <div className="card3 card-img">
            <p className="title-front">Hover to see more</p>
          </div>
          <div className="card-body">
            <span className="bg"></span>
            <span className="bg"></span>
            <span className="bg"></span>
            <div className="card-content">
              <h2 className="title">Website Name</h2>
              <p className="para">
                A project description to tell user what we've done for this
                client.
              </p>
            </div>
          </div>
        </div>
        <div className="card-project">
          <div className="card4 card-img">
            <p className="title-front">Hover to see more</p>
          </div>
          <div className="card-body">
            <span className="bg"></span>
            <span className="bg"></span>
            <span className="bg"></span>
            <div className="card-content">
              <h2 className="title">Website Name</h2>
              <p className="para">
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
