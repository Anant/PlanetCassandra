import { resolve } from "path";
import { Actions, CreatePagesArgs } from "gatsby";
let getSlug = require("speakingurl");

interface CreateEventsArgs {
  createPage: Actions["createPage"];
  graphql: CreatePagesArgs["graphql"];
}

export const createEvents = async ({
  createPage,
  graphql,
}: CreateEventsArgs) => {
  const allEvents = await getAllEvents(graphql);
  console.log(
    "🚀 ~ file: createEvents.ts:15 ~ allEvents:",
    allEvents.data.allApiEvents.edges
  );
  console.log(
    "🚀 ~ file: createEvents.ts:16 ~ allEventssss:",
    allEvents.data.allApiEvents.edges[0].node.events
  );

  if (allEvents.errors) {
    console.log(allEvents.errors);
    throw new Error(allEvents.errors);
  }
  if (!allEvents.data) {
    console.log("No data found!");
    return;
  }

  allEvents.data.allApiEvents.edges[0].node.events.forEach(
    (node: {
      alternative_id: string;
      author: string;
      date: string;
      description: string;
      title: string;
    }) => {
      createPage({
        path: `/event/${getSlug(node.title)}`,
        component: resolve(`src/components/Templates/EventsSinglePage.tsx`),
        context: {
          id: node.alternative_id,
          title: node.title,
          pubDate: node.date,
          content: node.description,
          author: node.author,
        },
      });
    }
  );
};

async function getAllEvents(graphql: any) {
  return await graphql(`
    query allEventsData {
      allApiEvents {
        edges {
          node {
            events {
              alternative_id
              author
              date
              description
              title
            }
          }
        }
      }
    }
  `);
}
