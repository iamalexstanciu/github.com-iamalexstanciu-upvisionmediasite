import React from 'react'
import NavigationBar from '../components/NavigationBar';

export default function Home() {
  return (
    <>
      <div className="home-section">
        <svg
          className="_04-fragment-of-saturn"
          width="960"
          height="720"
          viewBox="0 0 960 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_75_40)">
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
                fill-opacity="0.4"
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
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF7A00" stop-opacity="0" />
              <stop offset="1" stop-color="#FF5858" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_75_40"
              x1="551.5"
              y1="204"
              x2="551.5"
              y2="594"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#000F30" />
              <stop offset="1" stop-color="#003099" />
            </linearGradient>
            <clipPath id="clip0_75_40">
              <rect width="960" height="720" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <div className="simple-solutions-for-complex-problems">
          <p>Transform your vision into reality.</p>
        </div>

        <div classNameName="social-media-buttons">
          TO DO WITH BUTTONS SOCIAL MEDIA
        </div>

       
      </div>
    </>
  );
}
