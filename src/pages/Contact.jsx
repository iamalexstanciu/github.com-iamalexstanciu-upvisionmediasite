import React, { useState } from "react";
import * as emailjs from "@emailjs/browser";
import "../styling/Contact.css";
import { contactConfig } from "../js/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertMessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (res) => {
          console.log("🚀 ~ file: Contact.jsx:36 ~ handleSubmit ~ res:", res);
          setFormData({
            loading: false,
            alertMessage:
              "Thank you for the message, we'll answer as soon as possible! Have a nice day!",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormData({
            alertMessage: `Failed to send!, ${error.message}`,
            variant: "error",
            show: true,
          });
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-section" id="contact">
      <div className="let-s-talk">Let’s talk</div>
      <div className="description">
        Do you want to take your business to another level by having 100% online
        exposure? Write to us and we will get in touch to find the best solution
        made especially for you.
      </div>

      <div className="form-container">
        <form class="contact-form row">
          <div class="form-field col x-50">
            <input
              id="name"
              name="name"
              class="input-text js-input"
              placeholder="You name"
              value={formData.name || ""}
              type="text"
              required
              onChange={handleChange}
            />
          </div>
          <div class="form-field col x-50">
            <input
              id="email"
              class="input-text js-input"
              name="email"
              placeholder="Please, your email address"
              type="email"
              value={formData.email || ""}
              required
              onChange={handleChange}
            />
          </div>
          <div class="form-field col x-100">
            <input
              id="message"
              class="input-text js-input"
              placeholder="Let's get in touch "
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div class="form-field col x-100 align-center">
            <button
              className="submit-btn"
              type="submit"
              value="Submit"
              onClick={handleSubmit}>
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      fill="currentColor"></path>
                  </svg>
                </div>
              </div>
              <span>{formData.loading ? "Sending..." : "Send"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
