import React from "react";
import { RichText } from "prismic-reactjs";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

const HalfSection = ({ data }) => {
  const { image1, title2, content } = data.primary;

  return (
    <section className="halfSection py-18" id="halfSection">
      <div className="container-sm">
        <div className="mx-auto text-center mb-18 ">
          <h2 className="uppercase text-cam-white text-center">
            {title2.text}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md-content md:mr-6 md:max-w-md text-cam-white">
            <RichText render={content.raw} />
          </div>
          <Img
            // style={{
            //   position: 'absolute',
            // }}
            className="mt-6 md:mt-0 w-full max-w-xs rounded-lg block relative"
            // alt={data.primary.image1.alt}
            fluid={image1.fluid}
          />
        </div>
      </div>
    </section>
  );
};

export default HalfSection;

export const query = graphql`
  fragment HalfSection on PrismicPageDataBodyHalfsection {
    slice_type
    id
    primary {
      title2 {
        text
      }
      content {
        raw
      }
      image1 {
        alt
        fluid(maxWidth: 800, imgixParams: { q: 60 }) {
          ...GatsbyPrismicImageFluid_noBase64
        }
      }
    }
  }
`;
