// gatsby/createLeaves.ts
import { resolve } from "path";
import { Actions, CreatePagesArgs } from "gatsby";
import { findThreeTagSets } from '../src/utils/findThreeTagSets';
import { findRelatedArticles } from '../src/utils/findRelatedArticles';
let getSlug = require("speakingurl");

interface CreateLeavesArgs {
  createPage: Actions["createPage"];
  graphql: CreatePagesArgs["graphql"];
}

export const createLeaves = async ({ createPage, graphql }: CreateLeavesArgs) => {
  const allLeaves = await getAllLeaves(graphql);

  if (allLeaves.errors) {
    console.log(allLeaves.errors);
    throw new Error(allLeaves.errors);
  }
  if (!allLeaves.data) {
    console.log("No data found!");
    return;
  }
  //@ts-ignore
  allLeaves.data.allApiLeaves.nodes.forEach((node) => {
    // Skip the problematic node
    if (node.preview_picture !== "https://blog.stratio.com/wp-content/uploads/2015/07/link.jpg") {
      const relatedArticles = findRelatedArticles(
        allLeaves.data.allApiLeaves.nodes,
        node
      );
      const tagSets = findThreeTagSets(
        allLeaves.data.allApiLeaves.nodes,
        node
      );
      const images = allLeaves.data?.allFile.nodes;
      createPage({
        path: `/leaf/${getSlug(node.title)}`,
        component: resolve(`src/components/Templates/LeafSinglePage.tsx`),
        context: {
          node,
          relatedArticles,
          tagSets,
          images,
        },
      });
    }
  });
}

//@ts-ignore
async function getAllLeaves(graphql) {
  return await graphql(`
  query Leaves {
    allApiLeaves(
      sort: { wallabag_created_at: DESC }
      limit: 200
      filter: { 
        title: { ne: null },
        domain_name: { 
          ne: "blog.pythian.com"
        }
      }
    ) {
      nodes {
        content
        id
        title
        origin_url
        url
        wallabag_created_at
        published_by
        reading_time
        domain_name
        preview_picture
        tags
        description
      }
    }
    allFile(filter: { parent: { id: { ne: null } } }) {
      nodes {
        parent {
          ... on api_leaves {
            id
          }
        }
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
  `);
}
