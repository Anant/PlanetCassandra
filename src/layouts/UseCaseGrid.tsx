import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Layout from '../components/Layout/Layout';
import BaseGrid from './BaseGrid';
import UseCaseCard from '../components/Cards/UseCaseCard';

interface CompanyDataProps {
    cardData: {
        Name: string;
        Description: string;
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
                    name={card.Name}
                    description={card.Description}
                />
            )}
        />
    );
};



export default UseCaseGrid;
