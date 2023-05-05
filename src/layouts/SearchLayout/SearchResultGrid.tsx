import React, { useState, useEffect } from "react";
import SearchResultCard from "../../components/Cards/SearchCard";
import getSlug from "speakingurl";
import SearchGrid from "../SearchGrid";
interface SearchResultGridProps {
  hits: any[];
  cardType: "post" | "news" | "leaf" | "usecases";
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

  let formattedHits = hits.map((hit) => ({
    title: hit.title,
    date: hit.date,
    author: hit.author?.node?.name,
    wallabag_created_at: hit.wallabag_created_at,
    pubDate: hit.pubDate,
  }));
  if (cardType === "usecases") {
    formattedHits = hits.map((hit) => ({
      title: hit.data?.Case_Name,
      date: hit.data?.Case_Published,
      author: null,
      wallabag_created_at: hit.data?.Case_Published,
      pubDate: hit.data?.Case_Published,
    }));
  }

  const renderCard = (card: {
    pubDate: any;
    wallabag_created_at: any;
    title: string;
    author: string;
    date: any;
  }) => {
    return (
      <SearchResultCard
        title={card.title}
        date={card.pubDate || card.date || card.wallabag_created_at}
        author={card.author}
        slug={getSlug(card.title)}
        cardType={cardType}
      />
    );
  };

  return (
    <SearchGrid
      //@ts-ignore
      cardData={formattedHits}
      itemsPerPage={12}
      //@ts-ignore
      renderItem={renderCard}
    />
  );
};

export default SearchResultGrid;
