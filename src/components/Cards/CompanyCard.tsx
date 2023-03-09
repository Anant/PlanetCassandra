import React from 'react';
import { CardContent, Typography } from '@mui/material'
import { Link } from "gatsby";
import { BaseCard, CardProps } from './BaseCard'
import getSlug from "speakingurl";
import { IGatsbyImageData } from 'gatsby-plugin-image';
import './cardStyles.css'

//@ts-ignore
interface CompanyCardProps extends Omit<CardProps, 'title' | 'date'> {
    name: string;
    description: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ name, description }) => {
  return (
    <Link style={{ textDecoration: "none", color: "white" }} to={`/use-cases/${getSlug(name)}`}>
      {/*//@ts-ignore*/}
      <BaseCard title={name} >
        <CardContent className="px-6 py-4">
          <Typography className="text-gray-600">{description}</Typography>
        </CardContent>
      </BaseCard>
    </Link>
  );
};

export default CompanyCard;
