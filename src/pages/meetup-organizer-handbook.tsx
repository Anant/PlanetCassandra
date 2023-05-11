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
const HandbookPage = () => {
  return (
    <Layout>
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
