import React from 'react'
import "../styling/Reviews.css"
import ReviewImage from "../assets/portfolio.jpg"

function Reviews() {
  return (
    <div className="reviews-section" id="review">
      <div className="quote">“</div>
      <div className="our-clients-speak">Our clients speak</div>
      <div className="description">
        Наша команда состоит из высококлассных специалистов с международным
        опытом работы в сфере Web-разработки, мобильной разработки, Product
        менеджмента и дизайна. Мы предоставляем премиум сервис по доступным
        ценам и всегда нацелены на успех наших клиентов.
      </div>
      <h3 className="description2">TextLab CEO</h3>
      <h4 className="description3">Henry Paddington</h4>
      <p className="description4">
        Outstanding experience with the client web development agency! Their
        team showcased exceptional skill in translating our vision into a
        dynamic website. From responsive design to seamless functionality, they
        exceeded our expectations. Effective communication throughout the
        project and a commitment to deadlines made the collaboration smooth.
        Highly recommend their services for anyone seeking top-notch web
        development solutions.
      </p>
      <img className="review-image" src={ReviewImage} />
      <div className="frame-42">
        <div className="prev">Prev</div>
        <svg
          className="ant-design-line-outlined"
          width="109"
          height="40"
          viewBox="0 0 109 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M102.03 19H6.97C6.4365 19 6 19.1 6 19.2222V20.7778C6 20.9 6.4365 21 6.97 21H102.03C102.563 21 103 20.9 103 20.7778V19.2222C103 19.1 102.563 19 102.03 19Z"
            fill="white"
          />
        </svg>

        <div className="next">Next</div>
      </div>
      <div className="quote2">“</div>
    </div>
  );
}

export default Reviews