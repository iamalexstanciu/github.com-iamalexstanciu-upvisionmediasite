import React, { useState } from "react";
import "../styling/NavigationBar.css";
import LogoUpvision from "../assets/logo-upvision.png";
import { Link } from "react-scroll";
import UseScroll from "../data/UseScroll";
export default function NavigationBar() {
  return (
    <div class="frame-3">
      <div class="frame-1">
        <div
          class="buttons-navbar"
          onClick={() => {
            UseScroll("services");
          }}>
          services
        </div>
        <div
          class="buttons-navbar"
          className=""
          onClick={() => {
            UseScroll("aboutUs");
          }}>
          about
        </div>
        <div
          class="buttons-navbar"
          className=""
          onClick={() => {
            UseScroll("clients");
          }}>
          clients
        </div>
        <div
          class="buttons-navbar"
          className=""
          onClick={() => {
            UseScroll("review");
          }}>
          reviews
        </div>
      </div>
      <div class="frame-4">
        <div class="group-1">
          <div class="digital">upvision</div>
          <div class="studio">Media</div>
          <svg
            class="group-12"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
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
        <div class="phone-number">+40 722 567894</div>
        <div class="two-navbar">
          <div class="rectangle-2"></div>
          <div class="three-navbar" onClick={() => { UseScroll("contact") }}>Contact Us</div>
        </div>
      </div>
    </div>
  );
}
