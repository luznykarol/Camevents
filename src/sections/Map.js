import React from "react";
import { RichText } from "prismic-reactjs";
import { graphql } from "gatsby";
import Icon from "@/components/Icon";
const Map = ({ data }) => {
  const { title2, content } = data.primary;

  return (
    <section className="mapSection py-18" id="mapSection">
      <div className="container-xs">
        <h2 className="uppercase text-cam-white text-center">{title2.text}</h2>

        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="map-content  mt-6 md:mt-0 max-w-md text-cam-white">
            <a
              href="mailto:kontakt@camevents.pl"
              className=" flex justify-start items-center">
              <Icon
                className="mr-4 w-7 flex items-center justify-center"
                icon="mail"
              />
              kontakt@camevents.pl
            </a>
            <a
              href="tel:+48 501 155 119"
              className="mt-6 flex justify-start items-center">
              <Icon
                className="w-7 flex items-center justify-center mr-4"
                icon="phone"
              />
              +48 501 155 119
            </a>
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
