import React from 'react';
import { Card, CardContent, Typography } from '@mui/material'
import { Link } from "gatsby";
import { BaseCard, CardProps } from './BaseCard'
import getSlug from "speakingurl";
import { IGatsbyImageData } from 'gatsby-plugin-image';
import './cardStyles.css'

interface EventCardProps extends CardProps { }

const EventCard: React.FC<EventCardProps> = ({ title, date, thumbnail }) => {
  return (
    <Card className="max-w-sm h-128 rounded-lg overflow-hidden shadow-lg">
      <CardContent className="px-6 py-4">
        <Link style={{ textDecoration: "none", color: "white" }} to={`/event/${getSlug(title)}`}>
          <BaseCard title={title} date={date} thumbnail={thumbnail} />
        </Link>
      </CardContent>
    </Card>
  );
}

export default EventCard;
