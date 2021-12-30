import React from "react";
import SlideToggle from "react-slide-toggle";
import { RichText } from "prismic-reactjs";
import htmlSerializer from "@/utils/HtmlSerializer";
import Img from "gatsby-image";

const PillToggle = ({ item, active, toggleQuestion, id }) => {
  const { title2, content, image1 } = item;
  return (
    <SlideToggle
      collapsed
      collapseEvent={active === false && Date.now()}
      expandEvent={active === true && Date.now()}>
      {({ setCollapsibleElement }) => (
        <article
          className="cursor-pointer"
          onClick={() => toggleQuestion(active ? null : id)}>
          <Img
            className="pill-image"
            // alt={data.primary.image1.alt}
            fluid={image1.fluid}
          />
          <div className="z-10 cursor-pointer relative bg-gradient rounded-button py-6 px-4 max-w-s mx-auto">
            <h5
              className="text-center text-h5 leading-6 font-semibold text-cam-white transition-colors duration-300 ease-in-out
              ">
              {title2.text}
            </h5>
            <div ref={setCollapsibleElement}>
              <div className="md-content mt-3 text-lg text-cam-white leading-6">
                <RichText
                  render={content.raw}
                  htmlSerializer={htmlSerializer}
                />
              </div>
            </div>
          </div>
        </article>
      )}
    </SlideToggle>
  );
};

export default PillToggle;
