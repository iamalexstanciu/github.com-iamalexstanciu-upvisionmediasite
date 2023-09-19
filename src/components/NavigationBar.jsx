import React, { useEffect, useState } from "react";
import "../styling/NavigationBar.css";
import Logo from "../assets/logo-upvision.png";
import UseScroll from "../data/UseScroll";
import moment from "moment-timezone";
import axios from "axios";

export default function NavigationBar() {
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(() => {
    // Check if geolocation is available in the browser
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          // Extract latitude and longitude from the position object
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          // Use reverse geocoding to fetch the city name based on coordinates
          try {
            const response = await axios.get(
              `https://api.opencagedata.com/geocode/v1/json?key=55958d4bc95c411aaffe04311e2f7bd0&q=${latitude}+${longitude}`
            );
            const cityName = response.data.results[0].components.city;
            setCity(cityName);
          } catch (error) {
            console.error("Error fetching city name:", error);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not available in your browser.");
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment().tz("Europe/Bucharest");
      const formattedDateTime = now.format("dddd, MMMM Do YYYY, HH:mm:ss");
      setCurrentDateTime(formattedDateTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div
          className="nav-title"
          onClick={() => {
            UseScroll("home");
          }}>
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="date-time-local">
        {location ? (
          <div>
            <p className="city-holder">
              You are currently in: <span className="city"> {city} </span>
            </p>
            <p>{currentDateTime}</p>
          </div>
        ) : (
          <p>Loading location...</p>
        )}
      </div>

      <div className="nav-links">
        <a
          href="#0"
          onClick={() => {
            UseScroll("services");
          }}>
          services
        </a>
        <a
          href="#0"
          onClick={() => {
            UseScroll("aboutUs");
          }}>
          about
        </a>
        <a
          href="#0"
          onClick={() => {
            UseScroll("clients");
          }}>
          clients
        </a>
        <a
          href="#0"
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
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"></path>
            <path
              d="M4 12.0601H14.17"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"></path>
            <path
              d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
