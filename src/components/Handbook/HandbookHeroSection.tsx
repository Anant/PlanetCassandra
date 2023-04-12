import React from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

const HandbookHeroSection: React.FC = () => {
  return (
    <Grid
      sx={{
        background: "#EEEEEE",
        paddingY: 5,
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          sx={{
            paddingY: 1,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} sm={6}>
            <Typography
              sx={{
                color: "#5AB1BB",
                fontSize: { xs: 20, sm: 25, lg: 60 },
                textAlign: { xs: "center", sm: "start" },
                textTransform: { xs: "uppercase", sm: "capitalize" },
              }}
              component="h1"
              fontFamily="Roboto Condensed, sans-serif"
              fontWeight={700}
            >
              Apache Cassandra®
            </Typography>
            <Typography
              sx={{
                color: "#383D3B",
                fontSize: { xs: 20, sm: 25, lg: 60 },
                textAlign: { xs: "center", sm: "start" },
                textTransform: { xs: "uppercase", sm: "capitalize" },
              }}
              component="h1"
              fontFamily="Roboto Condensed, sans-serif"
              fontWeight={700}
            >
              Meetup Organiser Handbook
            </Typography>

            <Box
              sx={{
                display: { xs: "flex", sm: "none" },
                justifyContent: "center",
                marginY: 3,
              }}
            >
              <StaticImage
                style={{ width: "70%" }}
                src="../../images/HandbookHero.png"
                alt="Illustration Image"
              />{" "}
            </Box>
            <Typography
              sx={{
                marginTop: { xs: 5, sm: 2, lg: 5 },
                color: "#383D3B",
                fontSize: { xs: 16, sm: 10, md: 25 },
              }}
              fontFamily="Roboto Condensed, sans-serif"
              fontWeight={400}
            >
              Organising events for your local Apache Cassandra® meetup is a
              rewarding experience and a great way of giving back to your local
              community while enhancing your own learning. Anyone can organise
              local Cassandra events so long as they are familiar with using
              Cassandra and follow these guidelines.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              justifyContent: "flex-end",
              alignItems: "center",
              display: { xs: "none", sm: "flex" },
            }}
          >
            <StaticImage
              style={{ width: "85%" }}
              src="../../images/HandbookHero.png"
              alt="Illustration Image"
            />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default HandbookHeroSection;
