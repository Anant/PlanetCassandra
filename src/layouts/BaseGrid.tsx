import React, { useState } from 'react';
import { Container, Grid, Pagination } from '@mui/material';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface CardData {
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
  }
  

interface BaseGridProps {
  cardData: CardData[];
  itemsPerPage: number;
  renderItem: (card: CardData) => React.ReactNode;
}

const BaseGrid: React.FC<BaseGridProps> = ({ cardData,  itemsPerPage, renderItem }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cardData.length / itemsPerPage);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCards = cardData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Container maxWidth="xl" style={{ padding: '25px' }}>
      <Grid container spacing={3}>
        {currentCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            {renderItem(card)}
          </Grid>
        ))}
      </Grid>
      <Grid item style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
        <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} variant="outlined" color="primary" />
      </Grid>
    </Container>
  );
};

export default BaseGrid;
