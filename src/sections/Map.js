import React from "react";
import { RichText } from "prismic-reactjs";
import { graphql } from "gatsby";
import MapComponent from "@/components/Map";

const Map = ({ data }) => {
  const { title2, content } = data.primary;

  console.log(process.env.GATSBY_MAP);

  return (
    <section className="mapSection py-18" id="mapSection">
      <div className="container-sm">
        <h2 className=" uppercase text-cam-white text-center">{title2.text}</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <MapComponent
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_MAP}&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{ width: "380px" }}
                className=" rounded-l h-80 w-full mt-6"
              />
            }
            mapElement={
              <div className="rounded-l" style={{ height: `100%` }} />
            }
          />

          <div className="md-content mt-6 md:mt-0 max-w-md text-cam-white">
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
