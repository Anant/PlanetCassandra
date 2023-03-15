import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Grid, Typography, Button, Container, Box } from "@mui/material";
import UseCaseCard from "../Cards/UseCaseCard";

interface allAirtableData {
  allAirtable: {
    nodes: {
      table: string;
      data: {
        Case_Name: string;
        Case_Description: string;
        Case_URL: string;
      };
    }[];
  };
}

const UseCases = () => {
  const { allAirtable }: allAirtableData = useStaticQuery(query);
  const filteredAirtable = allAirtable.nodes.slice(0, 6).map((node) => ({
    Name: node.data.Case_Name,
    Description: node.data.Case_Description,
    Case_URL: node.data.Case_URL,
  }));

  return (
    <Container
      sx={{
        paddingY: 10,
      }}
    >
      <Typography
        sx={{ fontSize:39 , marginBottom: 3, textAlign: { xs: "center", md: "start" } }}
        color="#344D67"
        variant="h4"
        className="Font_Poppins_Bold"
      >
        Cassandra Use Cases
      </Typography>
      <Grid rowSpacing={3} columnSpacing={3} container>
        {filteredAirtable.map((useCase) => (
          <Grid item xs={12} md={6} key={useCase.Name}>
            <UseCaseCard
              name={useCase.Name}
              description={useCase.Description}
              url={useCase.Case_URL}
            />
          </Grid>
        ))}
      </Grid>
      <Grid marginTop={2} container justifyContent="end">
        <Link style={{ textDecoration: "none" }} to={`/usecases`}>
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
            <Typography className="Font_Mulish_Button_M">
            See all use cases
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Container>
  );
};

const query = graphql`
  query UseCasesDataHomepage {
    allAirtable(filter: { table: { eq: "Cases" } }) {
      nodes {
        table
        data {
          Case_URL
          Case_Name
          Case_Description
        }
      }
    }
  }
`;

export default UseCases;
