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
    phone: `507.304.7430`,
    email: `ccamankato@gmail.com`,
    image: `./src/assets/images/logo_no_background.png`,
    keywords: `school, lutheran, classical, education, minnesota, mankato, learning, elementary, middle, private, academy, concordia, religious, LCMS, missouri synod, good shepherd`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TKGTMVP",
        includeInDevelopment: false,
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Price", "Product"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: false,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "videos",
        path: "./src/assets/videos/",
      },
      __key: "videos",
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
            site {
              siteMetadata {
                siteUrl
              }
            }
          }
        `,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://ccamankato.org",
        sitemap: "https://www.ccamankato.org/sitemap-0.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};

export default config;
