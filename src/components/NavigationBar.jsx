

import React from 'react'
import "../styling/NavigationBar.css"
export default function NavigationBar() {
  return (
    <div>
      <div class="frame-3">
        <div class="frame-1">
          <div class="">кейсы</div>
          <div class="">Контакты</div>
          <div class="">Услуги</div>
          <div class="">Блог</div>
        </div>
        <div class="frame-4">
          <div class="group-1">
            <div class="digital">↧</div>
            <div class="studio">upVisionMedia</div>
            <svg
              class="group-12"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.8538 24.4538L6.4231 33.1691L21.7384 19.123L18.4384 11.5923L21.3154 6.09229L33.4999 33.1691H28.0846L23.8538 24.4538Z"
                fill="#FD633D"
              />
              <path
                d="M4.89999 33.1691H0.5L18.4384 0L20.8076 4.4846L4.89999 33.1691Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div class="frame-2">
          <div class="_996-509-567894">+996 509 567894</div>
          <div class="s">
            <div class="rectangle-s"></div>
            <div class="d">Оставить заявку</div>
          </div>
        </div>
      </div>
    </div>
  );
}
