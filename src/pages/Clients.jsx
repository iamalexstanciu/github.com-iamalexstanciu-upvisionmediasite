import React, { useEffect, useRef, useState } from "react";
import "../styling/Clients.css";
import Project1 from "../assets/project1.jpg";
import Project2 from "../assets/project1.1.jpg";
import Project3 from "../assets/project2.jpg";
import Project4 from "../assets/project2.1.jpg";
import Project5 from "../assets/project3.jpg";
import Project6 from "../assets/project3.1.jpg";

function Clients() {
  // const [mouseDownAt, setMouseDownAt] = useState(45);
  // const [prevPercentage, setPrevPercentage] = useState(-45);

  // const trackRef = useRef(null);

  // const handleOnDown = (e) => setMouseDownAt(e.clientX);

  // const handleOnUp = () => {
  //   setMouseDownAt(45);
  //   const newPercentage = trackRef.current.dataset.percentage;
  //   setPrevPercentage(
  //     isNaN(parseFloat(newPercentage)) ? 0 : parseFloat(newPercentage)
  //   );
  // };

  // const handleOnMove = (e) => {
  //   if (mouseDownAt === 0) return;
  //   // console.log({ mouseDownAt, prevPercentage });
  //   const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
  //   const maxDelta = window.innerWidth / 2;

  //   const percentage = (mouseDelta / maxDelta) * -100;
  //   const nextPercentageUnconstrained = parseFloat(prevPercentage) + percentage;
  //   const nextPercentage = Math.max(
  //     Math.min(nextPercentageUnconstrained, 0),
  //     0
  //   );

  //   trackRef.current.dataset.percentage = nextPercentage;

  //   trackRef.current.animate(
  //     {
  //       transform: `translate(${nextPercentage}%, -50%)`,
  //     },
  //     { duration: 1200, fill: "forwards" }
  //   );

  //   const images = trackRef.current.getElementsByClassName("image");
  //   for (const image of images) {
  //     image.animate(
  //       {
  //         objectPosition: `${100 + nextPercentage}% center`,
  //       },
  //       { duration: 1200, fill: "forwards" }
  //     );
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("mousedown", handleOnDown);
  //   window.addEventListener("touchstart", handleOnDown);
  //   window.addEventListener("mouseup", handleOnUp);
  //   window.addEventListener("touchend", handleOnUp);
  //   window.addEventListener("mousemove", handleOnMove);
  //   window.addEventListener("touchmove", handleOnMove);

  //   return () => {
  //     window.removeEventListener("mousedown", handleOnDown);
  //     window.removeEventListener("touchstart", handleOnDown);
  //     window.removeEventListener("mouseup", handleOnUp);
  //     window.removeEventListener("touchend", handleOnUp);
  //     window.removeEventListener("mousemove", handleOnMove);
  //     window.removeEventListener("touchmove", handleOnMove);
  //   };
  // });

  // //intersection observer
  // const sectionRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         const images = entry.target.getElementsByClassName("image");
  //         for (const image of images) {
  //           image.classList.add("animate");
  //         }
  //       } else {
  //         const images = entry.target.getElementsByClassName("image");
  //         for (const image of images) {
  //           image.classList.remove("animate");
  //         }
  //       }
  //     },
  //     {
  //       root: null,
  //       rootMargin: "0px",
  //       threshold: 0.1,
  //     }
  //   );

  //   const sectionRefCurrent = sectionRef.current; // Capture the current value of sectionRef

  //   if (sectionRefCurrent) {
  //     observer.observe(sectionRefCurrent);
  //   }

  //   return () => {
  //     if (sectionRefCurrent) {
  //       observer.unobserve(sectionRefCurrent);
  //     }
  //   };
  // }, []);

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
         >
          <img
            className="image"
            src={Project1}
            draggable="false"
            id="img"
            alt="upvision media agency"
          />
          <img
            className="image"
            draggable="false"
            id="img"
            alt="upvision media agency"
            src={Project2}></img>
          <img
            id="img"
            className="image"
            src={Project3}
            draggable="false"
            alt="upvision media agency"
          />{" "}
          <img
            id="img"
            className="image"
            src={Project4}
            draggable="false"
            alt="upvision media agency"
          />{" "}
          <img
            id="img"
            className="image"
            src={Project5}
            draggable="false"
            alt="upvision media agency"
          />
          <img
            id="img"
            className="image"
            src={Project6}
            draggable="false"
            alt="upvision media agency"
          />
        </div>
      </div>
    </div>
  );
}

export default Clients;
