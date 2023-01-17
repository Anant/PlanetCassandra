import React from 'react';
import { Card, CardContent, Typography } from '@mui/material'

interface Props {
  title: string;
  date: string;
}

const PostCard: React.FC<Props> = (props: Props) => {
  const { title, date } = props;
  //Add SEO Metadata
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{date}</Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;