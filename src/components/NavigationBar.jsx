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
    <div className="frame-3">
      <div className="frame-1">
        <div
          className="buttons-navbar"
          onClick={() => {
            UseScroll("services");
          }}>
          services
        </div>
        <div
          className="buttons-navbar"
          onClick={() => {
            UseScroll("aboutUs");
          }}>
          about
        </div>
        <div
          className="buttons-navbar"
          onClick={() => {
            UseScroll("clients");
          }}>
          clients
        </div>
        <div
          className="buttons-navbar"
          onClick={() => {
            UseScroll("review");
          }}>
          reviews
        </div>
      </div>
      <div className="frame-4">
        <div
          className="group-1"
          onClick={() => {
            UseScroll("home");
          }}>
          <div className="digital">upVision</div>
          <div className="studio">Media</div>
          <img src={Logo} alt="" className="logo-navbar" />
        </div>
      </div>
      <div className="date-time-local">
        <p className="city-date">Bucharest</p>
        <p>{currentDateTime}</p>
      </div>
      <button
        className="button-contact-navbar"
        onClick={() => {
          UseScroll("contact");
        }}>
        {" "}
        Get started
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
          </svg>
        </div>
      </button>
    </div>
  );
}
