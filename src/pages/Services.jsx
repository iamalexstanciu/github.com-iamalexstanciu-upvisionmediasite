import React, { useEffect, useState } from "react";
import { Element, scroller } from "react-scroll";
import WebDevelopment from "../assets/services2.jpg";
import WebDevelopment1 from "../assets/services3.jpg";
import WebDevelopment2 from "../assets/services4.jpg";
import WebDevelopment3 from "../assets/services5.jpg";
import ImageReview from "../assets/3d.png"
import "../styling/Services.css";
import json from "../data/reviews.json";

function Services() {
  const [currentPage, setCurrentPage] = useState("page1");
  const [currentReview, setCurrentReview] = useState(json[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

 useEffect(() => {
   const interval = setInterval(() => {
     setCurrentIndex((prevIndex) => (prevIndex + 1) % json.length);
   }, 5000);

   return () => {
     clearInterval(interval);
   };
 }, [json.length]);

 useEffect(() => {
   setCurrentReview(json[currentIndex]);
 }, [currentIndex, json]);

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
            <div className="seo-explanation">
              <h3>What is SEO and why is so important?</h3>
              <p>
                SEO stands for Search Engine Optimization. It is the practice of
                optimizing a website, its content, and its overall online
                presence to improve its visibility in search engine results
                pages (SERPs). The ultimate goal of SEO is to increase organic
                (non-paid) traffic to a website by ranking higher in search
                engines like Google, Bing, and others. SEO boosts website
                visibility on search engines, driving organic traffic. Higher
                visibility means more potential customers, increased
                credibility, and better chances of achieving business goals and
                success.
              </p>
            </div>
            <div className="landing-explanation">
              <h3>
                What is a Landing Page and why is so important for your
                business?
              </h3>
              <p>
                A landing page is a single web page designed to capture and
                convert visitors into potential customers or leads. It serves as
                a focused entry point for a specific marketing campaign or
                offer, guiding users toward a desired action, such as making a
                purchase, signing up, or downloading content. A well-designed
                landing page optimizes user experience, aligns with the
                campaign's message, and encourages conversions, ultimately
                boosting a business's chances of achieving its marketing goals.
              </p>
            </div>
            <div className="mobile-explanation">
              <h3>
                Why is extremely important to have a website mobile responsive?
              </h3>
              <p>
                Mobile responsiveness is vital as it ensures your website adapts
                seamlessly to all screen sizes, from smartphones to tablets and
                beyond. It's like tailoring a single outfit to fit everyone
                perfectly, enhancing user experience and accessibility. A
                responsive site guarantees stunning visuals, effortless
                navigation, and optimal functionality, captivating visitors and
                boosting engagement. Just as a chameleon blends seamlessly into
                diverse environments, your website flexibly harmonizes with any
                device, amplifying reach, and leaving an indelible digital
                impression.
              </p>
            </div>
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
      <Element name="page3" className="page page3">
        
        <div className="page3-container">
          
          <div className="reviews-container">
            <div className="reviews">
              <div className="reviews-map">
                <p>Leaved in date: {currentReview.date}</p>
                <p>Rating: {currentReview.stars}</p>
                <h2>Customer: {currentReview.name}</h2>
                <p>Review: {currentReview.review}</p>
              </div>
            </div>
            <div className="reviews-description">
              <h4>
                This is what customers who have worked with us think of our
                work.
              </h4>
              
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
}

export default Services;
