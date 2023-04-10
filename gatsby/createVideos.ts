// gatsby/createVideos.ts
import { resolve } from "path";
import { Actions, CreatePagesArgs } from "gatsby";
import getSlug from "speakingurl";

interface CreateVideosArgs {
  createPage: Actions["createPage"];
  graphql: CreatePagesArgs["graphql"];
}

export const createVideos = async ({ createPage, graphql }: CreateVideosArgs) => {
  const allVideos = await getAllVideos(graphql);

  if (allVideos.errors) {
    console.log(allVideos.errors);
    throw new Error(allVideos.errors);
  }
  if (!allVideos.data) {
    console.log("No data found!");
    return;
  }

  allVideos.data.allYoutubeVideo.nodes.forEach((node: { title: string; videoId: any; description: any; localThumbnail: { childImageSharp: { gatsbyImageData: any; }; }; publishedAt: any; }) => {
    createPage({
      path: `/video/${getSlug(node.title)}`,
      component: resolve(`src/components/Templates/YoutubeSinglePage.tsx`),
      context: {
        videoId: node.videoId,
        title: node.title,
        description: node.description,
        thumbnail: node.localThumbnail.childImageSharp.gatsbyImageData,
        date: node.publishedAt,
      },
    });
  });
}
//@ts-ignore
async function getAllVideos(graphql) {
  return await graphql(`
    query Videos {
        allYoutubeVideo {
          nodes {
            videoId
            title
            description
            localThumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
            publishedAt
          }
        }
      }
  `);
}
