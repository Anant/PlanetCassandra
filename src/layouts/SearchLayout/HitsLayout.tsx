import { useHits } from "react-instantsearch-hooks-web";
import React, { useMemo } from "react";
import getSlug from "speakingurl";
import SearchGrid from "../SearchGrid";
import SearchResultCard from "../../components/Cards/SearchCard";
import { useStaticQuery, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

function CustomHits({ props, cardType }: any) {
  const { hits, results, sendEvent } = useHits(props);
  console.log("🚀 ~ file: HitsLayout.tsx:10 ~ CustomHits ~ hits:", hits);
  const data = useStaticQuery(graphql`
    query LogoImages {
      allAirtable(
        filter: { table: { eq: "Cases" } }
        sort: { data: { Case_Published: DESC } }
      ) {
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
    }
  `);

  let getImage = (ID_Case: number) => {
    const caseData = data.allAirtable.nodes.find(
      (node: any) => node.data.ID_Case === ID_Case
    );
    console.log(caseData);
    return (
      caseData?.downloadedImages[0]?.childImageSharp.gatsbyImageData ||
      undefined
    );
  };

  let images = data.allFile.nodes;
  console.log("🚀 ~ file: HitsLayout.tsx:33 ~ CustomHits ~ images:", images);
  const test = (hit: any) => {
    let a = [hit].map((card) => {
      const image = images.find((img: any) => img.parent?.id === card.id);
      return image?.childrenImageSharp[0].gatsbyImageData || undefined;
    });
    return a[0] || undefined;
  };
  let formattedHits = hits.map((hit: any) => ({
    id: hit.id,
    title: hit.title,
    date: hit.date,
    slug: hit.slug ? hit.slug : "",
    author: hit.author?.node?.name,
    wallabag_created_at: hit.wallabag_created_at,
    pubDate: hit.pubDate,
    ID_Case: hit.data ? hit.data.ID_Case : undefined,
    image:
      hit.featuredImage?.node.localFile.childImageSharp.gatsbyImageData ||
      test(hit),
  }));

  if (cardType === "usecases") {
    formattedHits = hits.map((hit: any) => ({
      id: hit.id,
      title: hit.data?.Case_Name,
      date: hit.data?.Case_Published,
      author: null,
      slug: "",
      wallabag_created_at: hit.data?.Case_Published,
      pubDate: hit.data?.Case_Published,
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
      //@ts-ignore
      cardData={formattedHits}
      itemsPerPage={12}
      //@ts-ignore
      renderItem={renderCard}
    />
  );
}
export default CustomHits;
