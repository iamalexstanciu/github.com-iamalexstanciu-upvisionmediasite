import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styling/NavigationBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import zIndex from "@mui/material/styles/zIndex";
import { orange } from "@mui/material/colors";
import Animation from "../pages/Cards";
function NavigationBar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbarElement = document.querySelector(".navbar");
      const smallLogoContainer = document.querySelector(
        ".small-logo-container"
      );
      const smallLogoElement = document.querySelector(".small-logo");

      if (navbarElement && smallLogoContainer && smallLogoElement) {
        const navbarHeight = navbarElement.clientHeight;
        const smallLogoHeight = smallLogoElement.clientHeight;

        if (window.scrollY > navbarHeight + 150) {
          setIsSticky(true);
          smallLogoContainer.style.paddingTop = `${smallLogoHeight}px`;
        } else {
          setIsSticky(false);
          smallLogoContainer.style.paddingTop = `${navbarHeight}px`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
    
      {isMobile ? (
        <div className={`mobile-navbar ${menuIsOpen ? "open" : ""}`}>
          <button
            className="navbar-toggle"
            style={{ zIndex: "10" }}
            onClick={openMenu}>
            {" "}
            |||
          </button>
          <div className="menu-items">
            <ul className="menu-items-links">
              <a href="/services">services</a>
              <a href="/clients">clients</a>
              <a href="/contact">contact</a>
              <a href="/about">about us</a>
            </ul>
          </div>
        </div>
      ) : (
        <div
          className={`navbar navbar-inverse navbar-fixed-top ${
            isSticky ? "sticky" : ""
          }`}
          role="navigation" >
          <div className="container-navbar">
            <div className="navbar-header">
              <div className="small-logo-container">
                <a className="small-logo" href="/home">
                  ↥ upVisionMedia
                </a>
              </div>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="active">
                  <a href="/services">services</a>
                </li>
                <li>
                  <a href="/clients">clients</a>
                </li>
                <li>
                  <a href="/contact">contact</a>
                </li>
                <li>
                  <a href="/about">about us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="container-fluid big-logo-row">
        <div className="container">
          <div className="row">
            <div
              className="col-xs-12 big-logo-container"
              style={{ zIndex: "1" }}>
              <Link className="bigLogo-link" to="/home">
                <h1 className="big-logo" href="/home">
                  ↧ upVisionMedia
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
