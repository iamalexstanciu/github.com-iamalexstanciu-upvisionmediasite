import React, { useState } from "react";
import { Element, scroller } from "react-scroll";
import WebDevelopment from "../assets/services2.jpg";
import WebDevelopment1 from "../assets/services3.jpg";
import WebDevelopment2 from "../assets/services4.jpg";
import WebDevelopment3 from "../assets/services5.jpg";
import "../styling/Services.css";

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
        <div className="page1-container">
          <img
            className="page1-image"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt="services first pic agency"
          />
          <div className="second-column-page1">
            <h2>
              Unveil your business potential with captivating online presence!
            </h2>
            <div className="statistics-online-presence">
              <h3>Importance of Online Presence for Businesses</h3>
              <div className="first-stats">
                <h4>Increased Visibility</h4>
                <p>
                  Having a strong online presence provides businesses with a
                  platform to gain visibility and reach a larger audience. With
                  the right resources and promotion, your company can be easily
                  seen by potential customers and those interested in your
                  products or services.
                </p>
              </div>
              <div className="second-stats">
                <h4>Increased Brand Awareness</h4>
                <p>
                  Having an online presence allows businesses to reach more
                  people and build a stronger brand awareness. With the right
                  content and promotion, your business can be seen by more
                  potential customers and build a more recognizable brand.
                </p>
              </div>
              <div className="third-stats">
                <h4>Increased Trust</h4>
                <p>
                  People are more likely to trust a business that is visible
                  online. An online presence allows businesses to establish a
                  reputation and a level of trust with customers, helping to
                  drive sales and gain new customers.
                </p>
              </div>
            </div>
          </div>
          <button className="button-scroll" onClick={scrollToNextPage}>
            ⇓ See More ⇓
          </button>
        </div>
      </Element>
      <Element name="page2" className="page page2">
        <div className="page2-container">
          <div className="page2-left">
            <p>Some text</p>
          </div>
          <div className="page2-right">
            <img
              src={WebDevelopment}
              className="image1-services"
              alt="services 2 page"
            />
            <img
              src={WebDevelopment1}
              className="image2-services"
              alt="services 2 page"
            />
            <img
              src={WebDevelopment2}
              className="image3-services"
              alt="services 2 page"
            />
            <img
              src={WebDevelopment3}
              className="image4-services"
              alt="services 2 page"
            />
          </div>
        </div>
        <button className="button-scroll" onClick={scrollToNextPage}>
          ⇓ See More ⇓
        </button>
      </Element>
      <Element name="page3" className="page page3"></Element>
    </div>
  );
}

export default Services;
