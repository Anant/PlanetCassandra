import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { Container, Grid, Pagination } from "@mui/material";
import LeafCard from "../components/Cards/LeafCard";

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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const cardData = allApiLeaves.nodes;
  const images = allFile.nodes;
  const totalPages = Math.ceil(cardData.length / itemsPerPage);

  const handlePageChange = (event: any, value: number) => {
    setCurrentPage(value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = cardData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Layout>
      <Container
        maxWidth="xl"
        style={{
          padding: "25px",
        }}
      >
        <Grid container spacing={3}>
          {currentPosts.map((card, index) => {
            const image = images.find((img) => img.parent.id === card.id);
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <LeafCard
                  title={card.title}
                  date={card.wallabag_created_at}
                  description={card.description}
                  tags={card.tags}
                  //@ts-ignore
                  thumbnail={image?.childImageSharp?.gatsbyImageData}
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "30px",
          }}
        >
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            color="primary"
          />
        </Grid>
      </Container>
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
