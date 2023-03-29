import { resolve } from "path";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { Actions, CreatePagesArgs, GatsbyNode } from "gatsby";


interface PostNode {
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
}

interface CreatePostsArgs {
    actions: Actions;
    createPage: Actions["createPage"];
    graphql: CreatePagesArgs["graphql"];
}

export const createPosts = async ({ createPage, graphql }: CreatePostsArgs) => {
 

    const allPosts: {
        errors?: any;
        data?: {
            allWpPost: {
                nodes: PostNode[];
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
};
