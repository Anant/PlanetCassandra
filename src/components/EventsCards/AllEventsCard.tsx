import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";

const data = [
  {
    title: "Planet.Cassandra Lunch #25",
    date: "January 03,2033",
    city: "New York,NYC",
    place: "The New York Public Library",
  },
  {
    title: "Planet.Cassandra Lunch #25",
    date: "January 03,2033",
    city: "New York,NYC",
    place: "The New York Public Library",
  },
  {
    title: "Planet.Cassandra Lunch #25",
    date: "January 03,2033",
    city: "New York,NYC",
    place: "The New York Public Library",
  },
  {
    title: "Planet.Cassandra Lunch #25",
    date: "January 03,2033",
    city: "New York,NYC",
    place: "The New York Public Library",
  },
];

const EventCard: React.FC = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 5,
        padding: 3,
        margin: { xs: "auto", md: 0 },
      }}
    >
      {data.map((event, key) => {
        return (
          <Box
            key={key}
            sx={{
              borderBottom: 1,
              padding: 1,
            }}
          >
            <Typography color="#5AB1BB">{event.title}</Typography>
            <Box>
              <Typography variant="subtitle2">
                {event.city} - {event.date}
              </Typography>
            </Box>
            <Typography variant="subtitle2">at {event.place}</Typography>
          </Box>
        );
      })}
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
  );
};

export default EventCard;
