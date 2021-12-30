import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const Image = ({ data }) => {
  const { image1 } = data.primary;

  console.log(image1);
  return (
    <section className="relative fullWidthImage overflow-hidden">
      <div className="flex flex-col justify-end items-center h-full">
        {/* <div
          className="image-full"
          style={{ backgroundImage: `url(${image1.fluid.src})` }}></div> */}

        <Img
          style={{
            position: "absolute",
          }}
          className="image-full"
          fluid={image1.fluid}
        />
        <div className="container-xs">
          <h1 className="relative z-1 text-cam-white text-center uppercase">
            Dołącz do najlepszego zespołu cam models
          </h1>
        </div>
      </div>
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
        fluid(maxWidth: 1980, imgixParams: { q: 80 }) {
          ...GatsbyPrismicImageFluid_noBase64
        }
      }
    }
  }
`;
