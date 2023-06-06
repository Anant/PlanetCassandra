import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout/Layout";
import NewsCardGrid from "../layouts/NewsCardGrid";
import { IGatsbyImageData } from "gatsby-plugin-image";
//@ts-ignore
import { Helmet } from "react-helmet";
interface TtrsData {
  allFile: {
    nodes: {
      parent: {
        id: string;
        table: string;
      };
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    }[];
  };
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
}

const News: React.FC<TtrsData> = () => {
  const { allFile, allFeedTtrs }: TtrsData = useStaticQuery(query);

  // Filter out nodes with links starting with "https://www.datastax.com"
  const filteredNodes = allFeedTtrs.nodes.filter(
    (node) => !node.link.startsWith("https://www.datastax.com")
  );

  const posts = filteredNodes.map((post) => {
    const image = allFile.nodes.find((img) => img.parent.id === post.id);
    return {
      title: post.title,
      pubDate: post.pubDate,
      link: post.link,
      id: post.id,
      content: post.content,
      author: post.author,
      summary: post.summary,
      thumbnail: image?.childImageSharp?.gatsbyImageData,
    };
  });

  return (
    <Layout>
      <Helmet>
        <title>News - Planet Cassandra</title>
        <meta name="author" content={"Planet Cassandra"} />
        <meta
          name="keywords"
          content="Cassandra news, database updates, NoSQL database community, new features, events, announcements"
        />
        <meta
          name="description"
          content="Stay updated with the latest news and updates on Cassandra database on Planet Cassandra. Get insights on new features, updates, events, and announcements related to Cassandra and the NoSQL database community."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://planetcassandra.org/",
            "@type": "WebPage",
            name: "News - Planet Cassandra",
            keywords:
              "Cassandra news, database updates, NoSQL database community, new features, events, announcements",
            author: {
              "@type": "Organization",
              name: "News - Planet Cassandra",
            },
          })}
        </script>
        {/* Open Graph */}
        <meta property="og:title" content={"News - Planet Cassandra"} />
        <meta
          property="og:description"
          content="Stay updated with the latest news and updates on Cassandra database on Planet Cassandra. Get insights on new features, updates, events, and announcements related to Cassandra and the NoSQL database community."
        />
        <meta
          property="og:image"
          content="https://planetcassandra-stage.netlify.app/static/8715e2d2275d886278d5bf60602d5315/38943/LogoWithText.webp"
        />

        {/* Other meta tags you may consider adding */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"News - Planet Cassandra"} />
        <meta
          name="twitter:description"
          content="Stay updated with the latest news and updates on Cassandra database on Planet Cassandra. Get insights on new features, updates, events, and announcements related to Cassandra and the NoSQL database community."
        />
        <meta
          name="twitter:image"
          content="https://planetcassandra-stage.netlify.app/static/8715e2d2275d886278d5bf60602d5315/38943/LogoWithText.webp"
        />
      </Helmet>
      <NewsCardGrid cardData={posts} />
    </Layout>
  );
};

const query = graphql`
  query TTRSData {
    allFile(filter: { parent: { id: { ne: null } } }) {
      nodes {
        parent {
          ... on FeedTTRS {
            id
          }
        }
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    allFeedTtrs(sort: { pubDate: DESC }) {
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
`;

export default News;
