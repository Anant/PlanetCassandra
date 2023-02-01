import React from 'react';
import { Container, Grid } from '@mui/material';
import PostCard from '../PostCard/PostCard';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface PostCardData {
  categories: {
    name: string;
    slug: string;
    count: number;
  }[];
  author: {
    avatar: {
      url: string;
    };
    name: string;
  };
  date: string;
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
}

interface PostCardGridProps {
  cardData: PostCardData[];
}

const PostCardGrid: React.FC<PostCardGridProps> = (props: PostCardGridProps) => {
  const { cardData } = props;
  return (
    <Container maxWidth="xl" className='p-2'>
      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={3} key={index}>
            <PostCard title={card.title} date={card.date} thumbnail={card.featuredImage.node.localFile.childImageSharp.gatsbyImageData} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PostCardGrid;