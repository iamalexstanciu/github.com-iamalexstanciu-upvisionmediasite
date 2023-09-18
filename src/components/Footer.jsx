import React from "react";
import "../styling/Footer.css";
import Logo from "../assets/logo-upvision.png";
import UseScroll from "../data/UseScroll";

function Footer() {
  return (
    <div className="footer">
      <div className="social">
        <div className="links">
          <div
            className="buttons-footer"
            onClick={() => {
              UseScroll("home");
            }}>
            Home
          </div>
          <div
            className="buttons-footer"
            onClick={() => {
              UseScroll("services");
            }}>
            Services
          </div>
          <div
            className="buttons-footer"
            onClick={() => {
              UseScroll("review");
            }}>
            Reviews
          </div>
          <div
            className="buttons-footer"
            onClick={() => {
              UseScroll("contact");
            }}>
            Contact
          </div>
        </div>
      </div>
      <div className="group-82">
        <img className="logo-footer" src={Logo} alt="upvision media" />

      </div>
      <svg
        className="footer-fragment-of-saturn"
        width="960"
        height="720"
        viewBox="0 0 960 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_75_40)">
          <g filter="url(#filter0_f_75_40)">
            <ellipse
              cx="596"
              cy="265.5"
              rx="183"
              ry="182.5"
              fill="url(#paint0_linear_75_40)"
            />
          </g>
          <g filter="url(#filter1_f_75_40)">
            <path
              d="M383 204L720 287.696V594L383 510.304V204Z"
              fill="url(#paint1_linear_75_40)"
              fillOpacity="0.4"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_75_40"
            x="213"
            y="-117"
            width="766"
            height="765"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="100"
              result="effect1_foregroundBlur_75_40"
            />
          </filter>
          <filter
            id="filter1_f_75_40"
            x="233"
            y="54"
            width="637"
            height="690"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_75_40"
            />
          </filter>
          <linearGradient
            id="paint0_linear_75_40"
            x1="596"
            y1="83"
            x2="596"
            y2="448"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF7A00" stopOpacity="0" />
            <stop offset="1" stopColor="#FF5858" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_75_40"
            x1="551.5"
            y1="204"
            x2="551.5"
            y2="594"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#000F30" />
            <stop offset="1" stopColor="#003099" />
          </linearGradient>
          <clipPath id="clip0_75_40">
            <rect width="960" height="720" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div className="label">© upVisionMedia, 2023.</div>
    </div>
  );
}

export default Footer;
