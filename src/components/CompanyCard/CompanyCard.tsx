import React from 'react';
import { Avatar, Card, CardContent, Typography } from '@mui/material'
import { GatsbyImage } from "gatsby-plugin-image"
import { IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby";
import '../CompanyCard/companyCard.css'
import getSlug from "speakingurl";

interface Props {
  name: string;
  descritpion: string;
}

const CompanyCard: React.FC<Props> = (props: Props) => {
  const { name, descritpion } = props
  //Add SEO Metadata
  return (
    <Link style={{ textDecoration: "none", color: "white" }} to={`/use-cases/${getSlug(name)}`}>
      <Card className="max-w-sm h-128 rounded-lg overflow-hidden shadow-lg">
        <CardContent className="px-6 py-4">
          <Typography className="text-xl font-medium text-gray-900" component="h2">
            {name}
          </Typography>
          <Typography className="text-gray-600">{descritpion}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CompanyCard;