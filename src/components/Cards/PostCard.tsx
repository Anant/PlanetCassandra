import React from 'react';
import { Card } from '@mui/material'
import { Link } from "gatsby";
import { BaseCard, CardProps } from './BaseCard'
import './cardStyles.css'

interface PostCardProps extends CardProps {
  slug: string | undefined;
}

const PostCard: React.FC<PostCardProps> = ({ title, date, thumbnail, slug }) => {
  return (
    <Card className="max-w-sm h-128 rounded-lg overflow-hidden shadow-lg">
      <Link style={{ textDecoration: "none", color: "white" }}  to={`/post/${slug}`}>
        <BaseCard title={title} date={date} thumbnail={thumbnail} />
      </Link>
    </Card>
  );
}

export default PostCard;
