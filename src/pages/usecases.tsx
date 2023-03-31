import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby";
import Layout from '../components/Layout/Layout';
import { Container, Grid, Pagination } from '@mui/material';
import CompanyCard from '../components/Cards/CompanyCard';
import UseCaseGrid from '../layouts/UseCaseGrid';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface CompanyData {
  allAirtable: {
    nodes: {
      table: string;
      data: {
        Case_Name: string;
        Case_Description: string;
        Case_URL: string;
        Case_Company: {
          data: {
            Name: string;
          };
        }[];
        gatsbyImageData: IGatsbyImageData | null;
      };
    }[];
  };
}

interface LogoFile {
  name: string;
  childrenImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  }[];
}


const Companies: React.FC<CompanyData> = () => {
  const data = useStaticQuery(query);
  const allAirtable = data.allAirtable as CompanyData["allAirtable"];
  const allFile = data.allFile.nodes as LogoFile[];

  const currentCompanies = allAirtable.nodes.map((node) => {
    const companyName = node.data.Case_Company[0]?.data.Name.split(" ").join("").toLowerCase();
    const logoFile = allFile.find((file) => file.name === `case.logo.${companyName}`);

    return {
      ...node.data,
      gatsbyImageData: logoFile?.childrenImageSharp[0]?.gatsbyImageData || null,
    };
  });
  return (
    <Layout>
      <UseCaseGrid cardData={currentCompanies} />
    </Layout>
  );
};


const query = graphql`
query UseCasesDataListing {
  allAirtable(
    filter: {table: {eq: "Cases"}}
    sort: {data: {Case_Published: DESC}}
  ) {
    nodes {
      table
      data {
        Case_URL
        Case_Name
        Case_Description
        Case_Company {
          data {
            Name
          }
        }
      }
    }
  }
  allFile(filter: {id: {ne: null}}) {
    nodes {
      name
      childrenImageSharp {
        gatsbyImageData
      }
    }
    totalCount
  }
}
`;
export default Companies;