import React from 'react';
import { Card, CardContent, Typography } from '@mui/material'
import { Link } from "gatsby";
import { BaseCard, CardProps } from './BaseCard'
import getSlug from "speakingurl";
import { IGatsbyImageData } from 'gatsby-plugin-image';
import './cardStyles.css'

interface EventCardProps extends CardProps {}

const EventCard: React.FC<EventCardProps> = ({ title, date, thumbnail }) => {
    return (
      <Card className="max-w-sm h-128 rounded-lg overflow-hidden shadow-lg">
        <Link to={`/event/${getSlug(title)}`}>
         <BaseCard title={title} date={date} />
        </Link>
      </Card>
    );
}

export default EventCard;
