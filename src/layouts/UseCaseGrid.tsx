import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Layout from '../components/Layout/Layout';
import BaseGrid from './BaseGrid';
import UseCaseCard from '../components/Cards/UseCaseCard';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface CompanyDataProps {
    cardData: {
      Case_Name: string;
      Case_Description: string;
      Case_URL: string;
      gatsbyImageData: IGatsbyImageData | null;
    }[];
  }

const UseCaseGrid: React.FC<CompanyDataProps> = ({ cardData }) => {

    return (
        <BaseGrid
            //@ts-ignore
            cardData={cardData}
            itemsPerPage={12}
            renderItem={(card) => (
                <UseCaseCard
                    //@ts-ignore
                    name={card.Case_Name}
                    //@ts-ignore
                    description={card.Case_Description}
                    //@ts-ignore
                    url={card.Case_URL}
                    gatsbyImageData={card.gatsbyImageData}
                />
            )}
        />
    );
};



export default UseCaseGrid;
