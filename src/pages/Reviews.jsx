import React, { useState } from "react";
import "../styling/Reviews.css";
import ReviewImage from "../assets/portfolio1.jpg";
import data from "../js/reviewsfake.json";

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
          <img className="review-image" src={ReviewImage} alt="banner page" />
        </div>
        <div className="review-text">
          <div className="text-review">{currReview.review_text}</div>
          <div className="author">
            <h3 className="description2">{currReview.user}</h3>
            <h4 className="description3">{currReview.company}</h4>
          </div>
          <div className="buttons-scroll-reviews">
            <div className="prev-button" onClick={prevReview}>
              Prev
            </div>
            <div className="minus">-</div>
            <div className="next-button" onClick={nextReview}>
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
