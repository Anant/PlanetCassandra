import React from 'react';
import { Grid } from '@mui/material';
import PostCard from '../PostCard/PostCard';

interface Props {
  cardData: {
    title: string;
    date: string;
  }[];
}

const PostCardGrid: React.FC<Props> = (props: Props) => {
  const { cardData } = props;

  return (
    <Grid container spacing={3}>
      {cardData.map((card, index) => (
        <Grid item xs={3} key={index}>
          <PostCard title={card.title} date={card.date} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostCardGrid;