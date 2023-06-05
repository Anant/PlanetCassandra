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
        <meta name="author" content={"Planet Cassandra"} />
        <meta
          name="description"
          content="Welcome to Planet Cassandra! Stay updated with the latest news, tutorials, and resources about Cassandra, the distributed NoSQL database. Explore our articles, guides, and community to enhance your Cassandra expertise."
        />
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
          content="Welcome to Planet Cassandra! Stay updated with the latest news, tutorials, and resources about Cassandra, the distributed NoSQL database. Explore our articles, guides, and community to enhance your Cassandra expertise."
        />
        <meta
          property="og:image"
          content="https://planetcassandra-stage.netlify.app/static/8715e2d2275d886278d5bf60602d5315/38943/LogoWithText.webp"
        />

        {/* Other meta tags you may consider adding */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"Planet Cassandra"} />
        <meta
          name="twitter:description"
          content="Welcome to Planet Cassandra! Stay updated with the latest news, tutorials, and resources about Cassandra, the distributed NoSQL database. Explore our articles, guides, and community to enhance your Cassandra expertise."
        />
        <meta
          name="twitter:image"
          content="https://planetcassandra-stage.netlify.app/static/8715e2d2275d886278d5bf60602d5315/38943/LogoWithText.webp"
        />
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
