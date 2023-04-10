// gatsby/processPictures.ts
import { CreatePagesArgs } from "gatsby";
import fetchThumbnail from '../src/utils/fetch-thumbnail'

interface ProcessPicturesArgs {
  createNode: CreatePagesArgs["actions"]["createNode"];
  createNodeId: CreatePagesArgs["createNodeId"];
  getCache: CreatePagesArgs["getCache"];
  graphql: CreatePagesArgs["graphql"];
}

export const processPictures = async ({ createNode, createNodeId, getCache, graphql }: ProcessPicturesArgs) => {
  const allLeavesPictures = await getAllLeavesPictures(graphql);

  if (allLeavesPictures.errors) {
    console.log(allLeavesPictures.errors);
    throw new Error(allLeavesPictures.errors);
  }

  if (!allLeavesPictures.data) {
    console.log("No data found!");
    return;
  }

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
    (node: { url: string | string[]; }) => {
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

  const AllNews = await getAllNewsPictures(graphql);

  if (AllNews.errors) {
    console.log(AllNews.errors);
    throw new Error(AllNews.errors);
  }

  if (!AllNews.data) {
    console.log("No data found!");
    return;
  }
  const filterednewsNodes = AllNews?.data?.allFeedTtrs?.nodes.filter((node: { link: string | string[]; }) => {
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
}
//@ts-ignore
async function getAllLeavesPictures(graphql) {
    return await graphql(`
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
  }
  
//@ts-ignore
async function getAllNewsPictures(graphql) {
    return await graphql(`
      query NewsPictures {
        allFeedTtrs {
          nodes {
            link
            id
          }
        }
      }
    `);
  }
