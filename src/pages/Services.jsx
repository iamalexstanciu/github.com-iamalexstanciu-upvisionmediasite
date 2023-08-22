import React from "react";
import "../styling/Services.css";
import GifServices from "../assets/gif-page2.gif";

export default function Services() {
  return (
    <div className="hero">
      <div className="services-left-side">
        <img className="services-gif" src={GifServices} alt="presentation" />
      </div>
      <div className="services-right-side">
        <h3 className="title-right-side">Our services</h3>
        <ul>
          <li>Search Engine Optimization</li>
          <li>Mobile Responsiveness</li>
          <li>Landing Pages</li>
          <li>Branding</li>
        </ul>
      </div>
    </div>
  );
}
