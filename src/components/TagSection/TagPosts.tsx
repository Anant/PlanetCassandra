import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Card, Col, Row, Tag } from "antd";
import { Container, Grid } from "@mui/material";
import TagCard from "./TagCard";
interface Props {
  tag: string;
  posts: {
    title: string;
  }[];
}

const TagPosts: React.FC<Props> = ({ tag, posts }) => {
  return (
    <Grid rowSpacing={3} columnSpacing={3} container>
      {posts.map((post) => (
        <Grid item xs={4} key={post.title}>
          <TagCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TagPosts;
