import React, { useState } from "react";
import "../styling/Reviews.css";
import data from "../js/reviewsfake.json";
import NextIcon from "../assets/right.png";
import PrevIcon from "../assets/left.png";

function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const prevReview = () => {
    if (currentReview > 0) {
      setCurrentReview(currentReview - 1);
    }
  };

  const nextReview = () => {
    if (currentReview < data.length - 1) {
      setCurrentReview(currentReview + 1);
    } else setCurrentReview(0);
  };

  const currReview = data[currentReview];

  return (
    <div className="reviews-section" id="review">
      <div className="quote">“</div>
      <div className="our-clients-speak">Our clients speak</div>
      <div className="description-review">
        Our team consists of highly qualified specialists with international
        experience. Experience in Web Development, Mobile Development, Product
        Management and Design. We are always willing to listen and read what our
        customers have to say about us in order to improve our service day after
        day.
      </div>
      <div className="review-container">
        <div className="image-review">
          <img
            className="review-image"
            src="https://images.unsplash.com/photo-1417733403748-83bbc7c05140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="banner page"
          />
        </div>
        <div className="review-text">
          <div className="text-review">{currReview.review_text}</div>
          <div className="author">
            <h3 className="description2">{currReview.user}</h3>
            <h4 className="description3">{currReview.company}</h4>
          </div>
          <div className="buttons-scroll-reviews">
            <div className="prev-button" onClick={prevReview}>
              <img className="icon-button" src={PrevIcon} alt="back" />
            </div>
            <div className="minus">-</div>
            <div className="next-button" onClick={nextReview}>
              <img className="icon-button" src={NextIcon} alt="next" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
