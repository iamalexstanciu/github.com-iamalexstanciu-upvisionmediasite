import React, { useEffect, useRef, useState } from "react";
import "../styling/Clients.css";

function Clients() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);

  const trackRef = useRef(null);

  const handleOnDown = (e) => setMouseDownAt(e.clientX);

  const handleOnUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(trackRef.current.dataset.percentage);
  };

  const handleOnMove = (e) => {
    if (mouseDownAt === 0) return;

    const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = parseFloat(prevPercentage) + percentage;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -45
    );

    trackRef.current.dataset.percentage = nextPercentage;

    trackRef.current.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    const images = trackRef.current.getElementsByClassName("image");
    for (const image of images) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("touchstart", handleOnDown);
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("touchend", handleOnUp);
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchmove", handleOnMove);

    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("touchstart", handleOnDown);
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("touchend", handleOnUp);
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", handleOnMove);
    };
  });
  
  return (
    <div className="clients-section" id="clients">
      <div className="our-cases">Our cases</div>
      <div className="description-clients">
        These are some examples of projects in which we have put all our
        professionalism and passion.
      </div>
      <div className="projects-container">
        <div
          id="image-track"
          ref={trackRef}
          data-mouse-down-at={mouseDownAt}
          data-prev-percentage={prevPercentage}
        >
          <img
            class="image"
            src="https://assets.awwwards.com/awards/sites_of_the_day/2023/08/opal-3.jpg"
            draggable="false"
            id="img"
          />
          <img
            class="image"
            draggable="false"
            id="img"
            src="https://assets.awwwards.com/awards/external/2022/03/621e4a6fbf64c448769373.jpg"
          ></img>
          <img
            id="img"
            class="image"
            src="https://assets.awwwards.com/awards/sites_of_the_day/2016/12/awwwards-sotd-monochrome.jpg"
            draggable="false"
          />{" "}
          <img
            id="img"
            class="image"
            src="https://assets.awwwards.com/awards/sites_of_the_day/2023/09/b-egg-3.jpg"
            draggable="false"
          />{" "}
          <img
            id="img"
            class="image"
            src="https://assets.awwwards.com/awards/element/2023/08/64db58a407e32382517187.jpg"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}

export default Clients;
