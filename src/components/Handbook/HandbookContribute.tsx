import React from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

const HandbookContribute: React.FC = () => {
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
                color: "#1E1E1E",
                fontSize: { xs: 20, sm: 25, lg: 60 },
                textAlign: { xs: "center", sm: "start" },
                textTransform: { xs: "uppercase", sm: "capitalize" },
              }}
              component="h1"
              fontFamily="Roboto Condensed, sans-serif"
              fontWeight={700}
            >
              Contribute to <span style={{ color: "#344D67" }}>Our</span>{" "}
              <span style={{ color: "#5AB1BB" }}>Project</span>
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
                src="../../images/HandbookContribute.png"
                alt="Illustration Image"
              />{" "}
            </Box>
            <Typography
              sx={{
                marginTop: { xs: 5, sm: 2, lg: 5 },
                color: "#383D3B",
                fontSize: { xs: 16, sm: 10, md: 22 },
              }}
              fontFamily="Roboto Condensed, sans-serif"
              fontWeight={400}
            >
              Our project is open-source and always looking for new
              contributors. If you want to help us build a better product,
              you're in the right place! Please contribute and help us improve
              our project. We accept contributions in many forms including code,
              documentation, and bug reports. You can also donate to our project
              to show your support.
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
              src="../../images/HandbookContribute.png"
              alt="Illustration Image"
            />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default HandbookContribute;
