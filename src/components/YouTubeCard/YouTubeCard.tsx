import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Card, CardContent, Typography } from "@mui/material"
import { IGatsbyImageData } from 'gatsby-plugin-image';
import getSlug from "speakingurl";
import './videoCard.css'

interface YoutubeCardProps {
  title: string
  channelTitle: string
  videoId: string
  localThumbnail: IGatsbyImageData
  description: string
}

const YoutubeCard: React.FC<YoutubeCardProps> = ({ title, channelTitle, videoId, localThumbnail, description }) => {
  

  return (
    <Card className="max-w-sm h-128 rounded-lg overflow-hidden shadow-lg">
      <Link to={`/video/${getSlug(title)}`}>
        {localThumbnail ? (
          <GatsbyImage
            className="w-full h-64 object-cover"
            image={localThumbnail}
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
        <Typography className="text-gray-600">Channel: {channelTitle}</Typography>
        <Typography className="text-gray-700">{description}</Typography>
      </CardContent>
    </Card>
  )
}

export default YoutubeCard
