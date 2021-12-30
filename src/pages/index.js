import React from "react";
import { graphql } from "gatsby";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

import Seo from "@/components/seo";
import Layout from "@/components/layout";

import SliceZone from "@/components/SliceZone";
import { linkResolver } from "../utils/linkResolver";

const IndexPage = ({ data }) => {
  const document = data.prismicPage.data;

  const seo = {
    title: document.title.text,
    description: document.description,
    image: document.image.url,
  };

  return (
    <Layout>
      <Seo data={seo} />
      <SliceZone data={document.body} />
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    prismicPage(uid: { eq: "home" }) {
      uid
      ...PrismicSlices
    }
  }
`;

export default IndexPage;
