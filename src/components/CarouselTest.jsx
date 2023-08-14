import React from 'react'
import { useState, useRef, useEffect } from "react";
import "../styling/carousel.css";
export default function CarouselTest(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
 

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
        Prev
      </button>
      <button className="next-button" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
}
