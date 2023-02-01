import React from 'react';
import { Avatar, Card, CardContent, Typography } from '@mui/material'
import { GatsbyImage } from "gatsby-plugin-image"
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { Link } from "gatsby";
import '../NewsCard/newsCard.css'

interface Props {
  title: string;
  date: string;
  slug: string;
  author: string;
}

const NewsCard: React.FC<Props> = (props: Props) => {
  const { title, date,  slug, author } = props
  //Add SEO Metadata
  return (
    <Card className="max-w-sm h-128 rounded-lg overflow-hidden shadow-lg">
      <Link to={`/news/${slug}`}>
          <img
            src="https://via.placeholder.com/640x360"
            className="w-full h-64 object-cover"
            alt="Placeholder"
          />
      </Link>
      <CardContent className="px-6 py-4">
        <Typography className="text-xl font-medium text-gray-900" component="h2">
          {title}
        </Typography>
        <Typography className="text-gray-600">{author}</Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;