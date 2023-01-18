import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `planetCassandra`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        //Create auth and add it to ENV file
        url: `https://anantstage.wpengine.com/graphql`,
        type:{
          Post:{
            limit:5
          },
          Page:{
            limit:0
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
        apiKey: `keywCPmbBc1h5ssPV`,
        tables: [
          {
            baseId: `app0cewpKFiSqkmVe`,
            tableName: `Repos`,
          },
        ],
      },
    },
  ]
};

export default config;
