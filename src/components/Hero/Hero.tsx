import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Grid, Typography, Button, Container, Box } from "@mui/material";
import Carousel from "./Carousel/Carousel";
import SendIcon from "@mui/icons-material/Send";

interface AllWpPostData {
  allWpPost: {
    nodes: {
      title: string;
      slug: string;
      featuredImage: {
        node: {
          publicUrl: string;
          localFile: {
            relativePath: string;
            childImageSharp: {
              fluid: {
                src: string;
              };
            };
          };
        };
      };
    }[];
  };
}

const HeroSection = () => {
  const { allWpPost } = useStaticQuery(query);

  //Mapping the results from the query and skiping the ones that don't have an image
  const items = allWpPost.nodes.map(
    ({
      title,
      featuredImage,
      slug,
    }: AllWpPostData["allWpPost"]["nodes"][0]) => ({
      title,
      image: featuredImage?.node?.localFile?.childImageSharp?.fluid?.src,
      slug,
    })
  );

  return (
    <Container>
      <Grid
        sx={{
          height: 700,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        container
        maxWidth="lg"
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1">
            Welcome to
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              fontWeight={"bold"}
              color="#344D67"
              component="h1"
              variant="h3"
              gutterBottom
            >
              Planet.
            </Typography>
            <Typography
              fontWeight={"bold"}
              component="h1"
              variant="h3"
              color="#5AB1BB"
              align={"center"}
              gutterBottom
            >
              Cassandra
            </Typography>
          </Box>
          <Typography
            sx={{
              marginTop: 5,
            }}
            variant="subtitle1"
          >
            The best knowledge base on Apache Cassandra to help platform
            leaders, architects, engineers, and operators to build scalable
            platforms
          </Typography>
          <Box
            sx={{
              marginTop: 5,
            }}
          >
            <Button
              sx={{
                borderRadius: 50,
                backgroundColor: "#5AB1BB",
              }}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Get Started
            </Button>
            <Button
              sx={{
                borderRadius: 50,
                marginLeft: 10,
                backgroundColor: "#344D67",
              }}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Meet with us
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Carousel items={items} />
        </Grid>
      </Grid>
    </Container>
  );
};

export const query = graphql`
  query GET_POSTS {
    allWpPost {
      nodes {
        title
        slug
        featuredImage {
          node {
            publicUrl
            localFile {
              relativePath
              childImageSharp {
                fluid(maxWidth: 800) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default HeroSection;
