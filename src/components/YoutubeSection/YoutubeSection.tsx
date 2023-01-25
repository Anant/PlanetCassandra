import React from "react";
import { Grid, Typography, Container } from "@mui/material";

const YoutubeSection = () => {
  return (
    <Grid sx={{ backgroundColor: "#F9F8F8", paddingY: 10 }}>
      <Container>
        <Grid
          justifyContent="center"
          alignItems="center"
          container
          maxWidth="lg"
          rowSpacing={3}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1">
              Want to become a
            </Typography>
            <Grid container>
              <Typography
                fontWeight={"bold"}
                color="#344D67"
                component="h1"
                variant="h3"
                gutterBottom
              >
                pro in
              </Typography>
              <Typography
                marginLeft={2}
                fontWeight={"bold"}
                component="h1"
                variant="h3"
                color="#5AB1BB"
                align={"center"}
                gutterBottom
              >
                Cassandra?
              </Typography>
            </Grid>
            <Typography
              sx={{
                marginTop: 5,
              }}
              variant="subtitle1"
            >
              Visit our YouTube channel and look through our extensive library
              of tutorials, quick fixes, pro tips, tricks and lunch ideas from
              some of the biggest personalities in the industry.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <iframe
              id="player"
              width="600"
              height="300"
              src="https://www.youtube.com/embed/yQCDZDUzRJM"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default YoutubeSection;
