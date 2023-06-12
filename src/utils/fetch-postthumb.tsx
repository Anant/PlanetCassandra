import { createRemoteFileNode } from "gatsby-source-filesystem";

interface Node {
  id: string;
  preview_picture: string;
}

const fetchPostThumbnail = async (
  node: Node,
  createNode: any,
  createNodeId: any,
  getCache: any
) => {
  return new Promise(async (resolve, reject) => {
    let imageUrl = node.preview_picture;

    if (!imageUrl) {
      console.warn(`No preview picture found for node: ${node.id}. Using default image.`);
      imageUrl = "https://i.ibb.co/Bq2J6JT/Static-Thumbnail.png";
    }

    try {
      const fileNode = await createRemoteFileNode({
        url: imageUrl, // use the imageUrl directly
        parentNodeId: node.id,
        createNode,
        createNodeId,
        getCache,
      });

      if (!fileNode) {
        console.error(
          `Failed to create file node for cover image: ${imageUrl} - image URL not found`
        );
      }
    } catch (error) {
      //@ts-ignore
      console.error(`Failed to create file node for cover image: ${imageUrl} with error: ${error.message}`);
    }
    resolve(true);
  });
};

export default fetchPostThumbnail;
