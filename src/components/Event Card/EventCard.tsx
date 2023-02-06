import React from 'react';
import { Avatar, Card, CardContent, Typography } from '@mui/material'
import { GatsbyImage } from "gatsby-plugin-image"
import { IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby";
import '../Event Card/eventCard.css'
import getSlug from "speakingurl";

interface Props {
  title: string;
  date: string;
  thumbnail: any;
}

const EventCard: React.FC<Props> = (props: Props) => {
  const { title, date, thumbnail } = props
  //Add SEO Metadata
  return (
    <Card className="max-w-sm h-128 rounded-lg overflow-hidden shadow-lg">
      <Link to={`/event/${getSlug(title)}`}>
        {thumbnail ? (
          <GatsbyImage
            className="w-full h-64 object-cover"
            image={thumbnail}
            alt={title}
          />
        ) : (
          <StaticImage
            src="https://via.placeholder.com/640x360"
            className="w-full h-64 object-cover"
            alt="Placeholder"
          />
        )}
      </Link>
      <CardContent className="px-6 py-4">
        <Typography className="text-xl font-medium text-gray-900" component="h2">
          {title}
        </Typography>
        <Typography className="text-gray-600">{date}</Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;