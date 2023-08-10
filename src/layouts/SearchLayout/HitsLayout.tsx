import { useHits, useInstantSearch } from "react-instantsearch-hooks-web";
import React, { useMemo, useState, useEffect } from "react";
import getSlug from "speakingurl";
import SearchGrid from "../SearchGrid";
import SearchResultCard from "../../components/Cards/SearchCard";
import { useStaticQuery, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { convert } from "html-to-text";

function CustomHits({ props, cardType, setNumHits }: any) {
  const { hits, results, sendEvent } = useHits(props);
  const { status } = useInstantSearch();

  useEffect(() => {
    setNumHits(hits.length);
  }, [hits]);

  const data = useStaticQuery(graphql`
    query LogoImages {
      allAirtable(filter: {}, sort: { data: { Case_Published: DESC } }) {
        nodes {
          data {
            ID_Case
          }
          downloadedImages {
            id
            childImageSharp {
              gatsbyImageData
            }
          }
          parent {
            id
          }
        }
      }
      allFile(filter: { id: { ne: null } }) {
        nodes {
          name
          childrenImageSharp {
            gatsbyImageData
          }
          parent {
            id
          }
        }
      }
      allApiLeaves(limit: 100, sort: { wallabag_created_at: DESC }) {
        nodes {
          tags
          title
          wallabag_created_at
          description
          id
          alternative_id
        }
      }
    }
  `);

  let getImage = (ID_Case: number) => {
    const caseData = data.allAirtable.nodes.find(
      (node: any) => node.data.ID_Case === ID_Case
    );
    return (
      caseData?.downloadedImages[0]?.childImageSharp.gatsbyImageData ||
      undefined
    );
  };

  let images = data.allFile.nodes;
  const newsImage = (hit: any) => {
    let a = [hit].map((card) => {
      const filteredImages = images.filter(
        (img: any) => img.parent && img.parent.id == card?.id
      );
      const image = filteredImages[0];
      return image?.childrenImageSharp[0]?.gatsbyImageData || undefined;
    });
    return a[0] || undefined;
  };
  const allLeaves = data.allApiLeaves.nodes;

  const leafImage = (hit: any) => {
    const leaf = allLeaves.find(
      (leaf: any) => leaf.alternative_id == hit.objectID
    );
    let test = newsImage(leaf);
    return test;
  };

  function getDescription(hit: any) {
    if (hit.excerpt) {
      // If it's from posts
      return convert(hit.excerpt);
    } else if (hit.summary) {
      // If it's from news
      return convert(hit.summary);
    } else if (hit.description) {
      // If it's from leaves
      return hit.description;
    } else {
      return "";
    }
  }

  let formattedHits = hits.map((hit: any) => ({
    id: hit.id,
    title: hit.title,
    description: getDescription(hit),
    date: hit.date,
    slug: hit.slug ? hit.slug : "",
    author: hit.author?.node?.name,
    wallabag_created_at: hit.wallabag_created_at,
    pubDate: hit.pubDate,
    ID_Case: hit.data ? hit.data.ID_Case : undefined,
    image:
      cardType !== "leaf"
        ? hit.featuredImage?.node.localFile.childImageSharp.gatsbyImageData ||
          newsImage(hit)
        : leafImage(hit),
  }));

  if (cardType === "usecases") {
    formattedHits = hits.map((hit: any) => ({
      id: hit.id,
      title: hit.data?.Case_Name,
      cardTitle:hit.data?.Case_Title,
      description: hit.data?.Case_Description,
      date: hit.data?.Created,
      author: null,
      slug: "",
      wallabag_created_at: hit.data?.Created,
      pubDate: hit.data?.Created,
      ID_Case: hit.data.ID_Case,
      image: getImage(hit.data.ID_Case),
    }));
  }

  const renderCard = (card: {
    id: string;
    ID_Case: number | undefined;
    pubDate: any;
    wallabag_created_at: any;
    title: string;
    description: string;
    slug: string;
    author: string;
    date: any;
    image: IGatsbyImageData;
  }) => {
    let urlSlug = getSlug(card.title);
    if (cardType == "post") {
      urlSlug = card.slug;
    }

    return (
      <SearchResultCard
        id={card.id}
        title={card.title}
        description={card.description}
        date={card.pubDate || card.date || card.wallabag_created_at}
        author={card.author}
        slug={urlSlug}
        cardType={cardType}
        ID_Case={card.ID_Case}
        image={card.image}
      />
    );
  };
  return (
    <SearchGrid
      loading={status}
      //@ts-ignore
      cardData={formattedHits}
      itemsPerPage={12}
      //@ts-ignore
      renderItem={renderCard}
    />
  );
}
export default CustomHits;
