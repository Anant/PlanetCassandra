import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'gatsby';

interface SearchResultCardProps {
  title: string;
  date: string;
  author?: string;
  slug?: string;
  cardType?: string;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({
  cardType,
  title,
  date,
  author,
  slug,
}) => {
  const formatDate = (dateStr: string) => {
    const dateObj = new Date(dateStr);
    return dateObj.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Link
      style={{ textDecoration: 'none', color: 'white' }}
      to={`/${cardType}/${slug}`}
    >
      <Card style={{ height: '200px' }}>
        <CardContent className="px-6 py-4">
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {formatDate(date)}
          </Typography>
          {author && (
            <Typography color="textSecondary" gutterBottom>
              Author: {author}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default SearchResultCard;
