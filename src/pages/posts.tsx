// src/pages/posts.tsx
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import PostCardGrid from '../layouts/PostCardGrid';
import { IGatsbyImageData } from 'gatsby-plugin-image';
//@ts-ignore
import { Helmet } from 'react-helmet';

interface Props {
  data: {
    allWpPost: {
      totalCount: number;
      nodes: {
        categories: {
          nodes: {
            name: string;
            slug: string;
            count: number;
          }[];
        };
        author: {
          node: {
            avatar: {
              url: string;
            };
            name: string;
          };
        };
        date: string;
        slug: string;
        title: string;
        featuredImage: {
          node: {
            localFile: {
              childImageSharp: {
                gatsbyImageData: IGatsbyImageData;
              };
            };
          };
        };
        excerpt: string;
      }[];
    };
  };
}

const Posts: React.FC<Props> = (props: Props) => {
  const { data } = props;
  const posts = data.allWpPost.nodes as any;
  return (
    <Layout>
      <Helmet>
        <title>Latest Posts - Planet Cassandra</title>
        <meta property="og:image" content="../images/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={'Latest Posts - Planet Cassandra'} />
        <meta name="author" content={'Planet Cassandra'} />
        <meta
          name="keywords"
          content="Planet Cassandra, Cassandra database, Cassandra news, Cassandra tutorials, Cassandra insights"
        />
        <meta
          name="description"
          content="Explore the latest posts on Planet Cassandra, a hub for Cassandra database news, tutorials, and insights. Get expert tips and tricks for using Cassandra in your applications."
        />
        <meta
          property="og:description"
          content="Explore the latest posts on Planet Cassandra, a hub for Cassandra database news, tutorials, and insights. Get expert tips and tricks for using Cassandra in your applications."
        />
      </Helmet>
      <PostCardGrid cardData={posts} />
    </Layout>
  );
};
{
  /* <Helmet>
        <title>{node.title}</title>
        <meta name="description" content={node.description} /> -- chatgpt 
          <meta name="keywords" content={node.tags[0]} /> -- chatgpt
          <meta property="og:description" content={node.description} />
      </Helmet> */
}
export const query = graphql`
  query Posts {
    allWpPost(sort: { date: DESC }) {
      totalCount
      nodes {
        categories {
          nodes {
            name
            slug
            count
          }
        }
        author {
          node {
            avatar {
              url
            }
            name
          }
        }
        date
        slug
        title
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        excerpt
      }
    }
  }
`;

export default Posts;
