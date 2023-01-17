import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HeroSection from "../components/Hero/Hero";
import DidYouKnowSection from "../components/DYK Section/DYK";
import Layout from "../components/Layout/Layout";
import { useStaticQuery, graphql } from "gatsby"
import { Grid } from "@mui/material";


const IndexPage: React.FC<PageProps> = () => {
  

  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <HeroSection />
        </Grid>
        <Grid item xs={12}>
          <DidYouKnowSection />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
;
