import React from 'react';
import { Card, CardContent, Typography } from '@mui/material'
import { Link } from "gatsby";
import { BaseCard, CardProps } from './BaseCard'
import { IGatsbyImageData } from 'gatsby-plugin-image';
import getSlug from "speakingurl";
import './cardStyles.css'

interface YoutubeCardProps extends CardProps {
    channelTitle: string
    videoId: string
    thumbnail: IGatsbyImageData
    description: string
}

const YoutubeCard: React.FC<YoutubeCardProps> = ({ title, channelTitle, videoId, thumbnail, description, date }) => {

    return (
        <Card className="max-w-sm h-128 rounded-lg overflow-hidden shadow-lg">
            <CardContent className="px-6 py-4">
                <Link style={{ textDecoration: "none", color: "white" }} to={`https://www.youtube.com/watch?v=${videoId}`}>
                    <BaseCard title={title} date={date} thumbnail={thumbnail} />
                </Link>
                <Typography className="text-gray-600">Channel: {channelTitle}</Typography>
            </CardContent>
        </Card>
    );

}

export default YoutubeCard;
