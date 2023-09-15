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
        <div class="nav-title">
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
      </div>
    </div>
  );
}
