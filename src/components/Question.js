import React from "react";
import SlideToggle from "react-slide-toggle";
import { RichText } from "prismic-reactjs";
import htmlSerializer from "../utils/HtmlSerializer";
import Icon from "@/components/Icon";

export default function Question({ item, active, toggleQuestion, id }) {
  const { question, answer, icon, position } = item;

  const faqClass =
    "faq cursor-pointer relative self-start flex flex-col flex flex-col justify-center items-start mb-6";

  const innerClass =
    "faq__inner rounded-md px-4 md:px-6 relative w-full flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer";
  return (
    <SlideToggle
      collapsed
      collapseEvent={active === false && Date.now()}
      expandEvent={active === true && Date.now()}>
      {({ setCollapsibleElement }) => (
        <article
          className={faqClass}
          onClick={() => toggleQuestion(active ? null : id)}>
          <div className={innerClass}>
            <Icon className="faq-icon" icon={icon} />
            <div className="md:ml-8 pb-4 md:py-6 w-full">
              <h3
                className="text-lg leading-6 font-semibold text-cam-white transition-colors duration-300 ease-in-out
              ">
                {question.text}
              </h3>
              <div ref={setCollapsibleElement}>
                <div className="mt-3 text-lg text-cam-white leading-6">
                  <RichText
                    render={answer.raw}
                    htmlSerializer={htmlSerializer}
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      )}
    </SlideToggle>
  );
}
