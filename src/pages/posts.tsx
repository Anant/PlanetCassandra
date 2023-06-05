// src/pages/posts.tsx
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import PostCardGrid from "../layouts/PostCardGrid";
import { IGatsbyImageData } from "gatsby-plugin-image";
//@ts-ignore
import { Helmet } from "react-helmet";

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
        <meta name="author" content={"Planet Cassandra"} />
        <meta
          name="keywords"
          content="Planet Cassandra, Cassandra database, Cassandra news, Cassandra tutorials, Cassandra insights"
        />
        <meta
          name="description"
          content="Explore the latest posts on Planet Cassandra, a hub for Cassandra database news, tutorials, and insights. Get expert tips and tricks for using Cassandra in your applications."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://planetcassandra.org/",
            "@type": "WebPage",
            name: "Latest Posts - Planet Cassandra",
            keywords:
              "Planet Cassandra, Cassandra database, Cassandra news, Cassandra tutorials, Cassandra insights",
            author: {
              "@type": "Organization",
              name: "Latest Posts - Planet Cassandra",
            },
          })}
        </script>
        {/* Open Graph */}
        <meta property="og:title" content={"Latest Posts - Planet Cassandra"} />
        <meta
          property="og:description"
          content="Explore the latest posts on Planet Cassandra, a hub for Cassandra database news, tutorials, and insights. Get expert tips and tricks for using Cassandra in your applications."
        />
        {/* Other meta tags you may consider adding */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={"Latest Posts - Planet Cassandra"}
        />
        <meta name="twitter:image" content={"../../images/icon.png"} />
      </Helmet>
      <PostCardGrid cardData={posts} />
    </Layout>
  );
};
export const query = graphql`
  query Posts {
    allWpPost(sort: { date: DESC }, filter: { authorId: { ne: "dXNlcjoy" } }) {
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
