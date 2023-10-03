import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "../styling/Clients.css";
import Project1 from "../assets/project1.jpg";
import Project2 from "../assets/project1.1.jpg";
import Project3 from "../assets/project2.jpg";
import Project4 from "../assets/project2.1.jpg";
import Project5 from "../assets/project3.jpg";
import Project6 from "../assets/project3.1.jpg";

function HorizontalScrollCarousel() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // // Adjust this transformation based on your design
  const x = useTransform(scrollYProgress, [0, 0.6], ["-40%", "50%"]);

  return (
    <div ref={targetRef} className="carousel-container">
      <motion.div
        style={{
          x,
        }}
        className="carousel-track">
        <img
          className="image"
          src={Project1}
          draggable="false"
          alt="upvision media agency"
        />
        <img
          className="image"
          draggable="false"
          src={Project2}
          alt="upvision media agency"
        />
        <img
          className="image"
          src={Project3}
          draggable="false"
          alt="upvision media agency"
        />
        <img
          className="image"
          src={Project4}
          draggable="false"
          alt="upvision media agency"
        />
        <img
          className="image"
          src={Project5}
          draggable="false"
          alt="upvision media agency"
        />
        <img
          className="image"
          src={Project6}
          draggable="false"
          alt="upvision media agency"
        />
      </motion.div>
    </div>
  );
}

function Clients() {
  
  return (
    <div className="clients-section" id="clients">
      <div className="projects-container">
        <div className="our-cases">Our cases</div>
        <HorizontalScrollCarousel />
      </div>
    </div>
  );
}

export default Clients;
