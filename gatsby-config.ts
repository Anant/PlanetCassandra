const queries = require("./src/utils/algolia");

require("dotenv").config();

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
          "AIRTABLE_BASE",
          "AIRTABLE_KEY_2",
          "YOUTUBE_API_KEY",
          "LEAVES_URL",
          "ALGOLIA_ADMIN_KEY",
          "BLOG_POSTS_AIRTABLE_FORM",
          "USE_CASES_AIRTABLE_FORM",
          "RESOURCES_AIRTABLE_FORM",
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
    "gatsby-plugin-postcss",
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
        resetOnBuild: true,
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
        url:
          process.env.NODE_ENV === "development"
            ? process.env.WP_GRAPHQL_DEV
            : process.env.WP_GRAPHQL,
        type: {
          Post:
            process.env.NODE_ENV === "development"
              ? { limit: 500 }
              : { limit: 500 },
          Page: {
            limit: 500,
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
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
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "Airtable",
        imagePath: "data.Attachments",
        name: "downloadedImages",
        type: "array",
        //@ts-ignore
        prepareUrl: (attachment) => (attachment ? attachment.url : null),
      },
    },
    // {
    //   resolve: `gatsby-plugin-remote-images`,
    //   options: {
    //     nodeType: 'allApiEvents',
    //     imagePath: 'edges.node.events',
    //     name: 'downloadedImages',
    //     //@ts-ignore
    //     // prepareUrl: attachment => attachment ? attachment.url : null,
    //   },
    // },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_KEY_1,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE,
            tableName: `Cases`,
            tableView: `Cases_Published`,
            tableLinks: [
              "Case_Company",
              "Case_Function",
              "Case_Industry",
              "Case_Stack",
            ],
          },
          {
            baseId: process.env.AIRTABLE_BASE,
            tableName: `Company`,
            tableLinks: ["Cases"],
          },
          {
            baseId: process.env.AIRTABLE_BASE,
            tableName: `Functions`,
            tableLinks: ["Cases"],
          },
          {
            baseId: process.env.AIRTABLE_BASE,
            tableName: `Industry`,
            tableLinks: ["Cases"],
          },
          {
            baseId: process.env.AIRTABLE_BASE,
            tableName: `Stack`,
            tableLinks: ["Cases"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId: ["UCvP-AXuCr-naAeEccCfKwUA"],
        apiKey: process.env.YOUTUBE_API_KEY, //Add to ENV File
        maxVideos: 50, // Defaults to 50
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        //Add to ENV File
        apiKey: process.env.AIRTABLE_KEY_2,
        tables: [
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
          "Content-Type": "application/json",
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
          wallabag_updated_at: String,
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
          wallabag_updated_at: data.wallabag_updated_at,
          // map any other fields you need from your API here
        }),
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        typePrefix: "api_",
        url: process.env.EVENTS_URL,
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
        name: "events",
        schemaType: {
          id: String,
          global_id: String,
          global_id_lineage: [String],
          author: String,
          status: String,
          date: Date,
          date_utc: Date,
          modified: Date,
          modified_utc: Date,
          url: String,
          rest_url: String,
          title: String,
          description: String,
          excerpt: String,
          slug: String,
          image: {
            url: String,
            id: Number,
            extension: String,
            width: Number,
            height: Number,
            filesize: Number,
          },
          all_day: Boolean,
          start_date: Date,
          start_date_details: {
            year: String,
            month: String,
            day: String,
            hour: String,
            minutes: String,
            seconds: String,
          },
          end_date: Date,
          end_date_details: {
            year: String,
            month: String,
            day: String,
            hour: String,
            minutes: String,
            seconds: String,
          },
          utc_start_date: Date,
          utc_start_date_details: {
            year: String,
            month: String,
            day: String,
            hour: String,
            minutes: String,
            seconds: String,
          },
          utc_end_date: Date,
          utc_end_date_details: {
            year: String,
            month: String,
            day: String,
            hour: String,
            minutes: String,
            seconds: String,
          },
          timezone: String,
          timezone_abbr: String,
          cost: String,
          cost_details: {
            currency_symbol: String,
            currency_code: String,
            currency_position: String,
            values: [String],
          },
          website: String,
          show_map: Boolean,
          show_map_link: Boolean,
          hide_from_listings: Boolean,
          sticky: Boolean,
          featured: Boolean,
          categories: [String],
          tags: [String],
          venue: {
            id: Number,
            status: String,
            date: Date,
            date_utc: Date,
            modified: Date,
            modified_utc: Date,
            url: String,
            venue: String,
            slug: String,
            geo_lat: Number,
            geo_lng: Number,
            show_map: Boolean,
            show_map_link: Boolean,
            global_id: String,
            global_id_lineage: [String],
          },
          organizer: [String],
        },
        responseMap: (data: any) => ({
          id: data.id,
          global_id: data.global_id,
          global_id_lineage: data.global_id_lineage,
          author: data.author,
          status: data.status,
          date: new Date(data.date),
          date_utc: new Date(data.date_utc),
          modified: new Date(data.modified),
          modified_utc: new Date(data.modified_utc),
          url: data.url,
          rest_url: data.rest_url,
          title: data.title,
          description: data.description,
          excerpt: data.excerpt,
          slug: data.slug,
          image: {
            url: data.image.url,
            id: data.image.id,
            extension: data.image.extension,
            width: data.image.width,
            height: data.image.height,
            filesize: data.image.filesize,
          },
          all_day: data.all_day,
          start_date: new Date(data.start_date),
          start_date_details: {
            year: data.start_date_details.year,
            month: data.start_date_details.month,
            day: data.start_date_details.day,
            hour: data.start_date_details.hour,
            minutes: data.start_date_details.minutes,
            seconds: data.start_date_details.seconds,
          },
          end_date: new Date(data.end_date),
          end_date_details: {
            year: data.end_date_details.year,
            month: data.end_date_details.month,
            day: data.end_date_details.day,
            hour: data.end_date_details.hour,
            minutes: data.end_date_details.minutes,
            seconds: data.end_date_details.seconds,
          },
          utc_start_date: new Date(data.utc_start_date),
          utc_start_date_details: {
            year: data.utc_start_date_details.year,
            month: data.utc_start_date_details.month,
            day: data.utc_start_date_details.day,
            hour: data.utc_start_date_details.hour,
            minutes: data.utc_start_date_details.minutes,
            seconds: data.utc_start_date_details.seconds,
          },
          utc_end_date: new Date(data.utc_end_date),
          utc_end_date_details: {
            year: data.utc_end_date_details.year,
            month: data.utc_end_date_details.month,
            day: data.utc_end_date_details.day,
            hour: data.utc_end_date_details.hour,
            minutes: data.utc_end_date_details.minutes,
            seconds: data.utc_end_date_details.seconds,
          },
          timezone: data.timezone,
          timezone_abbr: data.timezone_abbr,
          cost: data.cost,
          cost_details: {
            currency_symbol: data.cost_details.currency_symbol,
            currency_code: data.cost_details.currency_code,
            currency_position: data.cost_details.currency_position,
            values: data.cost_details.values,
          },
          website: data.website,
          show_map: data.show_map,
          show_map_link: data.show_map_link,
          hide_from_listings: data.hide_from_listings,
          sticky: data.sticky,
          featured: data.featured,
          categories: data.categories,
          tags: data.tags,
          venue: {
            id: data.venue.id,
            status: data.venue.status,
            date: new Date(data.venue.date),
            date_utc: new Date(data.venue.date_utc),
            modified: new Date(data.venue.modified),
            modified_utc: new Date(data.venue.modified_utc),
            url: data.venue.url,
            venue: data.venue.venue,
            slug: data.venue.slug,
            geo_lat: data.venue.geo_lat,
            geo_lng: data.venue.geo_lng,
            show_map: data.venue.show_map,
            show_map_link: data.venue.show_map_link,
            global_id: data.venue.global_id,
            global_id_lineage: data.venue.global_id_lineage,
          },
          organizer: data.organizer,
        }),
      },
    },
  ],
};

export default config;
