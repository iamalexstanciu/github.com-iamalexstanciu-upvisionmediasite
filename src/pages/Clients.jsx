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
      <div className="two">
        <div className="frame-37">
          <div className="frame-36">
            <div className="show-all">Show all</div>
            <div className="bi-arrow-up">
              <svg
                className="group"
                width="22"
                height="14"
                viewBox="0 0 22 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.49988 6.99997C0.49988 7.19888 0.578897 7.38965 0.719549 7.5303C0.860203 7.67095 1.05097 7.74997 1.24988 7.74997L18.9394 7.74997L14.2189 12.469C14.0781 12.6098 13.9989 12.8008 13.9989 13C13.9989 13.1991 14.0781 13.3901 14.2189 13.531C14.3597 13.6718 14.5507 13.7509 14.7499 13.7509C14.949 13.7509 15.1401 13.6718 15.2809 13.531L21.2809 7.53097C21.3507 7.4613 21.4061 7.37854 21.4439 7.28742C21.4818 7.1963 21.5012 7.09862 21.5012 6.99997C21.5012 6.90132 21.4818 6.80364 21.4439 6.71252C21.4061 6.6214 21.3507 6.53864 21.2809 6.46897L15.2809 0.468971C15.2111 0.399239 15.1284 0.343925 15.0373 0.306186C14.9461 0.268447 14.8485 0.249023 14.7499 0.249023C14.5507 0.249023 14.3597 0.328141 14.2189 0.468971C14.0781 0.609801 13.9989 0.800807 13.9989 0.999971C13.9989 1.19913 14.0781 1.39014 14.2189 1.53097L18.9394 6.24997L1.24988 6.24997C1.05097 6.24997 0.860203 6.32899 0.719549 6.46964C0.578897 6.61029 0.49988 6.80106 0.49988 6.99997Z"
                  fill="#FF6333"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <div class="card-project">
          <div class="card1 card-img"></div>
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
          <div class="card2 card-img"></div>
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
          <div class="card3 card-img"></div>
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
          <div class="card4 card-img"></div>
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
