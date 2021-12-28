import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

const ScrollLink = ({ text, className, href }) => {
  return (
    <button className={className} onClick={() => scrollTo(href)}>
      {text}
    </button>
  );
};

export default ScrollLink;
