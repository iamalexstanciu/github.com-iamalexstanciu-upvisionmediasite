import React, { useEffect, useState } from "react";
import "../styling/NavigationBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavigationBar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector(".navbar").clientHeight;
      const smallLogoContainer = document.querySelector(
        ".small-logo-container"
      );
      const smallLogoHeight =
        document.querySelector(".small-logo").clientHeight;

      if (window.scrollY > navbarHeight) {
        setIsSticky(true);
        smallLogoContainer.style.paddingTop = `${smallLogoHeight}px`;
      } else {
        setIsSticky(false);
        smallLogoContainer.style.paddingTop = `${navbarHeight}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`navbar navbar-inverse navbar-fixed-top ${
          isSticky ? "sticky" : ""
        }`}
        role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="small-logo-container">
              <a className="small-logo" href="#">
                ↥ upVisionMedia
              </a>
            </div>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <a href="#">Active</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid big-logo-row">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 big-logo-container">
              <h1 className="big-logo">↧ upVisionMedia</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
