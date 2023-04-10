import { GatsbyNode } from "gatsby";
import fetchThumbnail from "./src/utils/fetch-thumbnail";
import { createRedirects } from "./gatsby/createRedirects";
import { createPosts } from "./gatsby/createPosts";
import { createEvents } from "./gatsby/createEvents";
import { createUseCases } from "./gatsby/createUseCases";
import { createTTRSS } from "./gatsby/createTtrss";
import { createLeaves } from "./gatsby/createLeaves";
import { createVideos } from "./gatsby/createVideos";


export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  page,
  graphql,
  createNodeId,
  getCache,
}) => {
  const { createPage, createNode, deletePage, createRedirect } = actions;

  createRedirects(createRedirect);

  //----------------------------------------------------------------------------
  //Leaves Pictures Processing
  const allLeavesPictures: {
    errors?: any;
    data?: {
      allApiLeaves: {
        nodes: {
          id: string;
          preview_picture: string | null;
          url: string;
          origin_url: string;
        }[];
      };
    };
  } = await graphql(`
    query LeavesPictures {
      allApiLeaves(
        filter: { url: { ne: null } }
        limit: 200
        sort: { wallabag_created_at: DESC }
      ) {
        nodes {
          id
          preview_picture
          url
          origin_url
          wallabag_created_at
        }
      }
    }
  `);
  const failingUrls = [
    'blogs.vmware.com',
    'https://www.how2shout.com/linux/2-ways-to-install-cassandra-on-ubuntu-22-04-lts-jammy/',
    'blog.softwaremill',
    'www.ktexperts',
    'rustyrazorblade.com',
    'https://docs.d2iq.com/mesosphere/dcos/services/cassandra/2.9.0-3.11.6/security/',
    '/www.an10.io/',
    'itnext.io',
    '/www.an10.io/',
    'baeldung.com',
    '/levelup.gitconnected',
    'cassandra.apache.org/blog',
    'Failed to fetch thumbnail for event: https://docs.d2iq.com/mesosphere/dcos/services/cassandra/2.9.0-3.11.6/security/',
    'datanami.com',
    'https://dataedo.com/',
    'https://www.datastax.com/resources/webinar/serverless-functions-datastax-drivers',
    'https://towardsdatascience.com/',
    'https://medium.com/better-programming/our-favorite-engineering-blogs-3d8365b2d871',
    'https://datastation.multiprocess',
    'tobert.github.io',
    'zeppelin.apache.org',
    'https://docs.datastax.com/en/articles/cassandra/cassandrathenandnow.html',
  ];

  const filteredNodes = allLeavesPictures?.data?.allApiLeaves?.nodes.filter(
    (node) => {
      return !failingUrls.some((url) => node.url.includes(url));
    }
  );

  //@ts-ignore
  const thumbnailPromises = filteredNodes.map((node, index) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetchThumbnail(node, createNode, createNodeId, getCache).then(() => {
          resolve(true);
        });
      }, index * 200);
    });
  });

  await Promise.all(thumbnailPromises);

  //----------------------------------------------------------------------------
  //TTRS Pictures Processing
  const AllNews: {
    errors?: any;
    data?: {
      allFeedTtrs: {
        nodes: {
          id: string;
          link: string;
        }[];
      };
    };
  } = await graphql(`
    query NewsPictures {
      allFeedTtrs {
        nodes {
          link
          id
        }
      }
    }
  `);
  const filterednewsNodes = AllNews?.data?.allFeedTtrs?.nodes.filter((node) => {
    return !failingUrls.some((url) => node.link.includes(url));
  });

  //@ts-ignore
  const newsThumbnailPromises = filterednewsNodes.map((node, index) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newNode = {
          id: node.id,
          url: node.link,
          origin_url: node.link,
        };
        fetchThumbnail(newNode, createNode, createNodeId, getCache).then(() => {
          resolve(true);
        });
      }, index * 200);
    });
  });

  await Promise.all(newsThumbnailPromises);

  await createLeaves({ createPage, graphql });
  await createPosts({ createPage, graphql });
  await createUseCases({ createPage, graphql });
  await createTTRSS({ createPage, graphql });
  await createVideos({ createPage, graphql });
  // await createEvents({ graphql, createNodeId, getCache });
};
