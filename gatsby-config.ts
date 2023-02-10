const queries = require("./src/utils/algolia")

require("dotenv").config()

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `planetCassandra`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: '2X56L8156U',
        apiKey: '78d8e419d6bbaac52f74189ff5239fdb',
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        //Create auth and add it to ENV file
        url: `https://anantstage.wpengine.com/graphql`,
        type: {
          Post: process.env.NODE_ENV === "development" ? { limit: 20 } : { limit: 500 },
          Page: {
            limit: 0
          }
        }
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        //Add to ENV File
        url: `https://ttrss.anant.systems/public.php?op=rss&id=-4&limit=500&key=k7ojwf5bd4b2e7638ff`,
        name: `TTRS`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            item: ["entry:summary"],
          },
        },
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        //Add to ENV File
        apiKey: `keyyRNiY9jP5OcGBA`,
        tables: [
          {
            baseId: `app0cewpKFiSqkmVe`,
            tableName: `Repos`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        //Add to ENV File
        apiKey: `keyKQYgOjqgVIh48D`,
        tables: [
          {
            baseId: "appKPpuxHmcbNwiY5",
            tableName: `Company`,
          },
          {
            baseId: "appXnvVlKiaI5Qv4A",
            tableName: `Glossary Main Page`,
          },
          {
            baseId: "apppWYJ52GKjoDHHG",
            tableName: `Content Production`,
          },
        ],
      },
    },
  ],
};

export default config;
