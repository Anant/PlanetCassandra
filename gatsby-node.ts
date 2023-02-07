import { GatsbyNode } from 'gatsby';
import { resolve } from 'path';
let getSlug = require("speakingurl")

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
  createTypes(typeDefs)
}


export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
  createNodeId,
  getCache,
}) => {
  const { createPage, createNode, createTypes } = actions;


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
        content: node.content
      },
    });
  });

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

  //Events
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

};

