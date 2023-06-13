import { resolve } from 'path';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { Actions, CreatePagesArgs, GatsbyNode } from 'gatsby';
import { findThreeTagSets } from '../src/utils/findThreeTagSets';

interface PostNode {
  slug: string;
  title: string;
  id: string;
  content: string;
  excerpt: string;
  date: Date;
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
  
  author: {
    node: {
      name: string;
      avatar: {
        url: string;
      };
    };
  };
}

interface CreatePostsArgs {
  createPage: Actions['createPage'];
  graphql: CreatePagesArgs['graphql'];
}

export const createPosts = async ({ createPage, graphql }: CreatePostsArgs) => {
  const allPostsResult: {
    errors?: any;
    data?: {
      allWpPost: {
        nodes: PostNode[];
      };
    };
  } = await graphql(`
  query allPostsQuery {
    allWpPost(filter: {authorId: {ne: "dXNlcjoy"}}) {
      nodes {
        slug
        title
        id
        authorId
        content
        excerpt
        date
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
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
      }
    }
  }
  `);

  if (allPostsResult.errors) {
    console.log(allPostsResult.errors);
    throw new Error(allPostsResult.errors);
  }
  if (!allPostsResult.data) {
    console.log('No data found!');
    return;
  }

  const allPostNodes = allPostsResult.data.allWpPost.nodes;

  allPostNodes.forEach((node) => {
    const currentPost: any = {
      id: node.id,
      tags: node.tags?.nodes.map((tag) => tag.name),
    };

    const allPosts: any[] = allPostNodes.map((postNode) => ({
      id: postNode.id,
      tags: postNode.tags?.nodes.map((tag) => tag.name),
    }));

    const tagSets = findThreeTagSets(allPosts, currentPost);

    createPage({
      path: `/post/${node.slug}`,
      component: resolve(`src/components/Templates/PostSinglePage.tsx`),
      context: {
        id: node.id,
        name: node.author.node.name,
        date: node.date,
        avatar: node.author.node.avatar.url,
        title: node.title,
        tags: node.tags?.nodes.map((tag) => tag.name),
        content: node.content,
        excerpt: node.excerpt,
        featuredImage:
          node.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
        tagSets: tagSets,
      },
    });
  });
};
