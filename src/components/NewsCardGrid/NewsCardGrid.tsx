// NewsCardGrid.tsx
import React, { useState } from 'react';
import { Container, Grid, Pagination } from '@mui/material';
import NewsCard from '../Cards/NewsCard';
import getSlug from 'speakingurl';

interface PostCardData {
  title: string;
  pubDate: string;
  link: string;
  id: string;
  content: string;
  author: string;
  summary: string;
}

interface PostCardGridProps {
  cardData: PostCardData[];
}

const NewsCardGrid: React.FC<PostCardGridProps> = ({ cardData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(cardData.length / itemsPerPage);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = cardData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Container maxWidth="xl" style={{ padding: '25px' }}>
      <Grid container spacing={3}>
        {currentPosts.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <NewsCard title={card.title} date={card.pubDate} author={card.author} slug={getSlug(card.title)} />
          </Grid>
        ))}
      </Grid>
      <Grid item style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
        <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} variant="outlined" color="primary" />
      </Grid>
    </Container>
  );
};

export default NewsCardGrid;
