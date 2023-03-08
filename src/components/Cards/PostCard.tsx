import React from 'react';
import { Card } from '@mui/material'
import { Link } from "gatsby";
import { BaseCard, CardProps } from './BaseCard'
import './cardStyles.css'

interface PostCardProps extends CardProps {
  slug: string;
}

class PostCard extends BaseCard<PostCardProps> {
  render() {
    return (
      <Card className="max-w-sm h-128 rounded-lg overflow-hidden shadow-lg">
        <Link to={`/post/${this.props.slug}`}>
          {this.renderThumbnail(this.props.thumbnail, this.props.title)}
        </Link>
        {this.renderContent()}
      </Card>
    );
  }
}

export default PostCard;
