import React, { useMemo } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import { IGatsbyImageData } from "gatsby-plugin-image";
import LeafCardGrid from "../layouts/LeafCardGrid";

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
      <LeafCardGrid cardData={leaves} />
    </Layout>
  );
};

const query = graphql`
query LeavesData {
    allFile(filter: {parent: {id: {ne: null}}}) {
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
    allApiLeaves(limit: 100, sort: {wallabag_created_at: DESC}) {
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
