import React from 'react';
import { Card, CardContent, Typography } from '@mui/material'
import { Link } from "gatsby";
import { BaseCard, CardProps } from './BaseCard'
import getSlug from "speakingurl";
import './cardStyles.css'

interface NewsCardProps extends CardProps {
    slug: string;
    author: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, slug, author, thumbnail }) => {
    return (
        <Card className="max-w-sm h-128 rounded-lg overflow-hidden shadow-lg">
        <Link style={{ textDecoration: "none", color: "white" }} to={`/news/${getSlug(title)}`}>
          <BaseCard title={title} date={date} thumbnail={thumbnail} />
        </Link>
        <Typography className="text-gray-700">{author}</Typography>
      </Card>
    );
}

export default NewsCard;


