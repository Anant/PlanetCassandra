import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Grid, Typography, Button, Container, Box } from "@mui/material";
import EventCard from "../EventsCards/EventCard";
import UseCaseCard from "./UseCaseCard";

interface allAirtableData {
  allAirtable: {
    nodes: {
      table: string;
      data: {
        Company_Logo_Filename: string;
        Description: string;
        Name:string
      }
    }[];
  }
}

const UseCases = () => {
  // const  {allAirtable}:allAirtableData = useStaticQuery(query);
  
  // const filteredAirtable = allAirtable.nodes.slice(0, 6).map(node => ({Name:node.data.Name, Description:node.data.Description}));
  
  return (
    <Grid container>
      <Container
        sx={{
          paddingY: 10,
        }}
      >
        <Typography
          sx={{ marginBottom: 3, textAlign: { xs: "center", md: "start" } }}
          color="black"
          variant="h4"
        >
          Cassandra Use Cases :
        </Typography>
        <Grid rowSpacing={3} columnSpacing={3} container>
          {/* {filteredAirtable.map((useCase) => (
            <Grid item xs={12} md={6} key={useCase.Name}>
              <UseCaseCard name={useCase.Name} description={useCase.Description} width={"100%"} />
            </Grid>
          ))} */}
        </Grid>
        <Grid marginTop={2} container justifyContent="end">
          <Button
            sx={{
              borderRadius: 50,
              backgroundColor: "#F2545B",
              fontSize: 10,
              "&:hover": {
                backgroundColor: "#F2545B",
              },
            }}
            variant="contained"
          >
            See all use cases
          </Button>
        </Grid>
      </Container>
    </Grid>
  );
};

export const query = graphql`
query MyQuery {
  allAirtable(filter: {table: {eq: "Company"}}) {
    nodes {
      table
      data {
        Company_Logo_Filename
        Description
        Name
      }
    }
  }
}
`;

export default UseCases;
