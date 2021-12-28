import React from "react";
import { RichText } from "prismic-reactjs";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

const Image = ({ data }) => {
  const { image1 } = data.primary;
  return (
    <section className="fullWidthImage">
      {/* <div className='container-lg'> */}
      <Img
        // style={{
        //   position: 'absolute',
        // }}
        className="rounded-sm"
        // alt={data.primary.image1.alt}
        fluid={image1.fluid}
      />
      {/* </div> */}
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
