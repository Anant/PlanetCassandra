import { createRemoteFileNode } from "gatsby-source-filesystem";

interface Node {
  id: string;
  url: string;
  origin_url: string;
}

const fetchThumbnail = async (
  node: Node,
  createNode: any,
  createNodeId: any,
  getCache: any
) => {
  return new Promise(async (resolve, reject) => {
    let originalUrl = node.url
    if (node.url.includes("youtube.com")) {
      originalUrl = node.origin_url;
    }
    else {
      originalUrl = node.url;
    }

    if (!originalUrl) {
      console.error(`No original URL found for event: ${node.id}`);
      return;
    }

    try {

      const response = await fetch(
        `https://iframe.ly/api/iframely?url=${originalUrl}&api_key=43dbc2d36e2b9a0b35ad8f&iframe=1&omit_script=1`
      );
      const data = await response.json();

      let imageURL;
      if (data.links.thumbnail) {
        imageURL = data.links.thumbnail[0].href;
      } else if (data.links.icon) {
        imageURL = data.links.icon[0].href;
      } else {
        imageURL = "https://i.ibb.co/Bq2J6JT/Static-Thumbnail.png";
      }

      if (imageURL) {
        const fileNode = await createRemoteFileNode({
          url: imageURL,
          parentNodeId: node.id,
          createNode,
          createNodeId,
          getCache,
        });

        if (!fileNode) {
          console.error(
            `Failed to create file node for cover image: ${node.url} - image URL not found`
          );
        }
      } else {
        console.error(
          `Failed to create file node for cover image: ${node.url} - image URL not found`
        );
      }
    } catch (error) {
      //@ts-ignore
      console.error(`Failed to fetch thumbnail for event: ${node.url} with error: ${error.message}`);
    }
    resolve(true);
  });
};

export default fetchThumbnail;
