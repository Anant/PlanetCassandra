// SearchResultGrid.tsx
import React from 'react';
import PostCard from '../../components/Cards/PostCard';
import NewsCard from '../../components/Cards/NewsCard';
import BaseGrid from '../BaseGrid'
import LeafCard from '../../components/Cards/LeafCard';


interface SearchResultGridProps {
  hits: any[];
  cardType: 'post' | 'news' | 'leaves';
}

const SearchResultGrid: React.FC<SearchResultGridProps> = ({ hits, cardType }) => {
  const formattedHits = hits.map((hit) => ({
    title: hit.title,
    date: hit.date,
    slug: hit.slug,
    author: hit.author?.node?.name,
    wallabag_created_at: hit.wallabag_created_at,
    pubDate: hit.pubDate,
    preview_picture: hit.preview_picture,
  }));

  const renderCard = (card: {
      preview_picture: string | undefined;
      pubDate: any;
      wallabag_created_at: any; title: string; author: string; date: any; slug: string | undefined; 
}) => {
    if (cardType === 'post') {
      return (
        <PostCard
          title={card.title}
          author={card.author}
          date={card.date}
          slug={card.slug}
        />
      );
    } else if (cardType === 'news') {
      return (
        <NewsCard
          title={card.title}
          author={card.author}
          date={card.pubDate}
          slug={'NO Need'}
        />
      );
    } else if (cardType === 'leaves') {
        return (
          <LeafCard
                title={card.title}
                date={card.wallabag_created_at} 
                description={''} 
                tags={[]}    
          />
        );
      }
  };

  return (
    <BaseGrid
     //@ts-ignore
      cardData={formattedHits}
      itemsPerPage={12}
      //@ts-ignore
      renderItem={renderCard}
    />
  );
};

export default SearchResultGrid;
