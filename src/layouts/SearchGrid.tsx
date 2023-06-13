import React from "react";
import { Container, Grid, Skeleton, Typography } from "@mui/material";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface CardData {
  videoId: string;
  channelTitle: string;
  tags: string[];
  thumbnail: IGatsbyImageData | undefined;
  gatsbyImageData: IGatsbyImageData | null;
  title: string;
  pubDate?: string; // Optional property for NewsCardGrid
  link?: string; // Optional property for NewsCardGrid
  id?: string; // Optional property for NewsCardGrid
  content?: string; // Optional property for NewsCardGrid
  author?: any; // Optional property for NewsCardGrid
  categories?: {
    name: string;
    slug: string;
    count: number;
  }[]; // Optional property for PostCardGrid
  date?: string; // Optional property for PostCardGrid
  slug?: string; // Optional property for PostCardGrid
  featuredImage?: {
    node: {
      localFile: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    };
  }; // Optional property for PostCardGrid
  excerpt?: string; // Optional property for PostCardGrid
  Name: string; // Optional property for Use CaseCardGrid
  Description: string; // Optional property for Use CaseCardGrid
}

interface BaseGridProps {
  cardData: CardData[];
  itemsPerPage: number;
  renderItem: (card: CardData) => React.ReactNode;
  loading: string;
}

const SearchGrid: React.FC<BaseGridProps> = ({
  cardData,
  itemsPerPage,
  renderItem,
  loading,
}) => {
  const renderSkeleton = () => (
    <Grid container spacing={2}>
      {Array.from({ length: 10 }, (_, index) => (
        <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
          <Skeleton variant="rectangular" height={150} />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </Grid>
      ))}
    </Grid>
  );
  if (cardData.length === 0 && loading === "idle") {
    return (
      <Container maxWidth="xl" style={{ padding: "25px" }}>
        <Typography variant="h4" align="center">
          No Results Found
        </Typography>
      </Container>
    );
  }
  if (cardData.length === 0) {
    return renderSkeleton();
  }
  
  return (
    <Grid container spacing={3}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={12} md={6} key={index}>
          {renderItem(card)}
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchGrid;
