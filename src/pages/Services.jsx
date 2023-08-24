import React from "react";
import "../styling/Services.css";
import ServicesImage from "../assets/services-image.png";

export default function Services() {
  return (
    <div className="services-section" id="services">
      <h5 className="slogan-down-services">
        Your destination: a website that's not just visited, but experienced.
      </h5>
      <div className="container-content-services">
        <div className="services-left-side">
          <img
            className="services-image"
            src={ServicesImage}
            alt="presentation"
          />
        </div>
        <div className="services-right-side">
          <div class="card1-services card-description-service">
            <div class="square"></div>
            <div class="card-inner">
              Embark on a transformative digital voyage with our cutting-edge
              web development agency. Our journey begins by crafting captivating
              <ins className="orange">landing pages</ins> that captivate your
              audience's attention and leave a lasting impression.{" "}
              
                Through meticulous design and strategic content placement, we
                ensure your brand's unique story takes center stage.
                          </div>
          </div>
          <div class="card2-services card-description-service">
            <div class="square"></div>
            <div class="square"></div>
            <div class="card-inner">
                Navigating the modern online landscape requires adaptability,
          
              which is why we meticulously tailor your website's{" "}
              <ins className="orange">mobile responsiveness.</ins> Whether on a
              smartphone, tablet, or desktop, your site will seamlessly adapt,
              delivering an exceptional user experience that transcends devices.
            </div>
          </div>
          <div class="card3-services card-description-service">
            <div class="square" style={{ display: "none" }}></div>
            <div class="square"></div>
            <div class="card-inner">
              But our journey doesn't end there. We understand the importance of
              visibility in the vast digital expanse. Our{" "}
              <ins className="orange">SEO</ins> expertise ensures your website's
              prominence, employing industry-leading strategies to elevate your
              search engine rankings. By optimizing keywords, enhancing site
              speed, and refining metadata, we pave the path for your business
              to shine amidst the competition.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
