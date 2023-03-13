import React from 'react';
import { CardContent, Typography } from '@mui/material'
import { GatsbyImage } from "gatsby-plugin-image"
import { IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import './cardStyles.css'

interface CardProps {
  title: string;
  date?: any;
  thumbnail?: IGatsbyImageData;
}

const BaseCard: React.FC<CardProps> = ({ title, date, thumbnail }) => {
  const renderThumbnail = (thumbnail: IGatsbyImageData | undefined, alt: string) => {
    if (thumbnail) {
      return (
        <GatsbyImage
          className="w-full h-64 object-cover"
          image={thumbnail}
          alt={alt}
        />
      );
    } else {
      return (
        <StaticImage
          src="https://via.placeholder.com/640x360"
          className="w-full h-64 object-cover"
          alt="Placeholder"
        />
      );
    }
  }

  const renderContent = () => {
    return (
      <CardContent className="px-6 py-4">
        <Typography className="text-xl font-medium text-gray-900" component="h2">
          {title}
        </Typography>
        <Typography className="text-gray-600">{new Date(date).toLocaleDateString()}</Typography>
      </CardContent>
    );
  }

  return (
    <>
      {renderThumbnail(thumbnail, title)}
      {renderContent()}
    </>
  );
}

export { BaseCard, CardProps };
