import { GatsbyNode } from 'gatsby';
import { resolve } from 'path';
let getSlug = require("speakingurl")
import { IGatsbyImageData } from 'gatsby-plugin-image';
import fetchThumbnail from './src/utils/fetch-thumbnail';

import { createRedirects } from "./gatsby/createRedirects";
import { createPosts } from "./gatsby/createPosts";
import { createEvents } from "./gatsby/createEvents";
// import { createUseCases } from "./gatsby/createUseCases";
// import { createTtrss } from "./gatsby/createTtrss";
// import { createLeaves } from "./gatsby/createLeaves";
// import { createVideos } from "./gatsby/createVideos";
// import { getSlug } from "./gatsby/getSlug";


interface AllPostsData {
  allWpPost: {
    nodes: {
      slug: string;
      title: string;
      id: string;
      tags: {
        nodes: {
          name: string;
        }[];
      };
    }[];
  };
}

interface AllPostsResult {
  data?: AllPostsData;
  errors?: any;
}

//Needs work i need to alter the schema so airtable gets the localfile and the nodes we create from the images
//@ts-ignore
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
type Airtable implements Node {
  localFile: File @link(by: "id", from: "localFile")
}
`
  const typeDefsleaves = `
type ApiLeaves implements Node {
  localFile: File @link(by: "id", from: "localFile")
}
`
  createTypes(typeDefs)
}


export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  page,
  graphql,
  createNodeId,
  getCache,
}) => {
  const { createPage, createNode, deletePage, createRedirect } = actions;
  
  createRedirects(createRedirect);
  //@ts-ignore
  createPosts({ createPage, graphql });
  //@ts-ignore
  createEvents({ actions, graphql, createNodeId, getCache });

  // await createUseCases({ createPage, graphql, resolve });
  // await createTtrss({ createPage, graphql, resolve });
  // await createLeaves({ createPage, graphql, fetchThumbnail, createNode, createNodeId, getCache, resolve });
  // await createVideos({ createPage, graphql, resolve });


  //UseCases
  ////----------------------------------------------------------------------------
  const allUseCases: {
    errors?: any;
    data?: {
      allAirtable: {
        nodes: {
          table: string;
          data: {
            Case_Description: string;
            Case_Name: string;
            Case_Article_Content: string;
          }
        }[];
      };
    };
  } = await graphql(`
    query UseCasesData {
      allAirtable(filter: { table: { eq: "Cases" } }) {
        nodes {
          table
          data {
            Case_Name
            Case_Description
            Case_Article_Content
          }
        }
      }
    }
  `);

  if (allUseCases.errors) {
    console.log(allUseCases.errors);
    throw new Error(allUseCases.errors);
  }
  if (!allUseCases.data) {
    console.log("No data found!");
    return;
  }
  allUseCases.data.allAirtable.nodes.forEach(node => {
    createPage({
      path: `/use-cases/${getSlug(node.data.Case_Name)}`,
      component: resolve(`src/components/Templates/UseCaseSinglePage.tsx`),
      context: {
        Description: node.data.Case_Description,
        Name: node.data.Case_Name,
        Case_Article_Content: node.data.Case_Article_Content
      },
    });
  });

  //TTRSS
  ////----------------------------------------------------------------------------
  const allFeedTtrs: {
    errors?: any;
    data?: {
      allFeedTtrs: {
        totalCount: number;
        nodes: {
          title: string;
          summary: string;
          pubDate: string;
          link: string;
          id: string;
          content: string;
          author: string;
        }[];
      };
    };
  } = await graphql(`
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

  if (allFeedTtrs.errors) {
    console.log(allFeedTtrs.errors);
    throw new Error(allFeedTtrs.errors);
  }
  if (!allFeedTtrs.data) {
    console.log("No data found!");
    return;
  }
  allFeedTtrs.data.allFeedTtrs.nodes.forEach(node => {
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
        author: node.author
      },
    });
  });

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
      filter: {url: {ne: null}}
      limit: 200
      sort: {wallabag_created_at: DESC}
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
    '/www.an10.io/',
    'itnext.io',
    '/www.an10.io/',
    'baeldung.com',
    '/levelup.gitconnected',
    'cassandra.apache.org/blog',
    'Failed to fetch thumbnail for event: https://docs.d2iq.com/mesosphere/dcos/services/cassandra/2.9.0-3.11.6/security/',
    'datanami.com',
    'https://www.datastax.com/resources/webinar/serverless-functions-datastax-drivers',
    'https://towardsdatascience.com/',
    'https://medium.com/better-programming/our-favorite-engineering-blogs-3d8365b2d871',
    'https://datastation.multiprocess',
    'tobert.github.io',
    'zeppelin.apache.org',
    'https://docs.datastax.com/en/articles/cassandra/cassandrathenandnow.html',
  ];

  const filteredNodes = allLeavesPictures?.data?.allApiLeaves?.nodes.filter(node => {
    return !failingUrls.some(url => node.url.includes(url));
  });

  //@ts-ignore
  filteredNodes.forEach((node, index) => {
    setTimeout(() => {
      fetchThumbnail(node, createNode, createNodeId, getCache);
    }, index * 200);
  });

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
  const filterednewsNodes = AllNews?.data?.allFeedTtrs?.nodes.filter(node => {
    return !failingUrls.some(url => node.link.includes(url));
  });

  //@ts-ignore
  filterednewsNodes.forEach((node, index) => {
    setTimeout(() => {
      const newNode = {
        id: node.id,
        url: node.link,
        origin_url: node.link
      };
      fetchThumbnail(newNode, createNode, createNodeId, getCache);
    }, index * 200);
  });
  
  //----------------------------------------------------------------------------
  //Leaves Single Page 
  const allLeaves: {
    errors?: any;
    data?: {
      allApiLeaves: {
        nodes: {
          id: string;
          title: string;
          description: string;
          content: string;
          wallabag_created_at: string;
          tags: string[];
          preview_picture: string;
        }[];
      };
    };
  } = await graphql(`
    query Leaves {
      allApiLeaves(sort: { wallabag_created_at: DESC },limit: 200) {
        nodes {
          id
          title
          description
          content
          wallabag_created_at
          tags
          preview_picture
        }
      }
    }
  `);

  if (allLeaves.errors) {
    console.log(allLeaves.errors);
    throw new Error(allLeaves.errors);
  }
  if (!allLeaves.data) {
    console.log("No data found!");
    return;
  }
  allLeaves.data.allApiLeaves.nodes.forEach(node => {
    createPage({
      path: `/leaf/${getSlug(node.title)}`,
      component: resolve(`src/components/Templates/LeafSinglePage.tsx`),
      context: {
        id: node.id,
        title: node.title,
        description: node.description,
        content: node.content,
        wallabag_created_at: node.wallabag_created_at,
        tags: node.tags,
        preview_picture: node.preview_picture
      },
    });
  });

  //----------------------------------------------------------------------------
  //Video Single Page
  const allVideos: {
    errors?: any;
    data?: {
      allYoutubeVideo: {
        nodes: {
          videoId: string;
          title: string;
          description: string;
          localThumbnail: any;
          publishedAt: string;
        }[];
      };
    };
  } = await graphql(`
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

  if (allVideos.errors) {
    console.log(allVideos.errors);
    throw new Error(allVideos.errors);
  }

  if (!allVideos.data) {
    console.log("No data found!");
    return;
  }

  allVideos.data.allYoutubeVideo.nodes.forEach(node => {
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


};