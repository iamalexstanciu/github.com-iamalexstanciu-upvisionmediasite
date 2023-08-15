import React from "react";
import { Element, scroller } from "react-scroll";
import "../styling/Services.css";

function Services() {
  const scrollToPage = (page) => {
    scroller.scrollTo(page, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
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
        </div>
        <button className="button-scroll" onClick={() => scrollToPage("page2")}>
          ⇓ See More ⇓
        </button>
      </Element>
      <Element name="page2" className="page page2"></Element>
      <Element name="page3" className="page page3">
        Page 3 content
      </Element>
    </div>
  );
}

export default Services;
