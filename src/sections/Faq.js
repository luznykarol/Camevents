import React, { useState } from "react";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import Question from "@/components/Question";
import htmlSerializer from "../utils/HtmlSerializer";

export default function FAQ({ data }) {
  const { tag, content, title2 } = data.primary;

  const renderTag = tag.text !== "" && (
    <span className="tag tag--dark">{tag.text}</span>
  );
  const renderTitle = title2.text !== "" && (
    <h2 className="text-cam-white uppercase">{title2.text}</h2>
  );

  const renderContent = content.raw.length !== 0 && (
    <div className="text-center font-normal max-w-2xl mx-auto leading-8 text-body-dark mt-6">
      <RichText render={content.raw} htmlSerializer={htmlSerializer} />
    </div>
  );

  const items = data.items;
  const [currentActiveQuestion, setCurrentActiveQuestion] = useState(null);
  return (
    <section className="faq" id="faq">
      <div className="container-sm">
        <div className=" mx-auto">
          <div className="mx-auto text-center mb-18 ">
            {renderTag}
            {renderTitle}
            {renderContent}
          </div>
          <div className="">
            {items.map((item, i) => (
              <Question
                key={i}
                id={i + 1}
                item={item}
                active={i + 1 === currentActiveQuestion}
                toggleQuestion={setCurrentActiveQuestion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export const query = graphql`
  fragment Faq on PrismicPageDataBodyFaq {
    slice_type
    primary {
      title2 {
        text
      }

      content {
        raw
      }
      tag {
        text
      }
      disclaimer {
        text
      }
    }
    items {
      position
      icon
      question {
        text
      }
      answer {
        raw
      }
    }
  }
`;
