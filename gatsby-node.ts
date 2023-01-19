import { GatsbyNode } from 'gatsby';
import { resolve } from 'path';

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

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  const allPosts: {
    errors?: any;
    data?: {
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
    };
  } = await graphql(`
    query allPostsQuery {
      allWpPost {
        nodes {
          slug
          title
          id
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
        tags: node.tags?.nodes.map(tag => tag.name)
      },
    });
  });
};

