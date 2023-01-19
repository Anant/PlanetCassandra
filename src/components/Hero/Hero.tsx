import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import { Grid, Typography, Button, Container } from '@mui/material'
import Carousel from './Carousel/Carousel';

interface AllWpPostData {
    allWpPost: {
        nodes: {
            title: string;
            slug: string;
            featuredImage: {
                node: {
                    publicUrl: string;
                }
            }
        }[]
    }
}


const HeroSection = () => {

    const { allWpPost } = useStaticQuery(query);

    //Mapping the results from the query and skiping the ones that don't have an image
    const items = allWpPost.nodes.map(({ title, featuredImage, slug }: { title: string; slug:string; featuredImage: { node: { publicUrl: string } } }) => ({
        title,
        image: featuredImage?.node?.publicUrl,
        slug
    }));

    return (
        <Container>
        <Grid container maxWidth="lg">
            <Grid item xs={12} md={6}>
                <Typography variant="h3" component="h1">
                    Welcome to Planet Cassandra
                </Typography>
                <Typography variant="subtitle1">
                    The best knowledge base on Apache Cassandra to help platform leaders, architects, engineers, and operators to build scalable platforms
                </Typography>
                <Button variant="contained" color="primary">
                    Get Started
                </Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <Carousel items={items} />
            </Grid>
        </Grid>
        </Container>
    )
}

export const query = graphql`
query GET_POSTS {
    allWpPost {
      nodes {
        title
        slug
        featuredImage {
          node {
            publicUrl
          }
        }
      }
    }
  }
`;

export default HeroSection;