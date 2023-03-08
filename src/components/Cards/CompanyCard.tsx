import React from 'react';
import { Card, CardContent, Typography } from '@mui/material'
import { Link } from "gatsby";
import { BaseCard, CardProps } from './BaseCard'
import getSlug from "speakingurl";
import { IGatsbyImageData } from 'gatsby-plugin-image';
import './cardStyles.css'

//@ts-ignore
interface CompanyCardProps extends Omit<CardProps, 'title' | 'date'> {
    name: string;
    description: string;
    thumbnail?: IGatsbyImageData;
  }
  
//@ts-ignore
class CompanyCard extends BaseCard<CompanyCardProps> {
  render() {
    const { name, description } = this.props;
    return (
      <Link style={{ textDecoration: "none", color: "white" }} to={`/use-cases/${getSlug(name)}`}>
        <Card className="max-w-sm h-128 rounded-lg overflow-hidden shadow-lg">
          <CardContent className="px-6 py-4">
            <Typography className="text-xl font-medium text-gray-900" component="h2">
              {name}
            </Typography>
            <Typography className="text-gray-600">{description}</Typography>
          </CardContent>
        </Card>
      </Link>
    );
  }
}

export default CompanyCard;
