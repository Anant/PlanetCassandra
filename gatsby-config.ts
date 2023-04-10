const queries = require("./src/utils/algolia")

require("dotenv").config()

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `planetCassandra`,
    siteUrl: `https://planetcassandra.org/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-env-variables",
      options: {
        allowList: [
        "ALGOLIA_APP_ID",
        "ALGOLIA_API_KEY", 
        "WP_GRAPHQL", 
        "GA_TRACKING_ID",
        "AIRTABLE_KEY_1",
        "AIRTABLE_KEY_2",
        "YOUTUBE_API_KEY",
        "LEAVES_URL",
        "ALGOLIA_ADMIN_KEY"
      ],
      },
    },
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
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://anant.us1.list-manage.com/subscribe/post?u=d92549071121954997db2d1e1&amp;id=d05aef7418", // add your MC list endpoint here; see instructions below
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
        resetOnBuild: true
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
        url:process.env.NODE_ENV === "development" ?process.env.WP_GRAPHQL_DEV : process.env.WP_GRAPHQL,
        type: {
          Post: process.env.NODE_ENV === "development" ? { limit: 20 } : { limit: 500 },
          Page: {
            limit: 0
          }
        }
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          process.env.GA_TRACKING_ID, // GA4 property ID
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        //Add to ENV File
        url: `https://ttrss.anant.systems/public.php?op=rss&id=1&is_cat=1&q=&key=f4wpuv5bdcb47d9b5dc`,
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
        apiKey: process.env.AIRTABLE_KEY_1,
        tables: [
          {
            baseId: `appkXvRXvfrCvUx1Y`,
            tableName: `Cases`,
            tableView: `Cases_Published`,
            tableLinks: ['Case_Company'],
          },
          {
            baseId: `appkXvRXvfrCvUx1Y`,
            tableName: `Company`,
            tableLinks: ['Cases'],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId: ['UCvP-AXuCr-naAeEccCfKwUA'],
        apiKey: process.env.YOUTUBE_API_KEY, //Add to ENV File
        maxVideos: 50 // Defaults to 50
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        //Add to ENV File
        apiKey:  process.env.AIRTABLE_KEY_2,
        tables: [
          // {
          //   baseId: "appKPpuxHmcbNwiY5",
          //   tableName: `Company`,
          // },
          // {
          //   baseId: "appXnvVlKiaI5Qv4A",
          //   tableName: `Glossary Main Page`,
          // },
          {
            baseId: "apppWYJ52GKjoDHHG",
            tableName: `Content Production`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        typePrefix: "api_",
        url: process.env.LEAVES_URL,
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },
        name: "leaves",
        // This is where you define the schema for the data you want to fetch
        schemaType: {
          content: String,
          domain_name: String,
          description: String,
          http_status: Number,
          id: String,
          language: String,
          last_sourced_from_wallabag: String,
          mimetype: String,
          preview_picture: String,
          published_at: Date,
          reading_time: Number,
          tags: [String],
          title: String,
          updated_at: String,
          url: String,
          user_email: String,
          user_id: String,
          user_name: String,
          wallabag_created_at: String,
          wallabag_is_archived: Boolean,
          wallabag_updated_at: String
          // add any other fields you need from your API here
        },
        // This is where you map the fields in your API response to the schema you defined
        //@ts-ignore
        responseMap: (data) => ({
          content: data.content,
          domain_name: data.domain_name,
          description: data.description,
          http_status: data.http_status,
          id: data.id,
          language: data.language,
          last_sourced_from_wallabag: data.last_sourced_from_wallabag,
          mimetype: data.mimetype,
          preview_picture: data.preview_picture,
          published_at: data.published_at,
          reading_time: data.reading_time,
          tags: data.tags,
          title: data.title,
          updated_at: data.updated_at,
          url: data.url,
          user_email: data.user_email,
          user_id: data.user_id,
          user_name: data.user_name,
          wallabag_created_at: data.wallabag_created_at,
          wallabag_is_archived: data.wallabag_is_archived,
          wallabag_updated_at: data.wallabag_updated_at
          // map any other fields you need from your API here
        }),
      },
    },
  ],
};

export default config;
