import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Grid, Typography, Button, Container, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import HomeCarousel from "./Carousel/Carousel";
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
    <Container maxWidth="xl" sx={{ paddingY: 10 }}>
      <Grid
        justifyContent="center"
        alignItems="center"
        rowSpacing={5}
        container
        maxWidth="xl"
      >
        <Grid item xs={12} md={6}>
          <Typography
            fontSize={60}
            variant="h3"
            component="h1"
            className="Font_Poppins_Regular"
          >
            Welcome to
          </Typography>
          <Grid container>
            <Typography
              fontWeight={"bold"}
              fontSize={60}
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
              fontSize={60}
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
              fontSize: 20,
              width: "80%",
            }}
            variant="subtitle1"
            className="Font_Lato_Bold"
          >
          Apache Cassandra® a robust and active community of users and developers,
          who contribute to its development and use it in a variety of
          applications, ranging from e-commerce to real-time analytics.{" "}
          </Typography>
          <Box
            sx={{
              marginTop: 5,
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/usecases`}
            >
              <Button
                sx={{
                  fontSize: { xs: 11, sm: 12, md: 14, lg: 16 },
                  borderRadius: 50,
                  backgroundColor: "#5AB1BB",
                }}
                variant="contained"
                endIcon={<SendIcon />}
                className="Font_Mulish_Button_L"
              >
                Use Cases
              </Button>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/leaves`}
            >
              <Button
                sx={{
                  fontSize: { xs: 11, sm: 12, md: 14, lg: 16 },
                  borderRadius: 50,
                  marginLeft: 3,
                  backgroundColor: "#344D67",
                }}
                variant="contained"
                endIcon={<SendIcon />}
                className="Font_Mulish_Button_L"
              >
                Links
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <HomeCarousel items={items.slice(0, 4)} />
        </Grid>
      </Grid>
    </Container>
  );
};

export const query = graphql`
  query GET_POSTS {
    allWpPost(
      filter: {
        authorId: { ne: "dXNlcjoy" }
        tags: { nodes: { elemMatch: { name: { eq: "featured" } } } }
      }
    ) {
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
        tags {
          nodes {
            name
          }
        }
      }
    }
  }
`;

export default HeroSection;
