import React from "react";
import "../styling/About.css";
import Alex from "../assets/alex.png";
import Razvan from "../assets/razvan.png";

import ProfileImage from "../assets/profile.png";

export default function About() {
  return (
    <div className="about-section" id="aboutUs">
      <div className="meet-our-team">Meet our team</div>
      <div className="description-about">
        Our team consists of highly qualified specialists with international
        Experience in Web Development, Mobile Development, Product management
        and design. We design ideas, put them into practice and take the user
        experience to the next level, your business is our priority.
      </div>

      <div class="responsive-container-block outer-container">
        <div class="responsive-container-block inner-container">
          <div class="responsive-container-block cards-container">
            <div class="responsive-cell-block wk-desk-4 wk-ipadp-4 wk-mobile-12 wk-tab-12 card-container">
              <p class="text-blk name">Razvan Tache</p>
              <p class="text-blk position">CEO</p>
              <img class="team-member-image" src={Razvan} alt="presentation" />
              <div class="social-container">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    class="social-media-icon"
                    alt="account"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"
                  />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    class="social-media-icon"
                    alt="account"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"
                  />
                </a>
                <a
                  href="https://www.gmail.com"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    class="social-media-icon"
                    alt="account"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    class="social-media-icon"
                    alt="account"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"
                  />
                </a>
              </div>
            </div>
            <div class="responsive-cell-block wk-desk-4 wk-ipadp-4 wk-mobile-12 wk-tab-12 card-container">
              <p class="text-blk name">Alexandru Stanciu</p>
              <p class="text-blk position">CEO</p>
              <img class="team-member-image" src={Alex} alt="presentation" />
              <div class="social-container">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    class="social-media-icon"
                    alt="account"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"
                  />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    class="social-media-icon"
                    alt="account"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"
                  />
                </a>
                <a
                  href="https://www.gmail.com"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    class="social-media-icon"
                    alt="account"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"
                  />
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    class="social-media-icon"
                    alt="account"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"
                  />
                </a>
              </div>
            </div>
            <div class="responsive-cell-block wk-desk-4 wk-ipadp-4 wk-mobile-12 wk-tab-12 card-container">
              <p class="text-blk name">Constantin Iancu</p>
              <p class="text-blk position">CEO</p>
              <img
                class="team-member-image"
                src={ProfileImage}
                alt="presentation"
              />
              <div class="social-container">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    class="social-media-icon"
                    alt="account"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"
                  />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    class="social-media-icon"
                    alt="account"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"
                  />
                </a>
                <a
                  href="https://www.gmail.com"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    class="social-media-icon"
                    alt="account"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    alt="account"
                    class="social-media-icon"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
