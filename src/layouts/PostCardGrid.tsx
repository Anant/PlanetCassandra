import React from 'react';
import BaseGrid from './BaseGrid';
import PostCard from '../components/Cards/PostCard';
import getSlug from 'speakingurl';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface PostCardGridProps {
   cardData: {
    categories: {
        name: string;
        slug: string;
        count: number;
      }[];
      author: {
        node: {
          avatar: {
            url: string;
          };
          name: string;
        }
      };
      date: string;
      slug: string;
      title: string;
      featuredImage: {
        node: {
          localFile: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        };
      };
      excerpt: string;
   }[];
}

const PostCardGrid: React.FC<PostCardGridProps> = ({ cardData }) => {
  return (
    <BaseGrid
      //@ts-ignore
      cardData={cardData}
      itemsPerPage={12}
      renderItem={(card) => (
        <PostCard title={card.title} author={card.author.node.name} date={card.date} slug={card.slug} thumbnail={card.featuredImage?.node.localFile.childImageSharp.gatsbyImageData}/>
        )}
    />
    );
};

export default PostCardGrid;
