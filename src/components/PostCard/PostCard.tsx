import React from 'react';
import { Card, CardContent, Typography } from '@mui/material'
import { GatsbyImage } from "gatsby-plugin-image"
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface Props {
  title: string;
  date: string;
  thumbnail: IGatsbyImageData;
}

const PostCard: React.FC<Props> = (props: Props) => {
  const { title, date, thumbnail } = props;
  //Add SEO Metadata
  return (
    <Card className="max-w-sm rounded-lg overflow-hidden shadow-lg">
      <GatsbyImage
        className="w-full h-64 object-cover"
        image={thumbnail}
        alt={title}
      />
      <CardContent className="px-6 py-4">
        <Typography className="text-xl font-medium text-gray-900" component="h2">
          {title}
        </Typography>
        <Typography className="text-gray-600">{date}</Typography>
      </CardContent>
    </Card>

  );
};

export default PostCard;