import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import { Container, Grid, Pagination } from '@mui/material';
import CompanyCard from '../components/Cards/CompanyCard';
import UseCaseGrid from '../layouts/UseCaseGrid';
import { IGatsbyImageData } from 'gatsby-plugin-image';
//@ts-ignore
import { Helmet } from 'react-helmet';
interface CompanyData {
  allAirtable: {
    nodes: {
      table: string;
      data: {
        Case_Name: string;
        Case_Description: string;
        Case_URL: string;
        Case_Article_Content: string;
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
  const allAirtable = data.allAirtable as CompanyData['allAirtable'];
  const allFile = data.allFile.nodes as LogoFile[];

  const currentCompanies = allAirtable.nodes.map((node) => {
    const companyName = node.data.Case_Company[0]?.data.Name.split(' ')
      .join('')
      .toLowerCase();
    const logoFile = allFile.find(
      (file) => file.name === `case.logo.${companyName}`
    );

    return {
      ...node.data,
      gatsbyImageData: logoFile?.childrenImageSharp[0]?.gatsbyImageData || null,
    };
  });
  return (
    <Layout>
      <Helmet>
        <title>Use Cases - Planet Cassandra</title>
        <meta property="og:image" content="../images/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={'Use Cases - Planet Cassandra'} />
        <meta name="author" content={'Planet Cassandra'} />
        <meta
          name="keywords"
          content="Cassandra use cases, data-driven solutions, IoT, e-commerce, analytics"
        />
        <meta
          name="description"
          content="Discover various use cases for Cassandra database on Planet Cassandra. Learn how Cassandra is being used in real-world applications for data-driven solutions, including IoT, e-commerce, analytics, and more."
        />
        <meta
          property="og:description"
          content="Explore various use cases for Cassandra database on Planet Cassandra. Learn how Cassandra is being used in real-world applications for data-driven solutions, including IoT, e-commerce, analytics, and more."
        />
      </Helmet>
      <UseCaseGrid cardData={currentCompanies} />
    </Layout>
  );
};

const query = graphql`
  query UseCasesDataListing {
    allAirtable(
      filter: { table: { eq: "Cases" } }
      sort: { data: { Case_Published: DESC } }
    ) {
      nodes {
        table
        data {
          Case_URL
          Case_Name
          Case_Article_Content
          Case_Description
          Case_Company {
            data {
              Name
            }
          }
        }
      }
    }
    allFile(filter: { id: { ne: null } }) {
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
