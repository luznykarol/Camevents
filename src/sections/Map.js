import React from "react";
import { RichText } from "prismic-reactjs";
import { graphql, Link } from "gatsby";

const Map = ({ data }) => {
  const { title2, content } = data.primary;
  return (
    <section className="mapSection py-18" id="mapSection">
      <div className="container-sm">
        <h2 className=" uppercase text-cam-white text-center">{title2.text}</h2>
        <div className="flex items-center justify-between">
          <div className="md-content max-w-md text-cam-white">
            <RichText render={content.raw} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;

export const query = graphql`
  fragment Map on PrismicPageDataBodyMap {
    slice_type
    id
    primary {
      title2 {
        text
      }
      content {
        raw
      }
    }
  }
`;
