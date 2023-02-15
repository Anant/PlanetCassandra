import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby";
import Layout from '../components/Layout/Layout';
import { Container, Grid, Pagination } from '@mui/material';
import CompanyCard from '../components/CompanyCard/CompanyCard';

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
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const cardData = allAirtable.nodes;
    const totalPages = Math.ceil(cardData.length / itemsPerPage);

    const handlePageChange = (event: any, value: number) => {
        setCurrentPage(value);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCompanies = cardData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <Layout>
            <Container maxWidth="xl" style={{
                padding: '25px'
            }} >
                <Grid container spacing={3}>
                    {currentCompanies.map((card, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <CompanyCard
                                    name={card.data.Name}
                                    descritpion={card.data.Description}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
                <Grid item style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        variant="outlined"
                        color="primary"
                    />
                </Grid>
            </Container>
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