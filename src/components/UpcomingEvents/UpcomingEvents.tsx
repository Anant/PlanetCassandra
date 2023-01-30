import React from "react";
import { Grid, Typography, Button, Container, Box, Card } from "@mui/material";
import EventCard from "../EventsCards/EventCard";
import AllEventsCard from "../EventsCards/AllEventsCard";
import { useStaticQuery, graphql } from "gatsby";
interface UseCasesData {
  allAirtable: {
    nodes: {
      table: string;
      data: {
        Title: string;
        Publish_date: string;
        Eventbrite_Description: string;
        Cover_Image: {
          url: string;
        }[];
      }
    }[];
  }
}

const UpcomingEvents = () => {
  const { allAirtable }: UseCasesData = useStaticQuery(query);
  const filteredAirtable = allAirtable.nodes.slice(0, 6).map(node => ({
    Title: node.data.Title,
    Date: node.data.Publish_date,
    Description: node.data.Eventbrite_Description,
    ImageUrl: node.data.Cover_Image[0].url
  }));

  return (
    <Container sx={{ paddingY: 10 }}>
      <Typography
        sx={{ marginBottom: 3, textAlign: { xs: "center", md: "start" } }}
        color="white"
        variant="h4"
        className="Font_Poppins_Regular"
      >
        Upcoming Events:
      </Typography>
      <Grid rowSpacing={3} container>
        <Grid item xs={12} md={8}>
          <EventCard
            eventName={filteredAirtable[0].Title}
            eventDescription={
              filteredAirtable[0].Description.length > 200
                ? filteredAirtable[0].Description.substr(0, 200) + "..."
                : filteredAirtable[0].Description
            }
            width="70%"
            eventImg={filteredAirtable[0].ImageUrl}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 345, borderRadius: 5, padding: 3, margin: { xs: "auto", md: 0 } }}>
            {filteredAirtable.slice(1).map((event, key) => (
              <AllEventsCard key={key} title={event.Title} date={event.Date} />
            ))}
            <Grid marginTop={2} container justifyContent="end">
              <Button
                sx={{
                  borderRadius: 50,
                  backgroundColor: "#F2545B",
                  fontSize: 10,
                  "&:hover": {
                    backgroundColor: "#F2545B",
                  },
                }}
                variant="contained"
              >
                See all events
              </Button>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

const query = graphql`
query EventsData {
  allAirtable(
    filter: {table: {eq: "Content Production"}, data: {Title: {ne: null}, Publish_date: {ne: null}, Cover_Image: {elemMatch: {url: {ne: null}}}}}
    sort: {data: {Publish_date: DESC}}
  ) {
    nodes {
      table
      data {
        Title
        Publish_date
        Eventbrite_Description
        Cover_Image {
          url
        }
      }
    }
  }
}
`;

export default UpcomingEvents;
