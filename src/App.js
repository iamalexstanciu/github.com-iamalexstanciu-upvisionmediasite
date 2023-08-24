import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AnimatedCursor from "./js/CustomCursor";
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

      <Footer />
    </>
  );
}
