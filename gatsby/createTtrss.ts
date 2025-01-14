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
  let images = allFeedTtrs.data.allFile.nodes;
  const newsImage = (id: any) => {
    const filteredImages = images.filter(
      (img: any) => img.parent && img.parent.id === id
    );
    const image = filteredImages.length > 0 ? filteredImages[0] : undefined;
    return image?.childrenImageSharp[0]?.gatsbyImageData || undefined;
  };

  // Titles to exclude
  const excludedTitles = [
    "Why We’re Moving to a Source Available License",
    "YugabyteDB Anywhere Incremental Backups 101"
  ];

  // Filter out any nodes with the excluded titles
  const filteredTtrsNodes = allFeedTtrs.data.allFeedTtrs.nodes.filter(
    (node: { title: string }) => !excludedTitles.includes(node.title)
  );

  filteredTtrsNodes.forEach(
    (node: {
      title: any;
      id: any;
      summary: any;
      pubDate: any;
      link: any;
      content: any;
      author: any;
    }) => {
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
          image: newsImage(node.id),
        },
      });
    }
  );
};

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
      allFile(filter: { id: { ne: null } }) {
        nodes {
          name
          childrenImageSharp {
            gatsbyImageData
          }
          parent {
            id
          }
        }
      }
    }
  `);
}
