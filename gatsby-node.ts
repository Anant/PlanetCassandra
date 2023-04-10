import { GatsbyNode } from "gatsby";
import { resolve } from "path";
let getSlug = require("speakingurl");
import { IGatsbyImageData } from "gatsby-plugin-image";
import fetchThumbnail from "./src/utils/fetch-thumbnail";

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
  const { createTypes } = actions;
  const typeDefs = `
type Airtable implements Node {
  localFile: File @link(by: "id", from: "localFile")
}
`;
  const typeDefsleaves = `
type ApiLeaves implements Node {
  localFile: File @link(by: "id", from: "localFile")
}
`;
  createTypes(typeDefs);
};

export const createPages: GatsbyNode["createPages"] = async ({
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
          };
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
  allUseCases.data.allAirtable.nodes.forEach((node) => {
    createPage({
      path: `/use-cases/${getSlug(node.data.Case_Name)}`,
      component: resolve(`src/components/Templates/UseCaseSinglePage.tsx`),
      context: {
        Description: node.data.Case_Description,
        Name: node.data.Case_Name,
        Case_Article_Content: node.data.Case_Article_Content,
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
  allFeedTtrs.data.allFeedTtrs.nodes.forEach((node) => {
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
  const filterednewsNodes = AllNews?.data?.allFeedTtrs?.nodes.filter((node) => {
    return !failingUrls.some((url) => node.link.includes(url));
  });

  //@ts-ignore
  filterednewsNodes.forEach((node, index) => {
    setTimeout(() => {
      const newNode = {
        id: node.id,
        url: node.link,
        origin_url: node.link,
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
          tags: string[];
          title: string;
          wallabag_created_at: string;
          description: string;
          id: string;
          content: string;
          preview_picture: string;
          url: string;
          origin_url: string;
          reading_time: number;
          domain_name: string;
        }[];
      };
      allFile: {
        nodes: {
          childImageSharp: {
            gatsbyImageData: {
              layout: string;
              backgroundColor: string;
              images: {
                fallback: {
                  src: string;
                  srcSet: string;
                  sizes: string;
                };
                sources: {
                  srcSet: string;
                  type: string;
                  sizes: string;
                }[];
              };
              width: number;
              height: number;
            };
          };
          parent: {
            id: string;
          };
        }[];
      };
    };
  } = await graphql(`
    query Leaves {
      allApiLeaves(
        sort: { wallabag_created_at: DESC }
        limit: 200
        filter: { title: { ne: null } }
      ) {
        nodes {
          content
          id
          title
          origin_url
          url
          wallabag_created_at
          published_by
          reading_time
          domain_name
          preview_picture
          tags
          description
        }
      }
      allFile(filter: { parent: { id: { ne: null } } }) {
        nodes {
          parent {
            ... on api_leaves {
              id
            }
          }
          childImageSharp {
            gatsbyImageData
          }
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
  // this function finds 3 sets of related articles
  interface Article {
    id: string;
    tags: string[];
  }

  interface TagSet {
    tag: string;
    articles: Article[];
  }

  function findThreeTagSets(
    articles: Article[],
    currentArticle: Article,
    maxArticlesPerSet: number = 4
  ): TagSet[] {
    const tagSets: TagSet[] = [];

    const availableTags = currentArticle.tags.slice(0, 3);
    if (availableTags.length < 3) {
      if (!availableTags.includes("spark")) {
        availableTags.push("spark");
      }
      if (!availableTags.includes("kafka") && availableTags.length < 3) {
        availableTags.push("kafka");
      }
    }

    availableTags.forEach((tag) => {
      let articlesWithTag: Article[] = articles
        .filter((article) => {
          return article.id !== currentArticle.id && article.tags.includes(tag);
        })
        .slice(0, maxArticlesPerSet);

      // If there are not enough articles for the current tag, fill with articles tagged with "spark" and "kafka"
      if (articlesWithTag.length < maxArticlesPerSet) {
        const fillTags = ["spark", "kafka"];
        fillTags.forEach((fillTag) => {
          if (articlesWithTag.length < maxArticlesPerSet) {
            const fillArticles = articles
              .filter((article) => {
                return (
                  article.id !== currentArticle.id &&
                  article.tags.includes(fillTag) &&
                  !articlesWithTag.includes(article)
                );
              })
              .slice(0, maxArticlesPerSet - articlesWithTag.length);
            articlesWithTag = articlesWithTag.concat(fillArticles);
          }
        });
      }

      // Create an object with the tag name and related articles array
      const tagSet: TagSet = {
        tag: tag,
        articles: articlesWithTag,
      };
      tagSets.push(tagSet);
    });

    return tagSets;
  }
  // This function finds related articles based on tags, it sorts them from most shared tags.

  interface Article {
    id: string;
    tags: string[];
  }

  function findRelatedArticles(
    articles: Article[],
    currentArticle: Article,
    maxRelated: number = 10
  ): Article[] {
    const currentTags = currentArticle.tags.filter(
      (tag) => tag !== "cassandra"
    );

    const articlesWithCurrentTags = articles.filter((article) => {
      if (article.id === currentArticle.id) return false;

      const articleTags = article.tags.filter((tag) => tag !== "cassandra");
      return currentTags.some((tag) => articleTags.includes(tag));
    });

    const cassandraArticles = articles.filter((article) => {
      if (article.id === currentArticle.id) return false;
      return article.tags.includes("cassandra");
    });

    const relatedArticles = [
      ...new Set(
        [...articlesWithCurrentTags, ...cassandraArticles].map(
          (article) => article.id
        )
      ),
    ]
      .map((id) => {
        return articles.find((article) => article.id === id)!;
      })
      .slice(0, maxRelated);

    const remaining = maxRelated - relatedArticles.length;
    if (remaining > 0) {
      const additionalArticles = articlesWithCurrentTags
        .filter((article) => {
          return !relatedArticles.includes(article);
        })
        .slice(0, remaining);
      relatedArticles.push(...additionalArticles);
    }

    return relatedArticles;
  }

  allLeaves.data.allApiLeaves.nodes.forEach((node) => {
    const relatedArticles = findRelatedArticles(
      // @ts-ignore
      allLeaves.data.allApiLeaves.nodes,
      node
    );
    const tagSets = findThreeTagSets(
      // @ts-ignore
      allLeaves.data.allApiLeaves.nodes,
      node
    );
    const images = allLeaves.data?.allFile.nodes;
    createPage({
      path: `/leaf/${getSlug(node.title)}`,
      component: resolve(`src/components/Templates/LeafSinglePage.tsx`),
      context: {
        node,
        relatedArticles,
        tagSets,
        images,
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

  allVideos.data.allYoutubeVideo.nodes.forEach((node) => {
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
