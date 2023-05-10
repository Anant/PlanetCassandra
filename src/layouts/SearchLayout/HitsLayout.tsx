import { useHits } from "react-instantsearch-hooks-web";
import React from "react";
import getSlug from "speakingurl";
import SearchGrid from "../SearchGrid";
import SearchResultCard from "../../components/Cards/SearchCard";

function CustomHits({ props, cardType }: any) {
  const { hits, results, sendEvent } = useHits(props);

  let formattedHits = hits.map((hit: any) => ({
    title: hit.title,
    date: hit.date,
    slug: hit.slug ? hit.slug : "",
    author: hit.author?.node?.name,
    wallabag_created_at: hit.wallabag_created_at,
    pubDate: hit.pubDate,
  }));
  if (cardType === "usecases") {
    formattedHits = hits.map((hit: any) => ({
      title: hit.data?.Case_Name,
      date: hit.data?.Case_Published,
      author: null,
      slug: "",
      wallabag_created_at: hit.data?.Case_Published,
      pubDate: hit.data?.Case_Published,
    }));
  }

  const renderCard = (card: {
    pubDate: any;
    wallabag_created_at: any;
    title: string;
    slug: string;
    author: string;
    date: any;
  }) => {
    let urlSlug = getSlug(card.title);
    if (cardType == "post") {
      urlSlug = card.slug;
    }

    return (
      <SearchResultCard
        title={card.title}
        date={card.pubDate || card.date || card.wallabag_created_at}
        author={card.author}
        slug={urlSlug}
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
}
export default CustomHits;
