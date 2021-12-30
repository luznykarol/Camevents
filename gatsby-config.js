const tailwind = require("tailwindcss");
const path = require("path");

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
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        purgeCSSOptions: {
          safelist: {
            deep: [
              /image-full$/,
              /contentImage$/,
              /gatsby-image-wrapper$/,
              /ul$/,
              /contact-slide-enter$/,
              /contact-slide$/,
              /contact-slide-enter-active$/,
              /contact-slide-exit$/,
              /contact-slide-exit-active$/,
              /nav-slide$/,
              /nav-slide-enter$/,
              /nav-slide-enter-active$/,
              /nav-slide-exit$/,
              /nav-slide-exit-active$/,
              /nav__menu$/,
              /markdown-content$/,
              /md-content$/,
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
