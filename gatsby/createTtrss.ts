// gatsby/createTTRSS.ts
import { resolve } from "path";
import { Actions, CreatePagesArgs } from "gatsby";
let getSlug = require("speakingurl");

interface CreateTTRSSArgs {
  createPage: Actions["createPage"];
  graphql: CreatePagesArgs["graphql"];
}

export const createTTRSS = async ({ createPage, graphql }: CreateTTRSSArgs) => {
  const allFeedTtrs = await getAllFeedTtrs(graphql);

  if (allFeedTtrs.errors) {
    console.log(allFeedTtrs.errors);
    throw new Error(allFeedTtrs.errors);
  }
  if (!allFeedTtrs.data) {
    console.log("No data found!");
    return;
  }

  allFeedTtrs.data.allFeedTtrs.nodes.forEach((node: { title: any; id: any; summary: any; pubDate: any; link: any; content: any; author: any; }) => {
    createPage({
      path: `/news/${getSlug(node.title)}`,
      component: resolve(`src/components/Templates/NewsSinglePage.tsx`),
      context: {
        id: node.id,
        title: node.title,
        summary: node.summary,
        pubDate: node.pubDate,
        link: node.link,
        content: node.content,
        author: node.author,
      },
    });
  });
}
//@ts-ignore
async function getAllFeedTtrs(graphql) {
  return await graphql(`
    query TTRSS {
        allFeedTtrs {
          totalCount
          nodes {
            title
            summary
            pubDate
            link
            id
            content
            author
          }
        }
      }
  `);
}
