import * as React from "react";
import {
  withPrismicUnpublishedPreview,
  componentResolverFromMap,
} from "gatsby-plugin-prismic-previews";

import Layout from "@/components/layout";
import Seo from "@/components/seo";

import { linkResolver } from "@/utils/linkResolver";

// Update the path to your Pages and Templates
import PageTemplate from "@/templates/page";

const NotFoundPage = () => (
  <Layout>
    <Seo data={{ title: "404: Not found" }} />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default withPrismicUnpublishedPreview(NotFoundPage, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
    componentResolver: componentResolverFromMap({
      page: PageTemplate,
    }),
  },
]);
