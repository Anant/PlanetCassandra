import { GatsbyNode } from "gatsby";
import fetchThumbnail from "./src/utils/fetch-thumbnail";
import { createRedirects } from "./gatsby/createRedirects";
import { createPosts } from "./gatsby/createPosts";
import { createEvents } from "./gatsby/createEvents";
import { createUseCases } from "./gatsby/createUseCases";
import { createTTRSS } from "./gatsby/createTtrss";
import { createLeaves } from "./gatsby/createLeaves";
import { createVideos } from "./gatsby/createVideos";
import { processPictures } from './gatsby/processPictures'


export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  page,
  graphql,
  createNodeId,
  getCache,
}) => {
  const { createPage, createNode, createRedirect } = actions;

  createRedirects(createRedirect);

  await processPictures({ createNode, createNodeId, getCache, graphql });

  await createLeaves({ createPage, graphql });
  await createPosts({ createPage, graphql });
  await createUseCases({ createPage, graphql });
  await createTTRSS({ createPage, graphql });
  await createVideos({ createPage, graphql });
  // await createEvents({ graphql, createNodeId, getCache });
};
