import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Grid, Typography, Button, Container, Box } from "@mui/material";
import UseCaseCard from "../Cards/UseCaseCard";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface LogoFile {
  name: string;
  childrenImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  }[];
}

interface allAirtableData {
  allAirtable: {
    nodes: {
      table: string;
      data: {
        Case_Company: any;
        Case_Name: string;
        Case_Description: string;
        Case_URL: string;
      };
    }[];
  };
}

const UseCases = () => {
  const data = useStaticQuery(query);
  const allAirtable = data.allAirtable as allAirtableData["allAirtable"];
  const allFile = data.allFile.nodes as LogoFile[];

  const filteredAirtable = allAirtable.nodes.slice(0, 6).map((node) => {
    const companyName = node.data.Case_Company[0]?.data.Name.split(" ").join("").toLowerCase();
    const logoFile = allFile.find((file) => file.name === `case.logo.${companyName}`);

    return {
      ...node.data,
      gatsbyImageData: logoFile?.childrenImageSharp[0]?.gatsbyImageData || null,
    };
  });

  return (
    <Container
      sx={{
        paddingY: 10,
      }}
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
              url={useCase.Case_URL}
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
              backgroundColor: "#163BBF",
              fontSize: 10,
              "&:hover": {
                backgroundColor: "#163BBF",
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


export default UseCases;
