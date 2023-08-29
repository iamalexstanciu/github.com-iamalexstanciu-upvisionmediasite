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
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            className="input"
            id="name"
            name="name"
            placeholder="You name"
            value={formData.name || ""}
            type="text"
            required
            onChange={handleChange}
          />
          <br />
          <label>Email</label>
          <input
            className="input"
            id="email"
            name="email"
            placeholder="Please, your email address"
            type="email"
            value={formData.email || ""}
            required
            onChange={handleChange}
          />
          <br />
          <label>Message</label>
          <textarea
            className="input"
            id="message"
            name="message"
            placeholder="Let's get in touch "
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <br />
          <button className="submitButton" type="submit">
            {formData.loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
