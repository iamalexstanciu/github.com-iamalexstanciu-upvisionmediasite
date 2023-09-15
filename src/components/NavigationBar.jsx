import React, { useEffect, useState } from "react";
import "../styling/NavigationBar.css";
import Logo from "../assets/logo-upvision.png";
import UseScroll from "../data/UseScroll";
import moment from "moment-timezone";

export default function NavigationBar() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment().tz("Europe/Bucharest");
      const formattedDateTime = now.format("dddd, MMMM Do YYYY, HH:mm:ss");
      setCurrentDateTime(formattedDateTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div
          class="nav-title"
          onClick={() => {
            UseScroll("home");
          }}>
          <img src={Logo} alt="" />
          <p>
            upVision
            <br />
            Media
          </p>
        </div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="date-time-local">
        <p className="city-date">Bucharest</p>
        <p>{currentDateTime}</p>
      </div>

      <div class="nav-links">
        <a
          onClick={() => {
            UseScroll("services");
          }}>
          services
        </a>
        <a
          onClick={() => {
            UseScroll("aboutUs");
          }}>
          about
        </a>
        <a
          onClick={() => {
            UseScroll("clients");
          }}>
          clients
        </a>
        <a
          onClick={() => {
            UseScroll("review");
          }}>
          reviews
        </a>
        <button
          className="cta-button"
          onClick={() => {
            UseScroll("contact");
          }}>
          <div>Contact</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none">
            <path
              d="M11.6801 14.62L14.2401 12.06L11.6801 9.5"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"></path>
            <path
              d="M4 12.0601H14.17"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"></path>
            <path
              d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
