import { resolve } from "path";
import { GatsbyNode, Actions, CreatePagesArgs  } from "gatsby";
import { createRemoteFileNode } from "gatsby-source-filesystem";
let getSlug = require("speakingurl")

interface EventNode {
  id: string;
  table: string;
  data: {
    id: string;
    Title: string;
    Publish_date: string;
    Eventbrite_Description: string;
    Cover_Image: {
      url: string;
      filename: string;
    }[];
  };
}

interface CreateEventsArgs {
  actions: Actions;
  createPage: Actions["createPage"];
  graphql: CreatePagesArgs["graphql"];
  createNodeId: CreatePagesArgs["createNodeId"];
  getCache: CreatePagesArgs["getCache"];
}

export const createEvents = async ({
    actions,
    graphql,
    createNodeId,
    getCache,
  }: CreateEventsArgs) => {
    const { createPage, createNode } = actions;
    const allEvents: {
        errors?: any;
        data?: {
          allAirtable: {
            nodes: {
              id: string;
              table: string;
              data: {
                id: string;
                Title: string;
                Publish_date: string;
                Eventbrite_Description: string;
                Cover_Image: {
                  url: string;
                  filename: string;
                }[];
              };
            }[];
          };
        };
      } = await graphql(`
        query EventsPageData {
          allAirtable(
            filter: {table: {eq: "Content Production"}, data: {Title: {ne: null}, Publish_date: {ne: null}, Cover_Image: {elemMatch: {url: {ne: null}}}}}
            sort: {data: {Publish_date: DESC}}
          ) {
            nodes {
              table
              id
              data {
                Title
                Publish_date
                Eventbrite_Description
                Cover_Image {
                  url
                  filename
                }
              }
            }
          }
        }
      `);
    
      if (allEvents.errors) {
        console.log(allEvents.errors);
        throw new Error(allEvents.errors);
      }
      if (!allEvents.data) {
        console.log("No data found!");
        return;
      }
    
      allEvents.data.allAirtable.nodes.forEach(node => {
        createPage({
          path: `/event/${getSlug(node.data.Title)}`,
          component: resolve(`src/components/Templates/EventsSinglePage.tsx`),
          context: {
            Title: node.data.Title,
            Publish_date: node.data.Publish_date,
            Eventbrite_Description: node.data.Eventbrite_Description,
            CoverImage: node.data.Cover_Image
          },
        });
      });
    
    
      allEvents.data.allAirtable.nodes.forEach(async node => {
        const coverImage = node.data.Cover_Image[0];
        if (!coverImage) {
          console.error(`No cover image found for event: ${node.data.Title}`);
          return;
        }
    
        const fileNode = await createRemoteFileNode({
          url: coverImage.url,
          parentNodeId: node.id,
          createNode,
          createNodeId,
          getCache
        });
        if (!fileNode) {
          console.error(`Failed to create file node for cover image: ${coverImage.filename}`);
          return;
        }
      });
  };