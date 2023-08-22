

import React from 'react'
import "../styling/NavigationBar.css"
export default function NavigationBar() {
  return (
    <div className="navbar-container">
      <div class="frame-3">
        <div class="frame-1">
          <div class="">кейсы</div>
          <div class="">Контакты</div>
          <div class="">Услуги</div>
          <div class="">Блог</div>
        </div>
        <div class="frame-4">
          <div class="group-1">
           
            <div class="studio">Media</div>
            <div class="digital">upVision</div>

            <img src='../assets/upvision-media-logo.png'></img>
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
