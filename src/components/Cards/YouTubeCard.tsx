import React from 'react';
import { Card, Typography } from '@mui/material'
import { Link } from "gatsby";
import { BaseCard, CardProps } from './BaseCard'
import { IGatsbyImageData } from 'gatsby-plugin-image';
import getSlug from "speakingurl";
import './cardStyles.css'

interface YoutubeCardProps extends CardProps {
  channelTitle: string
  videoId: string
  thumbnail: IGatsbyImageData
  description: string
}

class YoutubeCard extends BaseCard<YoutubeCardProps> {
  render() {
    const { channelTitle, videoId, thumbnail, description } = this.props;

    return (
      <Card className="max-w-sm h-128 rounded-lg overflow-hidden shadow-lg">
        <Link to={`/video/${getSlug(this.props.title)}`}>
          {this.renderThumbnail(thumbnail, this.props.title)}
        </Link>
        {this.renderContent()}
        <Typography className="text-gray-600">Channel: {channelTitle}</Typography>
        <Typography className="text-gray-700">{description}</Typography>
      </Card>
    );
  }
}

export default YoutubeCard;
