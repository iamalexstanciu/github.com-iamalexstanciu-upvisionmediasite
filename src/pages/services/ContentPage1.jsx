import React from "react";
import "../../styling/Page1.css";

function ContentPage1() {
  return (
    <div className="page1-container">
      <h2 className="title-page1-services">
        Unveil your business potential with captivating online presence!
      </h2>
      <div className="card-container-services-page1">
        <div class="card-services-page1">
          <div class="card__content-title">
            Increased Visibility
            <div>
              <p className="card_content-p">
                {" "}
                Having a strong online presence provides businesses with a
                platform to gain visibility and reach a larger audience. With
                the right resources and promotion, your company can be easily
                seen by potential customers and those interested in your
                products or services.
              </p>
            </div>
          </div>
        </div>
        <div class="card-services-page1">
          <div class="card__content-title">
            Increased Brand Awareness
            <div>
              <p className="card_content-p">
                {" "}
                Having an online presence allows businesses to reach more people
                and build a stronger brand awareness. With the right content and
                promotion, your business can be seen by more potential customers
                and build a more recognizable brand.
              </p>
            </div>
          </div>
        </div>
        <div class="card-services-page1">
          <div class="card__content-title">
            Increased Trust
            <div>
              <p className="card_content-p">
                {" "}
                People are more likely to trust a business that is visible
                online. An online presence allows businesses to establish a
                reputation and a level of trust with customers, helping to drive
                sales and gain new customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPage1;
