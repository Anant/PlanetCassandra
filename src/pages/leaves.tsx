import React, { useMemo } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import { IGatsbyImageData } from "gatsby-plugin-image";
import LeafCardGrid from "../layouts/LeafCardGrid";
//@ts-ignore
import { Helmet } from "react-helmet";
interface AllLeavesData {
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
  allApiLeaves: {
    nodes: {
      tags: string[];
      title: string;
      wallabag_created_at: string;
      description: string;
      id: string;
    }[];
  };
}

const Leaves: React.FC<AllLeavesData> = () => {
  const { allApiLeaves, allFile }: AllLeavesData = useStaticQuery(query);
  const cardData = allApiLeaves.nodes.slice(1);
  const images = allFile.nodes;

  const leaves = useMemo(() => {
    return cardData.map((card) => {
      const image = images.find((img) => img.parent.id === card.id);
      return {
        title: card.title,
        date: card.wallabag_created_at,
        description: card.description,
        tags: card.tags,
        thumbnail: image?.childImageSharp?.gatsbyImageData,
      };
    });
  }, [cardData, images]);

  return (
    <Layout>
      <Helmet>
        <title>Leaves - Planet Cassandra</title>
        <meta property="og:image" content="../images/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={"Planet Cassandra"} />
        <meta
          name="keywords"
          content="Cassandra leaves, secondary indexes, query performance, data retrieval, benefits, features"
        />
        <meta
          name="description"
          content="Explore the benefits and features of Cassandra leaves on Planet Cassandra. Learn how Cassandra leaves, also known as secondary indexes, can improve query performance and enable more flexible data retrieval in your Cassandra database applications."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://planetcassandra.org/",
            "@type": "WebPage",
            name: "Leaves - Planet Cassandra",
            keywords:
              "Cassandra leaves, secondary indexes, query performance, data retrieval, benefits, features",
            author: {
              "@type": "Organization",
              name: "Leaves - Planet Cassandra",
            },
          })}
        </script>
        {/* Open Graph */}
        <meta property="og:title" content={"Leaves - Planet Cassandra"} />
        <meta
          property="og:description"
          content="Explore the benefits and features of Cassandra leaves on Planet Cassandra. Learn how Cassandra leaves, also known as secondary indexes, can improve query performance and enable more flexible data retrieval in your Cassandra database applications."
        />
        {/* Other meta tags you may consider adding */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"Leaves - Planet Cassandra"} />
        <meta name="twitter:image" content={"../../images/icon.png"} />
      </Helmet>
      <LeafCardGrid cardData={leaves} />
    </Layout>
  );
};

const query = graphql`
  query LeavesData {
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
    allApiLeaves(limit: 100, sort: { wallabag_created_at: DESC }) {
      nodes {
        tags
        title
        wallabag_created_at
        description
        id
      }
    }
  }
`;

export default Leaves;
