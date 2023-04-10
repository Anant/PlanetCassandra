import React, { useMemo, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import { IGatsbyImageData } from "gatsby-plugin-image";
import LeafCardGrid from "../layouts/LeafCardGrid";
import ListingPageGridLayout from "../layouts/ListingPageLayout/ListingPageBaseGrid";
import topTagsFilter from "../utils/topTagsFilter";
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
      id: string;
      title: string;
      url: string;
      content: string;
      description: string;
      domain_name: string;
      preview_picture: string | null;
      reading_time: number | null;
      published_by: string[];
      origin_url: string | null;
      wallabag_created_at: string;
      tags: string[];
    }[];
  };
}

const Leaves: React.FC<AllLeavesData> = () => {
  const { allApiLeaves, allFile }: AllLeavesData = useStaticQuery(query);
  const cardData = allApiLeaves.nodes.slice(1);
  const images = allFile.nodes;

  const { sortedTags } = topTagsFilter({
    data: cardData,
  });

  const [selectedTag, setSelectedTag] = useState("cassandra");

  const leaves = useMemo(() => {
    return cardData.map((card) => {
      const image = images.find((img) => img.parent.id === card.id);
      return {
        ...card,
        thumbnail: image?.childImageSharp?.gatsbyImageData,
      };
    });
  }, [cardData, images]);
  const listingItems = leaves.filter((item) => item.tags.includes(selectedTag));
  return (
    <Layout>
      <ListingPageGridLayout
        args={{
          articles: leaves,
          listingItems,
          sortedTags,
          selectedTag,
          setSelectedTag,
        }}
      />
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
  }
`;

export default Leaves;
