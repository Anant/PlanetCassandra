import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby";
import Layout from '../components/Layout/Layout';
import { Container, Grid, Pagination } from '@mui/material';
import CompanyCard from '../components/Cards/CompanyCard';
import UseCaseGrid from '../layouts/UseCaseGrid';

interface CompanyData {
    allAirtable: {
        nodes: {
            table: string;
            data: {
                Name: string;
                Description: string;
            };
        }[];
    };
}

const Companies: React.FC<CompanyData> = () => {
    const { allAirtable }: CompanyData = useStaticQuery(query);
    const currentCompanies = allAirtable.nodes.map(node => node.data);

    return (
        <Layout>
        <UseCaseGrid cardData={currentCompanies} />
        </Layout>
    );
};

const query = graphql`
{
    allAirtable(filter: { table: { eq: "Company" } }) {
      nodes {
        table
        data {
          Description
          Name
        }
      }
    }
  }
`;
export default Companies;