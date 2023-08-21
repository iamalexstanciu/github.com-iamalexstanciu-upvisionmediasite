import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styling/NavigationBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoChatbubbleOutline,
  IoCameraOutline,
  IoInformationCircleOutline,
  IoMailOutline,
  IoSettingsOutline,
   IoBuildOutline,
  IoAlbums,
} from "react-icons/io5";
function NavigationBar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const location = useLocation();
  const [playAnimation, setPlayAnimation] = useState(false);
    const navItems = [
      { icon: <IoHomeOutline />, color: "#f44336" },
      { icon: <IoPersonOutline />, color: "#ffa117" },
      { icon: <IoChatbubbleOutline />, color: "#0fc70f" },
      { icon: <IoCameraOutline />, color: "#2196f3" },
      { icon: <IoSettingsOutline />, color: "#b145e9" },
    ];
  // useEffect(() => {
  //   if (!localStorage.getItem("logoAnimationPlayed")) {
  //     setPlayAnimation(true);
  //   }
  // }, []);
  // useEffect(() => {
  //   if (playAnimation) {
  //     localStorage.setItem("logoAnimationPlayed", "true");
  //   }
  // }, [playAnimation]);

  useEffect(() => {
    if (location.pathname === "/home" || location.pathname === "/") {
      setPlayAnimation(true);
    } else {
      setPlayAnimation(false);
    }
  }, [location]);

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
            onClick={openMenu}
          >
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
          role="navigation"
        >
          <div
            className="container-navbar"
            // style={{ background: "var(--black)", margin: '0%' }}
          >
            <div className="navbar-header">
              <div className="small-logo-container">
                <a className="small-logo" href="/home">
                  ↥ upVisionMedia
                </a>
              </div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="/services">
                      <IoBuildOutline /> services
                    </a>
                  </li>
                  <li>
                    <a href="/clients">
                      <IoPersonOutline />
                      clients
                    </a>
                  </li>
                  <li>
                    <a href="/contact">
                      <IoMailOutline />
                      contact
                    </a>
                  </li>
                  <li>
                    <a href="/about">
                      <IoInformationCircleOutline /> about us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {location.pathname === "/home" || location.pathname === "/" ? (
        <div className="container-fluid big-logo-row">
          <div className="row">
            <div
              className="col-xs-12 big-logo-container"
              style={{
                zIndex: "1",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div class="center">
                <div id="cloud"></div>
              </div>
              <Link className="bigLogo-link" to="/home">
                <h1
                  className={`big-logo ${playAnimation ? "animate" : ""}`}
                  href="/home"
                >
                  ↧ upVisionMedia
                </h1>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="smallLogo"
          style={{
            zIndex: "1",
            display: "flex",
            justifyContent: "left",
            position: "relative",
            left: "10%",
            width: "25%",
            margin: "0",
          }}
        >
          <Link to="/home">
            <h1 style={{ color: "var(--dark)", textDecoration: "none" }}>
              ↥ upVisionMedia
            </h1>
          </Link>
        </div>
      )}
    </>
  );
}

export default NavigationBar;
