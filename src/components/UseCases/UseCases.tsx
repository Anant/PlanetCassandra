import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Grid, Typography, Button, Container, Box } from "@mui/material";
import UseCaseCard from "../Cards/UseCaseCard";
import { AiOutlineArrowRight } from "react-icons/ai";

interface allAirtableData {
  allAirtable: {
    nodes: {
      table: string;
      data: {
        Case_Company: any;
        Case_Name: string;
        Case_Description: string;
        Case_URL: string;
        ID_Case: number;
      };
      downloadedImages: any;
    }[];
  };
}

const UseCases = () => {
  const data = useStaticQuery(query);
  const allAirtable = data.allAirtable as allAirtableData["allAirtable"];

  const filteredAirtable = allAirtable.nodes.slice(0, 6).map((node) => {
    return {
      ...node.data,
      gatsbyImageData:
        node.downloadedImages[0].childImageSharp.gatsbyImageData || null,
    };
  });

  return (
    <Container
      sx={{
        paddingY: 10,
      }}
      maxWidth="xl"
    >
      <Typography
        sx={{
          fontSize: 39,
          marginBottom: 3,
          textAlign: { xs: "center", md: "start" },
        }}
        color="#344D67"
        variant="h4"
        className="Font_Poppins_Bold"
      >
        Cassandra Use Cases
      </Typography>
      <Grid rowSpacing={3} columnSpacing={3} container>
        {filteredAirtable.map((useCase) => (
          <Grid item xs={12} md={6} key={useCase.Case_Name}>
            <UseCaseCard
              name={useCase.Case_Name}
              description={useCase.Case_Description}
              ID_Case={useCase.ID_Case}
              gatsbyImageData={useCase.gatsbyImageData}
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
                backgroundColor: "#163BBF",
              },
            }}
            variant="contained"
          >
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              className="Font_Mulish_Button_M"
            >
              See all use cases{" "}
              <AiOutlineArrowRight style={{ marginLeft: "8px" }} />
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Container>
  );
};

const query = graphql`
  query UseCasesDataHomepage {
    allAirtable(
      filter: { table: { eq: "Cases" } }
      sort: { data: { Case_Published: DESC } }
    ) {
      nodes {
        table
        data {
          Case_URL
          Case_Name
          Case_Description
          ID_Case
          Case_Company {
            data {
              Name
            }
          }
        }
        downloadedImages {
          id
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default UseCases;
