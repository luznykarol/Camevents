const tailwind = require("tailwindcss");
const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Camevents",
    separator: "|",
    baseTitle: "Camevents",
    author: `@Camevents`,
    lang: "en",
    siteUrl: `https://Camevents.pl`,
    themeColor: "#042428",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-preload-fonts",
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        duration: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          tailwind,
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WH686Q6",
        includeInDevelopment: false,
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        purgeCSSOptions: {
          safelist: {
            deep: [
              /gatsby-image-wrapper$/,
              /ul$/,
              /card-dark$/,
              /card-light$/,
              /table-grid$/,
              /text-node-enter$/,
              /text-node-exit-active$/,
              /text-node-exit$/,
              /text-node-enter-active$/,
              /pricing-card-enter$/,
              /pricing-card-exit-active$/,
              /pricing-card-2-exit-active$/,
              /pricing-card-exit$/,
              /image-node-enter$/,
              /image-node-enter-active$/,
              /image-node-exit$/,
              /image-node-exit-active$/,
              /pricing-card-enter-active$/,
              /pricing-card-2-enter$/,
              /pricing-card-2-exit$/,
              /pricing-card-2-enter-active$/,
              /pricing__content$/,
              /job-content$/,
              /nav-slide$/,
              /nav-slide-enter$/,
              /nav__menu$/,
              /nav-slide-enter-active$/,
              /nav-slide-exit$/,
              /nav-slide-exit-active$/,
              /markdown-content$/,
              /features__img$/,
              /features__img$/,
              /strong$/,
              /em$/,
              /h1$/,
              /h2$/,
              /h3$/,
              /h4$/,
              /h5$/,
              /h6$/,
            ],
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "Camevents",
        linkResolver: require("./src/utils/linkResolver").linkResolver,
        schemas: {
          page: require("./custom_types/page.json"),
          social_media: require("./custom_types/social_media.json"),
          job_offer: require("./custom_types/job_offer.json"),
          header_navigation: require("./custom_types/header_navigation.json"),
          footer_navigation: require("./custom_types/footer_navigation.json"),
          business_type: require("./custom_types/business_type.json"),
          footer_images: require("./custom_types/footer_images.json"),
          author: require("./custom_types/author.json"),
          blog_post: require("./custom_types/blog_post.json"),
          blog_category: require("./custom_types/blog_category.json"),
          category: require("./custom_types/category.json"),
        },
      },
    },
    // {
    //   resolve: "gatsby-plugin-prismic-previews",
    //   options: {
    //     repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
    //   },
    // },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@": path.join(__dirname, "src"),
        "~": path.join(__dirname),
        styles: path.join(__dirname, "src/styles"),
        img: path.join(__dirname, "static/img"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Camevents`,
        short_name: `Camevents`,
        start_url: `/`,
        background_color: `#07172D`,
        theme_color: `#07172D`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
