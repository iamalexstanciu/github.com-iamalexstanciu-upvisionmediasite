import React, { useState, useEffect } from "react";
import "../styling/carousel.css";

export default function CarouselTest(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 8000); // Set interval to 8 seconds

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const goToNextSlide = () => {
    if (currentIndex < props.images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const goToPrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(props.images.length - 1);
    }
  };

  return (
    <div className="carousel-container">
      <img
        src={props.images[currentIndex]}
        alt="carousel-slide"
        className="carousel-image"
      />

      <button className="prev-button" onClick={goToPrevSlide}>
        ↧
      </button>
      <button className="next-button" onClick={goToNextSlide} >
        ↥
      </button>
    </div>
  );
}
