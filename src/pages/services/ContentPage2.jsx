import React from "react";
import "../../styling/Page2.css";

import WebDevelopment from "../../assets/services2.jpg";
import WebDevelopment1 from "../../assets/services3.jpg";
import WebDevelopment2 from "../../assets/services4.jpg";
import WebDevelopment3 from "../../assets/services5.jpg";
import ImageReview from "../../assets/3d.png";

function ContentPage2() {
  return (
    <div className="page2-container">
      <article class="card-services-description">
        <div className="image-service-card">
          <img src={WebDevelopment3} alt="" />
        </div>
        <div class="card_content">
          <span class="card_title"> What is SEO and why is so important?</span>
          <p class="card_description">
            {" "}
            SEO stands for Search Engine Optimization. It is the practice of
            optimizing a website, its content, and its overall online presence
            to improve its visibility in search engine results pages (SERPs).
            The ultimate goal of SEO is to increase organic (non-paid) traffic
            to a website by ranking higher in search engines like Google, Bing,
            and others. SEO boosts website visibility on search engines, driving
            organic traffic. Higher visibility means more potential customers,
            increased credibility, and better chances of achieving business
            goals and success.
          </p>
        </div>
      </article>
      <article class="card-services-description">
        <div className="image-service-card">
          <img src={WebDevelopment2} alt="" />
        </div>
        <div class="card_content">
          <span class="card_title">
            {" "}
            What is a Landing Page and why is so important for your business?
          </span>
          <p class="card_description">
            {" "}
            A landing page is a single web page designed to capture and convert
            visitors into potential customers or leads. It serves as a focused
            entry point for a specific marketing campaign or offer, guiding
            users toward a desired action, such as making a purchase, signing
            up, or downloading content. A well-designed landing page optimizes
            user experience, aligns with the campaign's message, and encourages
            conversions, ultimately boosting a business's chances of achieving
            its marketing goals.
          </p>
        </div>
      </article>

      <article class="card-services-description">
        <div className="image-service-card">
          <img src={WebDevelopment1} alt="" />
        </div>
        <div class="card_content">
          <span class="card_title">
            {" "}
            Why is extremely important to have a website mobile responsive?
          </span>
          <p class="card_description">
            {" "}
            Mobile responsiveness is vital as it ensures your website adapts
            seamlessly to all screen sizes, from smartphones to tablets and
            beyond. It's like tailoring a single outfit to fit everyone
            perfectly, enhancing user experience and accessibility. A responsive
            site guarantees stunning visuals, effortless navigation, and optimal
            functionality, captivating visitors and boosting engagement. Just as
            a chameleon blends seamlessly into diverse environments, your
            website flexibly harmonizes with any device, amplifying reach, and
            leaving an indelible digital impression.
          </p>
        </div>
      </article>
    </div>
  );
}

export default ContentPage2;
