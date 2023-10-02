import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CookieConsent from "react-cookie-consent";
import "./styling/App.css";
import Footer from "./components/Footer";
import { Element } from "react-scroll";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import NavigationBar from "./components/NavigationBar";

export default function App() {
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="I understand!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#1a191a8a" }}
        buttonStyle={{ color: "#4e503b", fontSize: "12px" }}
        expires={150}>
        This website uses cookies to ensure you get the best experience on our
        website.{" "}
        <span style={{ fontSize: "10px", margin: "10px" }}>
          upvisionMedia Agency ©
        </span>
      </CookieConsent>
      <NavigationBar />

      <Element name="home">
        <Home />
      </Element>

      <Element name="services">
        <Services />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="clients">
        <Clients />
      </Element>

      <Element name="reviews">
        <Reviews />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </>
  );
}
