import React from 'react'
import "../styling/pagesTest.css"
import { useState } from 'react';
import { contactConfig } from "../js/data";
    import * as emailjs from "@emailjs/browser";
export default function PagesTest() {
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
    <div class="editor">
      <span class="editor__tabs">
        <h1>contact.html</h1>
      </span>

      <ul class="editor__lines">
        <li>
          <span class="editor__content monokai-text">
            &lt;<span class="monokai-element">form</span>{" "}
            <span class="monokai-attribute">class</span>=
            <span class="monokai-string">"contact"</span>&gt;
          </span>
        </li>

        <li>
          <span class="editor__content editor__content--indent monokai-text">
            &lt;<span class="monokai-element">label</span>{" "}
            <span class="monokai-attribute">for</span>=
            <span class="monokai-string">"name"</span>&gt;Full name:&lt;/
            <span class="monokai-element">label</span>&gt;
          </span>
        </li>

        <li>
          <span class="editor__content editor__content--indent monokai-text">
            &lt;<span class="monokai-element">input</span>{" "}
            <span class="monokai-attribute">type</span>=
            <span class="monokai-string">"text"</span>{" "}
            <span class="monokai-attribute">value</span>=
            <span class="monokai-string">
              "{" "}
              <input
                type="text"
                placeholder="John Doe"
                class="editor__input-box editor__input-name"
                id="name"
                name="name"
                value={formData.name || ""}
                required
                onChange={handleChange}
              />{" "}
              "
            </span>
            /&gt;
          </span>
        </li>

        <li>
          <span class="editor__content">&nbsp;</span>
        </li>

        <li>
          <span class="editor__content editor__content--indent monokai-text">
            &lt;<span class="monokai-element">label</span>{" "}
            <span class="monokai-attribute">for</span>=
            <span class="monokai-string">"email"</span>&gt;Email Address:&lt;/
            <span class="monokai-element">label</span>&gt;
          </span>
        </li>

        <li>
          <span class="editor__content editor__content--indent monokai-text">
            &lt;<span class="monokai-element">input</span>{" "}
            <span class="monokai-attribute">type</span>=
            <span class="monokai-string">"text"</span>{" "}
            <span class="monokai-attribute">value</span>=
            <span class="monokai-string">
              "{" "}
              <input
                id="email"
                className="editor__input-box editor__input-name"
                name="email"
                placeholder="Email"
                type="email"
                value={formData.email || ""}
                required
                onChange={handleChange}
              />{" "}
              "
            </span>
            /&gt;
          </span>
        </li>

        <li>
          <span class="editor__content">&nbsp;</span>
        </li>

        <li>
          <span class="editor__content editor__content--indent monokai-comment">
            &lt;!-- Your message here --&gt;
          </span>
        </li>

        <li>
          <span class="editor__content editor__content--indent monokai-text">
            &lt;<span class="monokai-element">textarea</span>{" "}
            <span class="monokai-attribute">id</span>=
            <span class="monokai-string">"message"</span>&gt;
            <br />
            <textarea class="editor__input-box editor__textarea"></textarea>
          </span>
        </li>

        <li>
          <span class="editor__content editor__content--indent">
            &lt;/<span class="monokai-element">textarea</span>&gt;
          </span>
        </li>

        <li>
          <span class="editor__content">&nbsp;</span>
        </li>

        <li>
          <span class="editor__content editor__content--indent monokai-text">
            &lt;<span class="monokai-element">input</span>{" "}
            <span class="monokai-attribute">type</span>=
            <span class="monokai-string">"button"</span>{" "}
            <span class="monokai-attribute">onclick</span>=
            <span class="monokai-string">
              "
              <button
                className="editor__input-box editor__input-button"
                type="submit"
                value="Submit"
                onClick={handleSubmit}
              >
                {formData.loading ? "Sending..." : "Send"}
              </button>
              "
            </span>
            /&gt;
          </span>
        </li>

        <li>
          <span class="editor__content monokai-text">
            &lt;/<span class="monokai-element">form</span>&gt;
          </span>
        </li>
      </ul>
    </div>
  );
}
