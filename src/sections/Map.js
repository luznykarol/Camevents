import React from "react";
import { RichText } from "prismic-reactjs";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

const Map = ({ data }) => {
  const { image1 } = data.primary;
  return (
    <section className="fullWidthImage">
      <div className="container-lg">
        <div className="flex">
          <div className="">mapa</div>
          {/* 
          <Img
            // style={{
            //   position: 'absolute',
            // }}
            className="rounded-sm block relative"
            // alt={data.primary.image1.alt}
            fluid={image1.fluid}
          /> */}
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
