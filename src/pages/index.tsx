import * as React from "react";
import "../styles/global.css";
import type { HeadFC, PageProps } from "gatsby";
import { Container, Grid } from "@mui/material";
import HeroSection from "../components/Hero/Hero";
import DidYouKnowSection from "../components/DYK Section/DYK";
import Layout from "../components/Layout/Layout";
import TagSection from "../components/TagSection/TagSection";
import UseCases from "../components/UseCases/UseCases";
import YoutubeSection from "../components/YoutubeSection/YoutubeSection";
//@ts-ignore
import { Helmet } from "react-helmet";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Helmet>
        <title>Planet Cassandra</title>
        <meta property="og:image" content="../images/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={"Planet Cassandra"} />
        <meta name="author" content={"Planet Cassandra"} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://planetcassandra.org/",
            "@type": "WebPage",
            name: "Planet Cassandra",
            keywords: "Planet Cassandra",
            author: {
              "@type": "Organization",
              name: "Planet Cassandra",
            },
          })}
        </script>
        {/* Open Graph */}
        <meta property="og:title" content={"Planet Cassandra"} />
        <meta
          property="og:description"
          content="Stay updated with the latest events and happenings related to Cassandra database on Planet Cassandra. Discover upcoming events, conferences, webinars, meetups, and other activities related to Cassandra and NoSQL database community."
        />
        {/* Other meta tags you may consider adding */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"Planet Cassandra"} />
        <meta name="twitter:image" content={"../../images/icon.png"} />
      </Helmet>
      <Grid container>
        <Grid className="heroBgImage" item xs={12}>
          <HeroSection />
        </Grid>
        <Grid item xs={12}>
          <DidYouKnowSection />
        </Grid>
        <Grid className="tagSectionBgImage" item xs={12}>
          <TagSection />
        </Grid>
        {/* <Grid className="eventsBgImage" item xs={12}>
            <UpcomingEvents />
          </Grid> */}
        <Grid className="useCasesBgImage" item xs={12}>
          <UseCases />
        </Grid>
        <Grid item xs={12}>
          <YoutubeSection />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Planet Cassandra</title>;
