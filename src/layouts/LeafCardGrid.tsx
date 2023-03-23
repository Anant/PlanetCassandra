import React from "react";
import BaseGrid from "./BaseGrid";
import LeafCard from "../components/Cards/LeafCard";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface LeafCardData {
  title: string;
  date: string;
  description: string;
  tags: string[];
  thumbnail: IGatsbyImageData | undefined;
}

interface LeafCardGridProps {
  cardData: LeafCardData[];
}

const LeafCardGrid: React.FC<LeafCardGridProps> = ({ cardData }) => {
    return (
        <BaseGrid
        //@ts-ignore
          cardData={cardData}
          itemsPerPage={12}
          renderItem={(card) => (
            <LeafCard
                title={card.title}
                date={card.date}
                description={card.Description}
                tags={card.tags}
                thumbnail={card.thumbnail}
              />
          )}
        />
      );
  };
  

export default LeafCardGrid;



