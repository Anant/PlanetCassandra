import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Card, Col, Row, Tag } from "antd";
import { Container, Grid } from "@mui/material";
import TagCard from "./TagCard";
import { IGatsbyImageData } from 'gatsby-plugin-image';
interface Props {
  tag: string;
  posts: {
    title: string;
    slug: string;
    author: {
      node: {
        name: string;
      };
    };
    featuredImage: {
      node: {
        localFile: {
          childImageSharp: {
            gatsbyImageData:IGatsbyImageData
          }
        };
      };
    };
    excerpt: string;
  }[];
}

const TagPosts: React.FC<Props> = ({ tag, posts }) => {
  return (
    <Grid rowSpacing={3} columnSpacing={3} container>
      {posts.length > 1
        ? posts.slice(0, 2).map((post) => (
            <Grid item xs={12} md={6} lg={6} key={post.title}>
              <TagCard post={post} />
            </Grid>
          ))
        : posts.map((post) => (
            <Grid item xs={12} md={6} lg={6} key={post.title}>
              <TagCard post={post} />
            </Grid>
          ))}
    </Grid>
  );
};

export default TagPosts;
