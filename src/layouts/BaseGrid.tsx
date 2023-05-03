import React, { useState } from 'react';
import { Container, Grid, Skeleton, Typography } from '@mui/material';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import InfiniteScroll from 'react-infinite-scroll-component';

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
  author?: any // Optional property for NewsCardGrid
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
  loading: boolean;
}

const renderSkeleton = () => (
  <Grid item xs={12} sm={6} md={4} lg={4}>
    <Skeleton variant="rectangular" height={200} />
    <Skeleton variant="text" />
    <Skeleton variant="text" />
    <Skeleton variant="text" />
  </Grid>
);

const BaseGrid: React.FC<BaseGridProps> = ({ cardData, itemsPerPage, renderItem }) => {
  const [currentItems, setCurrentItems] = useState<CardData[]>(cardData.slice(0, itemsPerPage));

  const fetchMoreData = () => {
    setCurrentItems(currentItems.concat(cardData.slice(currentItems.length, currentItems.length + itemsPerPage)));
  };

  if (cardData.length === 0) {
    return (
      <Container maxWidth="xl" style={{ padding: '25px' }}>
        <Typography variant="h4" align="center">
          No Results Found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" style={{ padding: '25px' }}>
      <InfiniteScroll
        dataLength={currentItems.length}
        next={fetchMoreData}
        hasMore={currentItems.length < cardData.length}
        loader={
          <Grid container spacing={3}>
            {Array.from({ length: itemsPerPage }).map((_, index) => (
              <React.Fragment key={index}>{renderSkeleton()}</React.Fragment>
            ))}
          </Grid>
        }
        endMessage={
          <Typography variant="body1" align="center" fontWeight="bold">
            You have seen it all
          </Typography>
        }
      >
        <Grid container spacing={3}>
          {currentItems.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              {renderItem(card)}
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </Container>

  );
};

export default BaseGrid;
