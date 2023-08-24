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
        <div className="group-1">
          <div className="digital">upvision</div>
          <div className="studio">Media</div>
          <img src={Logo} alt="" className="logo-navbar" />
        </div>
      </div>
      <div className="date-time-local">
        <p className="city-date">Bucharest</p>
        <p>{currentDateTime}</p>
      </div>
      <div className="frame-2">
        <div
          className="contact-navbar"
          onClick={() => {
            UseScroll("contact");
          }}>
          Contact Us
        </div>
      </div>
    </div>
  );
}
