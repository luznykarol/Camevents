const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicPage {
        nodes {
          id
          uid
          lang
          type
          url
        }
      }
    }
  `);

  pages.data.allPrismicPage.nodes.forEach((page) => {
    const url = page.uid + "/";
    createPage({
      path: url,
      component: path.resolve(__dirname, "src/templates/page.js"),
      context: { ...page },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: "eval-source-map",
  });
};
