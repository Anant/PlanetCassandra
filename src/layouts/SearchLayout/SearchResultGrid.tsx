import React, { useState, useEffect } from 'react';
import PostCard from '../../components/Cards/PostCard';
import NewsCard from '../../components/Cards/NewsCard';
import BaseGrid from '../BaseGrid'
import LeafCard from '../../components/Cards/LeafCard';
import UseCaseCard from '../../components/Cards/UseCaseCard';


interface SearchResultGridProps {
  hits: any[];
  cardType: 'post' | 'news' | 'leaves' | 'usecases';
  refreshCount: number;
  onRefresh: () => void;
}

const SearchResultGrid: React.FC<SearchResultGridProps> = ({
  hits,
  cardType,
  refreshCount,
  onRefresh,
}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (hits.length > 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [hits]);

  useEffect(() => {
    if (loading && hits.length === 0) {
      setTimeout(onRefresh, 1000);
    }
  }, [loading, onRefresh, hits]);
  

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
    else if (cardType === 'usecases') {
      return (
        <UseCaseCard
          name={card.title}
          date={card.date} // Make sure the date is available in the formattedHits array
          description={card.description} // Make sure the description is available in the formattedHits array
          tags={card.tags} // Make sure the tags are available in the formattedHits array
          url={card.url} // Make sure the URL is available in the formattedHits array
          gatsbyImageData={card.gatsbyImageData} // Make sure the gatsbyImageData is available in the formattedHits array
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
      // loading={loading}
    />
  );
};

export default SearchResultGrid;
