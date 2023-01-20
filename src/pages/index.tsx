import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import HeroSection from "../components/Hero/Hero";
import DidYouKnowSection from "../components/DYK Section/DYK";
import Layout from "../components/Layout/Layout";
import TagSection from "../components/TagSection/TagSection";
import { useStaticQuery, graphql } from "gatsby";
import { Grid } from "@mui/material";

const IndexPage: React.FC<PageProps> = () => {
  const tags = ["tag1", "tag2", "tag3"];
  const data = [
    { id: "1", title: "Title 1", tag: "tag1" },
    { id: "2", title: "Title 2", tag: "tag2" },
    { id: "3", title: "Title 3", tag: "tag3" },
    { id: "4", title: "Title 4", tag: "tag1" },
  ];

  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <HeroSection />
        </Grid>
        <Grid item xs={12}>
          <DidYouKnowSection />
        </Grid>
        <Grid item xs={12}>
          <TagSection tags={tags} data={data} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
