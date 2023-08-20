import React, { useState } from "react";
import { Element, scroller } from "react-scroll";
import "../styling/Services.css";
import ContentPage1 from "./services/ContentPage1";
import ContentPage2 from "./services/ContentPage2";
import ContentPage3 from "./services/ContentPage3";

function Services() {
  const [currentPage, setCurrentPage] = useState("page1");

  const scrollToNextPage = () => {
    if (currentPage === "page1") {
      scroller.scrollTo("page2", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
      setCurrentPage("page2");
    } else if (currentPage === "page2") {
      scroller.scrollTo("page3", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
      setCurrentPage("page3");
    }
  };

  return (
    <div className="smooth-scroll-container">
      <Element name="page1" className="page page1">
        <ContentPage1 />
        <button className="button-scroll" onClick={scrollToNextPage}>
          ⇓ See More ⇓
        </button>
      </Element>
      <Element name="page2" className="page page2">
        <ContentPage2 />
        <button className="button-scroll" onClick={scrollToNextPage}>
          ⇓ See More ⇓
        </button>
      </Element>
      <Element name="page3" className="page page3">
        <ContentPage3 />
      </Element>
    </div>
  );
}

export default Services;
