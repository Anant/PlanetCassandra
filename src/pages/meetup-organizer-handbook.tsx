import React from "react";
import { Grid, Container } from "@mui/material";
import Layout from "../components/Layout/Layout";
import HandbookHeroSection from "../components/Handbook/HandbookHeroSection";
import HandbookContribute from "../components/Handbook/HandbookContribute";

import PrimeDirective from "../components/Handbook/PrimeDirective";
import BecomeAnOrganizer from "../components/Handbook/BecomeAnOrganizer";
import PromotingEvents from "../components/Handbook/PromotingEvents";
import BuildingTeam from "../components/Handbook/BuildingTeam";
import SelectingSpeakers from "../components/Handbook/SelectingSpeakers";
import FindingSponsors from "../components/Handbook/FindingSponsors";
import FindingVenue from "../components/Handbook/FindingVenue";
import OnlineEvents from "../components/Handbook/OnlineEvent";
import ProducingSwag from "../components/Handbook/ProducingSwag";
import CodeOfConduct from "../components/Handbook/CodeOfConduct";
import RecordingContent from "../components/Handbook/RecordingContent";
import OrganisingEvents from "../components/Handbook/OrganisingEvents";
import { Helmet } from "react-helmet";
const HandbookPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Handbook - Planet Cassandra</title>
        <meta property="og:image" content="../images/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={"Planet Cassandra"} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://planetcassandra.org/",
            "@type": "WebPage",
            name: "Handbook - Planet Cassandra",
            keywords: "Handbook - Planet Cassandra",
            author: {
              "@type": "Organization",
              name: "Handbook - Planet Cassandra",
            },
          })}
        </script>
        {/* Open Graph */}
        <meta property="og:title" content={"Handbook - Planet Cassandra"} />
        {/* Other meta tags you may consider adding */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"Handbook - Planet Cassandra"} />
        <meta name="twitter:image" content={"../../images/icon.png"} />
      </Helmet>
      <Grid container>
        <Grid item xs={12}>
          <HandbookHeroSection />
        </Grid>
        <Grid item sx={{ marginY: 5 }} xs={12}>
          <Container maxWidth="xl">
            <PrimeDirective />
            <BecomeAnOrganizer />
            <OrganisingEvents />
            <BuildingTeam />
            <PromotingEvents />
            <SelectingSpeakers />
            <FindingSponsors />
            <FindingVenue />
            <OnlineEvents />
            <ProducingSwag />
            <RecordingContent />
            <CodeOfConduct />
          </Container>
        </Grid>
        <Grid item xs={12}>
          <HandbookContribute />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HandbookPage;
