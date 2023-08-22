import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "./routing";
import Home from "../pages/Home";
import Clients from "../pages/Clients";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Services from "../pages/Services";
import Services2 from "../pages/Services2";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit>
      <Routes location={location}>
        <Route exact path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services-explained" element={<Services2 />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="controlPanel">
      <AnimatedRoutes />
    </div>
  );
}

export default AppRoutes;
