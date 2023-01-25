import React from "react";
import { Grid, Typography, Button, Container, Box } from "@mui/material";
import EventCard from "../EventsCards/EventCard";
const UseCases = () => {
  const cases = [1, 2, 3, 4, 5, 6];
  return (
    <Grid container>
      <Container
        sx={{
          paddingY: 10,
        }}
      >
        <Typography
          sx={{ marginBottom: 3, textAlign: { xs: "center", md: "start" } }}
          color="black"
          variant="h4"
        >
          Cassandra Use Cases :
        </Typography>
        <Grid rowSpacing={3} columnSpacing={3} container>
          {cases.map((useCase) => (
            <Grid item xs={12} md={6} key={useCase}>
              <EventCard width={"100%"} />
            </Grid>
          ))}
        </Grid>
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
            See all use cases
          </Button>
        </Grid>
      </Container>
    </Grid>
  );
};

export default UseCases;
