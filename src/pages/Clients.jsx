import React, { useEffect, useRef, useState } from "react";
import "../styling/Clients.css";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project1.1.png";
import Project3 from "../assets/project2.png";
import Project4 from "../assets/project2.1.png";
import Project5 from "../assets/project3.png";
import Project6 from "../assets/project3.1.png";


function Clients() {
  const [mouseDownAt, setMouseDownAt] = useState(-45);
  const [prevPercentage, setPrevPercentage] = useState(0);

  const trackRef = useRef(null);

  const handleOnDown = (e) => setMouseDownAt(e.clientX);

  const handleOnUp = () => {
    setMouseDownAt(0);
    //Added this 2 lines to fix the Nan issue of trackRef.current.dataset.percentage;
    //setPrevPercentage(trackRef.current.dataset.percentage); replaced
    const newPercentage = trackRef.current.dataset.percentage;
    setPrevPercentage(
      isNaN(parseFloat(newPercentage)) ? 0 : parseFloat(newPercentage)
    );
  };

  const handleOnMove = (e) => {
    if (mouseDownAt === 0) return;
    console.log({ mouseDownAt, prevPercentage });
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

  //intersection observer
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const images = entry.target.getElementsByClassName("image");
          for (const image of images) {
            image.classList.add("animate");
          }
        } else {
          const images = entry.target.getElementsByClassName("image");
          for (const image of images) {
            image.classList.remove("animate");
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="clients-section" id="clients">
      <div className="our-cases">Our cases</div>
      <div className="description-clients">
        These are some examples of projects in which we have put all our
        professionalism and passion.
      </div>
      <div className="projects-container" ref={sectionRef}>
        <div
          id="image-track"
          ref={trackRef}
          data-mouse-down-at={mouseDownAt}
          data-prev-percentage={prevPercentage}>
          <img className="image" src={Project1} draggable="false" id="img" />
          <img
            className="image"
            draggable="false"
            id="img"
            src={Project2}></img>
          <img id="img" className="image" src={Project3} draggable="false" />{" "}
          <img id="img" className="image" src={Project4} draggable="false" />{" "}
          <img id="img" className="image" src={Project5} draggable="false" />
          <img id="img" className="image" src={Project6} draggable="false" />
        </div>
      </div>
    </div>
  );
}

export default Clients;
