import React from 'react';
import { Card, CardContent, Typography } from '@mui/material'
import { Link } from "gatsby";
import { BaseCard, CardProps } from './BaseCard'
import './cardStyles.css'
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface PostCardProps extends CardProps {
    slug: string | undefined;
    author: string;
    thumbnail?: IGatsbyImageData;
}

const PostCard: React.FC<PostCardProps> = ({ title, date, thumbnail, slug, author }) => {
    return (
        <Card className="max-w-sm h-128 rounded-lg overflow-hidden shadow-lg">
            <CardContent className="px-6 py-4">
                <Link style={{ textDecoration: "none", color: "white" }} to={`/post/${slug}`}>
                    <BaseCard title={title} date={date} thumbnail={thumbnail} />
                </Link>
                <Typography>{author}</Typography>
            </CardContent>
        </Card>
    );
}

export default PostCard;
