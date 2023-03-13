import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Layout from '../components/Layout/Layout';
import BaseGrid from './BaseGrid';
import UseCaseCard from '../components/Cards/UseCaseCard';

interface CompanyDataProps {
    cardData: {
        Case_Name: string;
        Case_Description: string;
    }[];
}

const UseCaseGrid: React.FC<CompanyDataProps> = ({ cardData }) => {

    console.log(cardData)
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
                />
            )}
        />
    );
};



export default UseCaseGrid;
