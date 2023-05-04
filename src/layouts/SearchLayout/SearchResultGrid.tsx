import React, { useState, useEffect } from "react";
import PostCard from "../../components/Cards/PostCard";
import NewsCard from "../../components/Cards/NewsCard";
import BaseGrid from "../BaseGrid";
import LeafCard from "../../components/Cards/LeafCard";
import UseCaseCard from "../../components/Cards/UseCaseCard";
import SearchResultCard from "../../components/Cards/SearchCard";
import getSlug from "speakingurl";

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

  const formattedHits = hits.map((hit) => ({
    title: hit.title,
    date: hit.date,
    slug: hit.slug,
    author: hit.author?.node?.name,
    wallabag_created_at: hit.wallabag_created_at,
    pubDate: hit.pubDate,
    preview_picture: hit.preview_picture,
  }));
  // if (cardType === "usecases") {
  //   formattedHits = hits.map((hit) => ({
  //     title: hit.data.Case_Name,
  //     date: hit.data.Case_Published,
  //     slug: "",
  //     author: hit.author?.node?.name,
  //     wallabag_created_at: hit.data.Case_Published,
  //     pubDate: hit.data.Case_Published,
  //     preview_picture: hit.preview_picture,
  //   }));
  // }
  const renderCard = (card: {
    preview_picture: string | undefined;
    pubDate: any;
    wallabag_created_at: any;
    title: string;
    author: string;
    date: any;
    slug: string | undefined;
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
