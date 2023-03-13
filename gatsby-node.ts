import { GatsbyNode } from 'gatsby';
import { resolve } from 'path';
let getSlug = require("speakingurl")
import { IGatsbyImageData } from 'gatsby-plugin-image';
import fetchThumbnail from './src/utils/fetch-thumbnail';

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
  graphql,
  createNodeId,
  getCache,
}) => {
  const { createPage, createNode, createTypes } = actions;

  //Posts from WP page creation
  //----------------------------------------------------------------------------
  const allPosts: {
    errors?: any;
    data?: {
      allWpPost: {
        nodes: {
          slug: string;
          title: string;
          id: string;
          content: string;
          tags: {
            nodes: {
              name: string;
            }[];
          };
          featuredImage: {
            node: {
              localFile: {
                childImageSharp: {
                  gatsbyImageData: IGatsbyImageData;
                };
              };
            };
          };
        }[];
      };
    };
  } = await graphql(`
    query allPostsQuery {
      allWpPost {
        nodes {
          slug
          title
          id
          content
          tags {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  if (allPosts.errors) {
    console.log(allPosts.errors);
    throw new Error(allPosts.errors);
  }
  if (!allPosts.data) {
    console.log("No data found!");
    return;
  }
  allPosts.data.allWpPost.nodes.forEach(node => {
    createPage({
      path: `/post/${node.slug}`,
      component: resolve(`src/components/Templates/PostSinglePage.tsx`),
      context: {
        id: node.id,
        title: node.title,
        tags: node.tags?.nodes.map(tag => tag.name),
        content: node.content,
        featuredImage: node.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
      },
    });
  });

  //Events
  ////----------------------------------------------------------------------------
  const { createRemoteFileNode } = require("gatsby-source-filesystem")
  const allEvents: {
    errors?: any;
    data?: {
      allAirtable: {
        nodes: {
          id: string;
          table: string;
          data: {
            id: string;
            Title: string;
            Publish_date: string;
            Eventbrite_Description: string;
            Cover_Image: {
              url: string;
              filename: string;
            }[];
          };
        }[];
      };
    };
  } = await graphql(`
    query EventsPageData {
      allAirtable(
        filter: {table: {eq: "Content Production"}, data: {Title: {ne: null}, Publish_date: {ne: null}, Cover_Image: {elemMatch: {url: {ne: null}}}}}
        sort: {data: {Publish_date: DESC}}
      ) {
        nodes {
          table
          id
          data {
            Title
            Publish_date
            Eventbrite_Description
            Cover_Image {
              url
              filename
            }
          }
        }
      }
    }
  `);

  if (allEvents.errors) {
    console.log(allEvents.errors);
    throw new Error(allEvents.errors);
  }
  if (!allEvents.data) {
    console.log("No data found!");
    return;
  }

  allEvents.data.allAirtable.nodes.forEach(node => {
    createPage({
      path: `/event/${getSlug(node.data.Title)}`,
      component: resolve(`src/components/Templates/EventsSinglePage.tsx`),
      context: {
        Title: node.data.Title,
        Publish_date: node.data.Publish_date,
        Eventbrite_Description: node.data.Eventbrite_Description,
        CoverImage: node.data.Cover_Image
      },
    });
  });


  allEvents.data.allAirtable.nodes.forEach(async node => {
    const coverImage = node.data.Cover_Image[0];
    if (!coverImage) {
      console.error(`No cover image found for event: ${node.data.Title}`);
      return;
    }

    const fileNode = await createRemoteFileNode({
      url: coverImage.url,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      getCache
    });
    if (!fileNode) {
      console.error(`Failed to create file node for cover image: ${coverImage.filename}`);
      return;
    }
  });

  //UseCases
  ////----------------------------------------------------------------------------
  const allUseCases: {
    errors?: any;
    data?: {
      allAirtable: {
        nodes: {
          table: string;
          data: {
            Description: string;
            Name: string;
          }
        }[];
      };
    };
  } = await graphql(`
    query UseCasesData {
      allAirtable(filter: { table: { eq: "Company" } }) {
        nodes {
          table
          data {
            Description
            Name
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
      path: `/use-cases/${getSlug(node.data.Name)}`,
      component: resolve(`src/components/Templates/UseCaseSinglePage.tsx`),
      context: {
        Description: node.data.Description,
        Name: node.data.Name
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
      limit: 20
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
    'blog.softwaremill',
    'www.ktexperts',
    'rustyrazorblade.com',
    '/www.an10.io/',
    'itnext.io',
    '/www.an10.io/',
    'baeldung.com',
    '/levelup.gitconnected',
    'cassandra.apache.org/blog',
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
  // const AllNews: {
  //   errors?: any;
  //   data?: {
  //     allFeedTtrs: {
  //       nodes: {
  //         id: string;
  //         link: string;
  //       }[];
  //     };
  //   };
  // } = await graphql(`
  // query NewsPictures {
  //   allFeedTtrs {
  //     nodes {
  //       link
  //       id
  //     }
  //   }
  // }
  // `);
  // //@ts-ignore
  // AllNews.forEach((node, index) => {
  //   setTimeout(() => {
  //     fetchThumbnail(node, createNode, createNodeId, getCache);
  //   }, index * 200);
  // });
  
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
      allApiLeaves(sort: { wallabag_created_at: DESC },limit: 50) {
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