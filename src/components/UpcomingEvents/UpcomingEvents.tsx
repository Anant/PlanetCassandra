import React from "react";
import { Grid, Typography, Button, Container, Box } from "@mui/material";
import EventCard from "../EventsCards/EventCard";
import AllEventsCard from "../EventsCards/AllEventsCard";
import { useStaticQuery, graphql } from "gatsby";
import "./index.css";
interface UseCasesData {
  allAirtable: {
    nodes: {
      table: string;
      data: {
        Title: string;
        Publish_date: Date;
        Eventbrite_Description: string;
      }
    }[];
  }
}

const UpcomingEvents = () => {
  const { allAirtable }: UseCasesData = useStaticQuery(query);
  const filteredAirtable = allAirtable.nodes.slice(0, 6).map(node => ({ Title: node.data.Title, Date: node.data.Publish_date, Description: node.data.Eventbrite_Description }));
  console.log(filteredAirtable)

  return (
    <Grid className="bgImage" container>
      <Container
        sx={{
          paddingY: 10,
        }}
      >
        <Typography
          sx={{ marginBottom: 3, textAlign: { xs: "center", md: "start" } }}
          color="white"
          variant="h4"
        >
          Upcoming Events :
        </Typography>
        <Grid rowSpacing={3} container>
          <Grid item xs={12} md={8}>
            <EventCard eventName={filteredAirtable[1].Title} eventDescription={filteredAirtable[1].Description} width="70%" />
          </Grid>
          <Grid item xs={12} md={4}>
            <AllEventsCard />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

const query = graphql`
query EventsData {
  allAirtable(
    filter: {table: {eq: "Content Production"}, data: {Title: {ne: null}, Publish_date: {ne: null}}}
    sort: {data: {Publish_date: DESC}}
  ) {
    nodes {
      table
      data {
        Title
        Publish_date
        Eventbrite_Description
      }
    }
  }
}
`;

export default UpcomingEvents;
