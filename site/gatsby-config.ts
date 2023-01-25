import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Concordia Classical Academy`,
    description: `A Classical LCMS School Serving The Mankato Community`,
    siteUrl: `https://www.ccamankato.org`,
    address: `2101 Lor Ray Drive, North Mankato, MN 56003`,
    phone: `507.388.4336`,
    email: `ccamankato@gmail.com`,
    image: `./src/assets/images/logo_no_background.png`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Price", "Product"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: false,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "bq1nuwtx",
        dataset: "production",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-netlify",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-PVQ21YVER2",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/favicon.ico",
        name: `Concordia Classical Academy`,
        short_name: `CCA Mankato`,
        start_url: `/`,
        background_color: `#4d1f34`,
        theme_color: `#4d1f34`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/about/*`,
          `/academics/*`,
          `/admissions/*`,
          `/faith/*`,
          `/support/*`,
          `/contact/`,
          `/events/`,
          `/resources/`,
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-ffmpeg",
    "gatsby-plugin-ffmpeg",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "videos",
        path: "./src/assets/videos/",
      },
      __key: "videos",
    },
  ],
};

export default config;
