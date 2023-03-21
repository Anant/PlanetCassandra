import React from 'react';
import { Card, CardContent, Typography } from '@mui/material'
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
      <CardContent className="px-6 py-4">
        <Link style={{ textDecoration: "none", color: "white" }} to={`/leaf/${getSlug(title)}`}>
          <BaseCard title={title} date={date} thumbnail={thumbnail} />
        </Link>
        {/* <Typography className="text-gray-700">{description}</Typography> */}
      </CardContent>
    </Card>
  );
}

export default LeafCard;
