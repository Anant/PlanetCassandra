import React from 'react';
import { Grid, Typography, Button, Container, Box } from '@mui/material';
import EventCard from '../EventsCards/EventCard';
import AllEventsCard from '../EventsCards/AllEventsCard';
import './index.css';
const UpcomingEvents = () => {
  return (
    <Grid className="bgImage" container>
      <Container
        sx={{
          paddingY: 10,
        }}
      >
        <Typography
          sx={{ marginBottom: 3, textAlign: { xs: 'center', md: 'start' } }}
          color="white"
          variant="h4"
          className="Font_Poppins_Regular"
        >
          Upcoming Events :
        </Typography>
        <Grid rowSpacing={3} container>
          <Grid item xs={12} md={8}>
            <EventCard width="70%" />
          </Grid>
          <Grid item xs={12} md={4}>
            <AllEventsCard />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default UpcomingEvents;
