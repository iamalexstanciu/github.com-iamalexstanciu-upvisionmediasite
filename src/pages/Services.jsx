import React from "react";
import "../styling/Services.css";
import ServicesImage from "../assets/video-services.webm";

export default function Services() {
  return (
    <div className="services-section" id="services">
      <div className="container-content-services">
        <div className="services-left-side">
          <h5 className="slogan-down-services">
            Your destination: a website that's not just visited, but
            experienced.
          </h5>
          <video
            autoPlay={true}
            loop={true}
            className="services-image"
            src={ServicesImage}
            alt="presentation"
            muted
          />
        </div>
        <div className="services-right-side">
          <div className="cards-services-container">
            <div className="card-layout-services red">
              <p className="tip">
                Embark on a transformative digital voyage with our cutting-edge
                web development agency. Our journey begins by crafting
                captivating
                <span className="highlight">landing pages </span> that captivate
                your audience's attention and leave a lasting impression.
                Through meticulous design and strategic content placement, we
                ensure your brand's unique story takes center stage.
              </p>
            </div>
            <div className="card-layout-services white">
              <p className="tip">
                {" "}
                Navigating the modern online landscape requires adaptability,
                which is why we meticulously tailor your website's{" "}
                <span className="highlight">mobile responsiveness.</span>{" "}
                Whether on a smartphone, tablet, or desktop, your site will
                seamlessly adapt, delivering an exceptional user experience that
                transcends devices.
              </p>
            </div>
            <div className="card-layout-services blue">
              <p className="tip">
                But our journey doesn't end there. We understand the importance
                of visibility in the vast digital expanse. Our{" "}
                <span className="highlight">SEO</span> expertise ensures your
                website's prominence, employing industry-leading strategies to
                elevate your search engine rankings. By optimizing keywords,
                enhancing site speed, and refining metadata, we pave the path
                for your business to shine amidst the competition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
