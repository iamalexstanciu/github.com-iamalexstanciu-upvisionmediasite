import React from "react";
import "../styling/Footer.css";
import Logo from "../assets/logo-upvision.png";
import UseScroll from "../data/UseScroll";

function Footer() {
  return (
    <div className="footer">
      <div className="social">
        <div className="links">
          <div
            className="buttons-footer"
            onClick={() => {
              UseScroll("home");
            }}>
            Home
          </div>
          <div
            className="buttons-footer"
            onClick={() => {
              UseScroll("services");
            }}>
            Services
          </div>
          <div
            className="buttons-footer"
            onClick={() => {
              UseScroll("review");
            }}>
            Reviews
          </div>
          <div
            className="buttons-footer"
            onClick={() => {
              UseScroll("contact");
            }}>
            Contact
          </div>
        </div>
      </div>
      <div className="group-82">
        <img className="logo-footer" src={Logo} />

        <div className="logo-text">
          <h4 className="logo-footer-text-up">upVision</h4>
          <h4 className="logo-footer-text-down">Media</h4>
        </div>
      </div>
      <div className="label">© upVisionMedia, 2023.</div>
    </div>
  );
}

export default Footer;
