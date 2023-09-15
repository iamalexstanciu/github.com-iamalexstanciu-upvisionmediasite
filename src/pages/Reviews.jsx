import React from "react";
import "../styling/Reviews.css";
import ReviewImage from "../assets/portfolio1.jpg";

function Reviews() {
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
      <div class="review-container">
        <div class="image-review">
          <img className="review-image" src={ReviewImage} alt="banner page" />
        </div>
        <div className="review-text">
          <div class="text-review">
            Outstanding experience with the client web development agency! Their
            team showcased exceptional skill in translating our vision into a
            dynamic website. From responsive design to seamless functionality,
            they exceeded our expectations. Effective communication throughout
            the project and a commitment to deadlines made the collaboration
            smooth. Highly recommend their services for anyone seeking top-notch
            web development solutions.
          </div>

          <div class="author">
            <h3 className="description2">TextLab CEO</h3>
            <h4 className="description3">Henry Paddington</h4>
          </div>
          <div className="buttons-scroll-reviews">
            <div class="prev-button">Prev</div>
            <div class="minus">-</div>
            <div class="next-button">Next</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
