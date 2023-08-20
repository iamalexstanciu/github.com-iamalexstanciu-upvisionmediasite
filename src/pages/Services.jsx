import React, { useEffect, useState } from "react";
import { Element, scroller } from "react-scroll";
import WebDevelopment from "../assets/services2.jpg";
import WebDevelopment1 from "../assets/services3.jpg";
import WebDevelopment2 from "../assets/services4.jpg";
import WebDevelopment3 from "../assets/services5.jpg";
import ImageReview from "../assets/3d.png";
import "../styling/Services.css";
import json from "../data/reviews.json";
import ContentPage1 from "./services/ContentPage1";

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
        <ContentPage1 />
        <button className="button-scroll" onClick={scrollToNextPage}>
          ⇓ See More ⇓
        </button>
      </Element>
      <Element name="page2" className="page page2">
        <div className="page2-container">
          <article class="card-services-description">
            <div className="image-service-card">
              <img src={WebDevelopment3} alt="" />
            </div>
            <div class="card_content">
              <span class="card_title">
                {" "}
                What is SEO and why is so important?
              </span>
              <p class="card_description">
                {" "}
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
          </article>
          <article class="card-services-description">
            <div className="image-service-card">
              <img src={WebDevelopment2} alt="" />
            </div>
            <div class="card_content">
              <span class="card_title">
                {" "}
                What is a Landing Page and why is so important for your
                business?
              </span>
              <p class="card_description">
                {" "}
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
          </article>

          <article class="card-services-description">
            <div className="image-service-card">
              <img src={WebDevelopment1} alt="" />
            </div>
            <div class="card_content">
              <span class="card_title">
                {" "}
                Why is extremely important to have a website mobile responsive?
              </span>
              <p class="card_description">
                {" "}
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
          </article>
        </div>
        <button className="button-scroll" onClick={scrollToNextPage}>
          ⇓ See More ⇓
        </button>
      </Element>
      <Element name="page3" className="page page3">
        <div className="page3-container">
          <div className="reviews-container">
            <div className="reviews-description">
              <h4 className="reviews-title">
                This is what customers who have worked with us think of our
                work.
              </h4>
            </div>
            <div class="card-review">
              <div class="stars">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="star">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="star">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="star">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="star">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="star">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>

              <div class="infos">
                <p class="date-time">{currentReview.date}</p>
                <p class="description">{currentReview.review}</p>
              </div>

              <div class="author">— {currentReview.name}</div>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
}

export default Services;
