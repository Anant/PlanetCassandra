import React from 'react';
import BaseGrid from './BaseGrid';
import NewsCard from '../components/Cards/NewsCard';
import getSlug from 'speakingurl';

interface NewsCardGridProps {
  cardData: {
    title: string;
    pubDate: string;
    link: string;
    id: string;
    content: string;
    author: string;
    summary: string;
  }[];
}

const NewsCardGrid: React.FC<NewsCardGridProps> = ({ cardData }) => {
  return (
    <BaseGrid
      //@ts-ignore
      cardData={cardData}
      itemsPerPage={12}
      renderItem={(card) => (
        <NewsCard title={card.title} date={card.pubDate} author={card.author} slug={getSlug(card.title)} />
      )}
    />
  );
};

export default NewsCardGrid;
