
import React from "react";

const Section = ({ id, children }) => (
  <div id={id} className="section">
    {children}
  </div>
);

export default Section;
