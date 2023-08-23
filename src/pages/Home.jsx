import React from 'react'
import NavigationBar from '../components/NavigationBar';

export default function Home() {
  return (
    <>
      <div class="hero">
        <svg
          class="_04-fragment-of-saturn"
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

        <div class="simple-solutions-for-complex-problems">
          <p>Transform your vision into reality.</p>
        </div>

        <div class="group-8">
          <svg
            class="_001-facebook"
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.8862 3.59152H10.696V0.738884C10.3838 0.700012 9.30995 0.612549 8.05934 0.612549C5.44991 0.612549 3.66238 2.09792 3.66238 4.82796V7.34046H0.782837V10.5295H3.66238V18.5536H7.19283V10.5302H9.95591L10.3945 7.34121H7.19201V5.14417C7.19283 4.22245 7.46708 3.59152 8.8862 3.59152Z"
              fill="white"
            />
          </svg>

          <svg
            class="_003-twitter"
            width="23"
            height="17"
            viewBox="0 0 23 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.6712 2.4297C21.8539 2.75414 20.983 2.9692 20.0751 3.07362C21.0091 2.56893 21.722 1.77584 22.0572 0.819913C21.1863 1.2898 20.2248 1.6217 19.2001 1.80692C18.3732 1.0101 17.1946 0.516602 15.9089 0.516602C13.4145 0.516602 11.4063 2.3489 11.4063 4.59515C11.4063 4.91835 11.4365 5.22912 11.5107 5.52497C7.76489 5.35964 4.45039 3.73493 2.22379 1.25996C1.83506 1.87032 1.60705 2.56893 1.60705 3.32099C1.60705 4.73313 2.4106 5.98491 3.60838 6.70962C2.88449 6.69719 2.17434 6.507 1.57271 6.20742C1.57271 6.21985 1.57271 6.23601 1.57271 6.25217C1.57271 8.23364 3.13449 9.87948 5.18252 10.2586C4.81577 10.3494 4.41605 10.3929 4.00123 10.3929C3.71277 10.3929 3.42157 10.378 3.14822 10.3233C3.732 11.938 5.38856 13.1252 7.3583 13.1637C5.82537 14.2489 3.87898 14.9028 1.77188 14.9028C1.40238 14.9028 1.04799 14.8878 0.693604 14.8468C2.68944 16.0116 5.05478 16.6766 7.60555 16.6766C15.8966 16.6766 20.4295 10.4612 20.4295 5.07373C20.4295 4.89348 20.4226 4.71945 20.413 4.54667C21.3072 3.97236 22.0585 3.25511 22.6712 2.4297Z"
              fill="white"
            />
          </svg>

          <svg
            class="_004-instagram"
            width="23"
            height="21"
            viewBox="0 0 23 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.49836 0.708496H15.74C19.5325 0.708496 22.6079 3.49176 22.6079 6.92392V14.3824C22.6079 17.8146 19.5325 20.5978 15.74 20.5978H7.49836C3.70586 20.5978 0.630371 17.8146 0.630371 14.3824V6.92392C0.630371 3.49176 3.70586 0.708496 7.49836 0.708496ZM15.74 18.7332C18.391 18.7332 20.5475 16.7816 20.5475 14.3824V6.92396C20.5475 4.52482 18.391 2.57318 15.74 2.57318H7.49836C4.84732 2.57318 2.69077 4.52482 2.69077 6.92396V14.3824C2.69077 16.7816 4.84732 18.7332 7.49836 18.7332H15.74Z"
              fill="white"
            />

            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.12476 10.6532C6.12476 7.90726 8.58487 5.68091 11.6192 5.68091C14.6534 5.68091 17.1136 7.90726 17.1136 10.6532C17.1136 13.3992 14.6534 15.6255 11.6192 15.6255C8.58487 15.6255 6.12476 13.3992 6.12476 10.6532ZM8.18515 10.6532C8.18515 12.3662 9.72633 13.7609 11.6192 13.7609C13.512 13.7609 15.0532 12.3662 15.0532 10.6532C15.0532 8.93898 13.512 7.54547 11.6192 7.54547C9.72633 7.54547 8.18515 8.93898 8.18515 10.6532Z"
              fill="white"
            />
            <ellipse
              cx="17.5256"
              cy="5.30795"
              rx="0.732132"
              ry="0.662567"
              fill="white"
            />
          </svg>
         
        </div>

        <NavigationBar />
      </div>
    </>
  );
}
