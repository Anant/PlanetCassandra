import React from 'react';
import { Card, CardContent, Typography } from '@mui/material'
import { Link } from "gatsby";
import { BaseCard, CardProps } from './BaseCard'
import getSlug from "speakingurl";
import './cardStyles.css'

interface NewsCardProps extends Omit<CardProps, 'thumbnail'> {
    slug: string;
    author: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, slug, author }) => {
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
          <Typography className="text-gray-600">{date}</Typography>
        </CardContent>
      </Card>
    );
}

export default NewsCard;
