import React from 'react';
import { CardContent, Typography } from '@mui/material'
import { GatsbyImage } from "gatsby-plugin-image"
import { IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import './cardStyles.css'

interface CardProps {
  title: string;
  date: string;
  thumbnail: IGatsbyImageData;
}

class BaseCard<P extends CardProps> extends React.Component<P> {
  protected renderThumbnail(thumbnail: IGatsbyImageData, alt: string) {
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

  protected renderContent() {
    return (
      <CardContent className="px-6 py-4">
        <Typography className="text-xl font-medium text-gray-900" component="h2">
          {this.props.title}
        </Typography>
        <Typography className="text-gray-600">{this.props.date}</Typography>
      </CardContent>
    );
  }
}

export { BaseCard, CardProps };
