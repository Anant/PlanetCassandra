import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Grid, Typography, Button, Container, Box } from "@mui/material";
import Carousel from "./Carousel/Carousel";
import SendIcon from "@mui/icons-material/Send";
import NewCarousel from "./Carousel/newCarousel";
import { Link } from "gatsby";

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
              gatsbyImageData: string;
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
      image: featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
      slug,
    })
  );

  return (
    <Container sx={{ paddingY: 10 }}>
      <Grid
        justifyContent="center"
        alignItems="center"
        rowSpacing={5}
        container
        maxWidth="lg"
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            component="h1"
            className="Font_Poppins_Regular"
          >
            Welcome to
          </Typography>
          <Grid container>
            <Typography
              fontWeight={"bold"}
              color="#344D67"
              component="h1"
              variant="h3"
              gutterBottom
              className="Font_Poppins_Bold"
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
              className="Font_Poppins_Bold"
            >
              Cassandra
            </Typography>
          </Grid>
          <Typography
            sx={{
              marginTop: 5,
              fontSize: 20
            }}
            variant="subtitle1"
            className="Font_Lato_Bold"
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
            <Link style={{ textDecoration: "none", color: "white" }} to={`https://www.datastax.com/dev/academy`}>
              <Button
                sx={{
                  fontSize: {xs:11, sm: 12, md: 14, lg: 16},
                  borderRadius: 50,
                  backgroundColor: "#5AB1BB",
                }}
                variant="contained"
                endIcon={<SendIcon />}
                className="Font_Mulish_Button_L"
              >

                Get Started
              </Button>
            </Link>
            <Link style={{ textDecoration: "none", color: "white" }} to={`https://www.datastax.com/contact-us`}>
            <Button
              sx={{
                fontSize: {xs:11, sm: 12, md: 14, lg: 16},
                borderRadius: 50,
                marginLeft: 10,
                backgroundColor: "#344D67",
              }}
              variant="contained"
              endIcon={<SendIcon />}
              className="Font_Mulish_Button_L"
            >
              Meet with us
            </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <Carousel items={items} /> */}
          <NewCarousel items={items.slice(0, 4)} />
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
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

export default HeroSection;
