import React, { useRef } from "react";
import { preloadImages, preloadFonts, clamp, map } from "../js/utils.js";
import LocomotiveScroll from "locomotive-scroll";
import "../styling/Clients.css";
import Project1 from "../assets/project1.jpg";
import Project2 from "../assets/project1.1.jpg";
import Project3 from "../assets/project2.jpg";
import Project4 from "../assets/project2.1.jpg";
import Project5 from "../assets/project3.jpg";
import Project6 from "../assets/project3.1.jpg";
import Project7 from "../assets/project4.png";
import Project8 from "../assets/project4.1.png";

function Clients() {
  const scrollContainerRef = useRef(null);
  // Initialize Locomotive Scroll (horizontal direction)
  document.addEventListener("DOMContentLoaded", function () {
    const lscroll = new LocomotiveScroll({
      el: scrollContainerRef.current, // Use the ref here
      smooth: true,
      direction: "horizontal",
    });

    lscroll.on("scroll", (obj) => {
      for (const key of Object.keys(obj.currentElements)) {
        if (
          obj.currentElements[key].el.classList.contains(
            "gallery__item-imginner"
          )
        ) {
          let progress = obj.currentElements[key].progress;
          const saturateVal =
            progress < 0.5
              ? clamp(map(progress, 0, 0.5, 0, 1), 0, 1)
              : clamp(map(progress, 0.5, 1, 1, 0), 0, 1);
          const brightnessVal =
            progress < 0.5
              ? clamp(map(progress, 0, 0.5, 0, 1), 0, 1)
              : clamp(map(progress, 0.5, 1, 1, 0), 0, 1);
          obj.currentElements[
            key
          ].el.style.filter = `saturate(${saturateVal}) brightness(${brightnessVal})`;
        }
      }
    });
    lscroll.update();

    // Preload images and fonts
    Promise.all([
      preloadImages(".gallery__item-imginner"),
      preloadFonts("vxy2fer"),
    ]).then(() => {
      // Remove loader (loading class)
      document.body.classList.remove("loading");
    });
  });

  return (
    <div className="clients-section" id="clients">
      <main ref={scrollContainerRef} className="data-scroll-container">
        <div class="content">
          <div class="gallery">
            <div class="gallery__text">
              <span
                class="gallery__text-inner"
                data-scroll
                data-scroll-speed="3"
                data-scroll-direction="vertical">
                Our
              </span>
              <span
                data-scroll
                data-scroll-speed="-4"
                data-scroll-direction="vertical"
                class="gallery__text-inner">
                Cases
              </span>
            </div>
            <figure
              class="gallery__item"
              data-scroll
              data-scroll-speed="2"
              data-scroll-direction="vertical">
              <div class="gallery__item-img">
                <div
                  class="gallery__item-imginner"
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-direction="vertical"
                  style={{ backgroundImage: `url(${Project1})` }}></div>
              </div>
              <figcaption class="gallery__item-caption">
                <h2
                  class="gallery__item-title"
                  data-scroll
                  data-scroll-speed="1">
                  Funambulist
                </h2>
                <span class="gallery__item-number">01</span>
                <p class="gallery__item-tags">
                  <span>#house</span>
                  <span>#green</span>
                  <span>#chair</span>
                </p>
                <a class="gallery__item-link">explore</a>
              </figcaption>
            </figure>
            <figure
              class="gallery__item"
              data-scroll
              data-scroll-speed="-2"
              data-scroll-direction="vertical">
              <div class="gallery__item-img">
                <div
                  class="gallery__item-imginner"
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-direction="vertical"
                  style={{ backgroundImage: `url(${Project2})` }}></div>
              </div>
              <figcaption class="gallery__item-caption">
                <h2
                  class="gallery__item-title"
                  data-scroll
                  data-scroll-speed="1">
                  Omophagy
                </h2>
                <span class="gallery__item-number">02</span>
                <p class="gallery__item-tags">
                  <span>#love</span>
                  <span>#hug</span>
                  <span>#people</span>
                </p>
                <a class="gallery__item-link">explore</a>
              </figcaption>
            </figure>
            <figure
              class="gallery__item"
              data-scroll
              data-scroll-speed="2"
              data-scroll-direction="vertical">
              <div class="gallery__item-img">
                <div
                  class="gallery__item-imginner"
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-direction="vertical"
                  style={{ backgroundImage: `url(${Project3})` }}></div>
              </div>
              <figcaption class="gallery__item-caption">
                <h2
                  class="gallery__item-title"
                  data-scroll
                  data-scroll-speed="1">
                  Conniption
                </h2>
                <span class="gallery__item-number">03</span>
                <p class="gallery__item-tags">
                  <span>#hike</span>
                  <span>#nature</span>
                  <span>#rain</span>
                </p>
                <a class="gallery__item-link">explore</a>
              </figcaption>
            </figure>
            <figure
              class="gallery__item"
              data-scroll
              data-scroll-speed="-2"
              data-scroll-direction="vertical">
              <div class="gallery__item-img">
                <div
                  class="gallery__item-imginner"
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-direction="vertical"
                  style={{ backgroundImage: `url(${Project4})` }}></div>
              </div>
              <figcaption class="gallery__item-caption">
                <h2
                  class="gallery__item-title"
                  data-scroll
                  data-scroll-speed="1">
                  Xenology
                </h2>
                <span class="gallery__item-number">04</span>
                <p class="gallery__item-tags">
                  <span>#free</span>
                  <span>#wood</span>
                  <span>#fire</span>
                </p>
                <a class="gallery__item-link">explore</a>
              </figcaption>
            </figure>
            <figure
              class="gallery__item"
              data-scroll
              data-scroll-speed="2"
              data-scroll-direction="vertical">
              <div class="gallery__item-img">
                <div
                  class="gallery__item-imginner"
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-direction="vertical"
                  style={{ backgroundImage: `url(${Project5})` }}></div>
              </div>
              <figcaption class="gallery__item-caption">
                <h2
                  class="gallery__item-title"
                  data-scroll
                  data-scroll-speed="1">
                  Lycanthropy
                </h2>
                <span class="gallery__item-number">05</span>
                <p class="gallery__item-tags">
                  <span>#cloud</span>
                  <span>#lake</span>
                  <span>#frog</span>
                </p>
                <a class="gallery__item-link">explore</a>
              </figcaption>
            </figure>
            <figure
              class="gallery__item"
              data-scroll
              data-scroll-speed="-2"
              data-scroll-direction="vertical">
              <div class="gallery__item-img">
                <div
                  class="gallery__item-imginner"
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-direction="vertical"
                  style={{ backgroundImage: `url(${Project6})` }}></div>
              </div>
              <figcaption class="gallery__item-caption">
                <h2
                  class="gallery__item-title"
                  data-scroll
                  data-scroll-speed="1">
                  Mudlark
                </h2>
                <span class="gallery__item-number">06</span>
                <p class="gallery__item-tags">
                  <span>#tent</span>
                  <span>#flower</span>
                  <span>#love</span>
                </p>
                <a class="gallery__item-link">explore</a>
              </figcaption>
            </figure>
            <figure
              class="gallery__item"
              data-scroll
              data-scroll-speed="2"
              data-scroll-direction="vertical">
              <div class="gallery__item-img">
                <div
                  class="gallery__item-imginner"
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-direction="vertical"
                  style={{ backgroundImage: `url(${Project7})` }}></div>
              </div>
              <figcaption class="gallery__item-caption">
                <h2
                  class="gallery__item-title"
                  data-scroll
                  data-scroll-speed="1">
                  Illywhacker
                </h2>
                <span class="gallery__item-number">07</span>
                <p class="gallery__item-tags">
                  <span>#water</span>
                  <span>#bottle</span>
                  <span>#hand</span>
                </p>
                <a class="gallery__item-link">explore</a>
              </figcaption>
            </figure>
            <figure
              class="gallery__item"
              data-scroll
              data-scroll-speed="-2"
              data-scroll-direction="vertical">
              <div class="gallery__item-img">
                <div
                  class="gallery__item-imginner"
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-direction="vertical"
                  style={{ backgroundImage: `url(${Project8})` }}></div>
              </div>
              <figcaption class="gallery__item-caption">
                <h2
                  class="gallery__item-title"
                  data-scroll
                  data-scroll-speed="1">
                  Disenthral
                </h2>
                <span class="gallery__item-number">08</span>
                <p class="gallery__item-tags">
                  <span>#night</span>
                  <span>#stars</span>
                  <span>#moon</span>
                </p>
                <a class="gallery__item-link">explore</a>
              </figcaption>
            </figure>
            <figure
              class="gallery__item"
              data-scroll
              data-scroll-speed="2"
              data-scroll-direction="vertical">
              <div class="gallery__item-img">
                <div
                  class="gallery__item-imginner"
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-direction="vertical"
                  style={{ backgroundImage: `url(${Project1})` }}></div>
              </div>
              <figcaption class="gallery__item-caption">
                <h2
                  class="gallery__item-title"
                  data-scroll
                  data-scroll-speed="1">
                  Abaya
                </h2>
                <span class="gallery__item-number">09</span>
                <p class="gallery__item-tags">
                  <span>#sun</span>
                  <span>#light</span>
                  <span>#air</span>
                </p>
                <a class="gallery__item-link">explore</a>
              </figcaption>
            </figure>
            <figure
              class="gallery__item"
              data-scroll
              data-scroll-speed="-2"
              data-scroll-direction="vertical">
              <div class="gallery__item-img">
                <div
                  class="gallery__item-imginner"
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-direction="vertical"
                  style={{ backgroundImage: `url(${Project2})` }}></div>
              </div>
              <figcaption class="gallery__item-caption">
                <h2
                  class="gallery__item-title"
                  data-scroll
                  data-scroll-speed="1">
                  Hallux
                </h2>
                <span class="gallery__item-number">10</span>
                <p class="gallery__item-tags">
                  <span>#vital</span>
                  <span>#fog</span>
                  <span>#close</span>
                </p>
                <a class="gallery__item-link">explore</a>
              </figcaption>
            </figure>
            <figure
              class="gallery__item"
              data-scroll
              data-scroll-speed="2"
              data-scroll-direction="vertical">
              <div class="gallery__item-img">
                <div
                  class="gallery__item-imginner"
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-direction="vertical"
                  style={{ backgroundImage: `url(${Project3})` }}></div>
              </div>
              <figcaption class="gallery__item-caption">
                <h2
                  class="gallery__item-title"
                  data-scroll
                  data-scroll-speed="1">
                  Lablab
                </h2>
                <span class="gallery__item-number">11</span>
                <p class="gallery__item-tags">
                  <span>#cover</span>
                  <span>#bed</span>
                  <span>#window</span>
                </p>
                <a class="gallery__item-link">explore</a>
              </figcaption>
            </figure>
            <figure
              class="gallery__item"
              data-scroll
              data-scroll-speed="-2"
              data-scroll-direction="vertical">
              <div class="gallery__item-img">
                <div
                  class="gallery__item-imginner"
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-direction="vertical"
                  style={{ backgroundImage: `url(${Project4})` }}></div>
              </div>
              <figcaption class="gallery__item-caption">
                <h2
                  class="gallery__item-title"
                  data-scroll
                  data-scroll-speed="1">
                  Momisom
                </h2>
                <span class="gallery__item-number">12</span>
                <p class="gallery__item-tags">
                  <span>#sad</span>
                  <span>#mouth</span>
                  <span>#tear</span>
                </p>
                <a class="gallery__item-link">explore</a>
              </figcaption>
            </figure>
            <div class="gallery__text">
              <span
                class="gallery__text-inner"
                data-scroll
                data-scroll-speed="-4"
                data-scroll-direction="vertical">
                Daria
              </span>
              <span
                data-scroll
                data-scroll-speed="3"
                data-scroll-direction="vertical"
                class="gallery__text-inner">
                Gaita
              </span>
            </div>
          </div>
        </div>
      </main>
      <svg class="cursor" width="20" height="20" viewBox="0 0 20 20">
        <circle class="cursor__inner" cx="10" cy="10" r="5" />
      </svg>
    </div>
  );
}

export default Clients;
