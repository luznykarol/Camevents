import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const Image = ({ data }) => {
  const { image1 } = data.primary;
  return (
    <section className="fullWidthImage">
      <Img className="image-full" fluid={image1.fluid} />
    </section>
  );
};

export default Image;

export const query = graphql`
  fragment Image on PrismicPageDataBodyImage {
    slice_type
    id
    primary {
      image1 {
        alt
        fluid(maxWidth: 800, imgixParams: { q: 60 }) {
          ...GatsbyPrismicImageFluid_noBase64
        }
      }
    }
  }
`;
