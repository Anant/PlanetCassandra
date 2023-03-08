import React from 'react';
import { Card, Typography } from '@mui/material'
import { Link } from "gatsby";
import { BaseCard, CardProps } from './BaseCard'
import getSlug from 'speakingurl';
import './cardStyles.css'

interface LeafCardProps extends CardProps {
  description: string;
  tags: string[];
}

class LeafCard extends BaseCard<LeafCardProps> {
  render() {
    return (
      <Card className="max-w-sm h-128 rounded-lg overflow-hidden shadow-lg">
        <Link to={`/leaf/${getSlug(this.props.title)}`}>
          {this.renderThumbnail(this.props.thumbnail, this.props.title)}
        </Link>
        {this.renderContent()}
        <Typography className="text-gray-700">{this.props.description}</Typography>
      </Card>
    );
  }
}

export default LeafCard;
