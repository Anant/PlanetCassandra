import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Grid } from "@mui/material";

import HeroSection from "../components/Hero/Hero";
import DidYouKnowSection from "../components/DYK Section/DYK";
import Layout from "../components/Layout/Layout";
import TagSection from "../components/TagSection/TagSection";
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents";
import UseCases from "../components/UseCases/UseCases";
import YoutubeSection from "../components/YoutubeSection/YoutubeSection";
import Footer from "../components/Footer/Footer";
import CommunitySection from "../components/CommunitySection/CommunitySection";
import { useStaticQuery, graphql } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Grid container>
        <Grid item xs={12}>
          <HeroSection />
        </Grid>
        <Grid item xs={12}>
          <DidYouKnowSection />
        </Grid>
        <Grid item xs={12}>
          <TagSection />
        </Grid>
        <Grid item xs={12}>
          <UpcomingEvents />
        </Grid>
        <Grid item xs={12}>
          <UseCases />
        </Grid>
        <Grid item xs={12}>
          <YoutubeSection />
        </Grid>
        <Grid item xs={12}>
          <CommunitySection />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
