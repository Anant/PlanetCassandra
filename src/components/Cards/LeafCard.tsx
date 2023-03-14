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

const LeafCard: React.FC<LeafCardProps> = ({ title, date, thumbnail, description, tags }) => {
  return (
    <Card className="max-w-sm h-128 rounded-lg overflow-hidden shadow-lg">
      <Link style={{ textDecoration: "none", color: "white" }} to={`/leaf/${getSlug(title)}`}>
        <BaseCard title={title} date={date} thumbnail={thumbnail} />
      </Link>
      {/* <Typography className="text-gray-700">{description}</Typography> */}
    </Card>
  );
}

export default LeafCard;
