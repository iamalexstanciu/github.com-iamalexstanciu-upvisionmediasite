// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AnimatedCursor from "./js/CustomCursor";
import "./styling/App.css";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255,255,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <Section id="home">
        <Home />
      </Section>
      <Section id="services">
        <Services />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="clients">
        <Clients />
      </Section>
      <Section id="reviews">
        <Reviews />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
      <Footer />
    </div>
  );
}
