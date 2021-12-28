import React from "react";
import { graphql } from "gatsby";
import Image from "@/sections/Image";
import Faq from "@/sections/Faq";
import ContactForm from "@/sections/ContactForm";
import HalfSection from "@/sections/HalfSection";

const SliceZone = ({ data }) => {
  const sliceComponents = {
    image: Image,
    faq: Faq,
    contact_form: ContactForm,
    halfsection: HalfSection,
  };

  const sliceZoneContent = data.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type];
    if (SliceComponent) {
      return <SliceComponent data={slice} key={`slice-${index}`} />;
    } else {
      return null;
    }
  });

  return <>{sliceZoneContent}</>;
};

export default SliceZone;

export const query = graphql`
  fragment PrismicSlices on PrismicPage {
    data {
      title {
        text
      }
      image {
        url
      }
      description
      body {
        ...Image
        ...Faq
        ...ContactForm
        ...HalfSection
      }
    }
  }
`;
