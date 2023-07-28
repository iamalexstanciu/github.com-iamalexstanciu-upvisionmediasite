import React, { useState } from "react";
import * as emailjs from "@emailjs/browser";
import "../styling/Contact.css";
import { contactConfig } from "../js/data";

function Contact() {
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
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name || ""}
          type="text"
          required
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email || ""}
          required
          onChange={handleChange}
        />
        <label>Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required></textarea>
        <button className="submitButton" type="submit">
          {formData.loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
