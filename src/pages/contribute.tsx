import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

import Layout from "../components/Layout/Layout";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const ContributePage: React.FC = () => {
  return (
    <Layout>
      <Grid container spacing={3} sx={{ padding: 10 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={1} sx={{ display: { xs: "none", md: "block" } }}>
            <StaticImage
              src="../images/contribute.png"
              alt="Contribute Image"
              placeholder="blurred"
              layout="fullWidth"
            />
          </Grid>

          <Grid item xs={10} md={5}>
            <Typography
              variant="h1"
              className="Font_Montserrat_Bold"
              sx={{ color: "#5ab1bb", fontSize: 30 }}
            >
              Contribute to Our Project
            </Typography>
            <Typography
              variant="body2"
              className="Font_Montserrat_550"
              color="text.secondary"
              sx={{ marginTop: 5 }}
            >
              Our project is open-source and always looking for new
              contributors. If you want to help us build a better product,
              you're in the right place! Please contribute and help us improve
              our project. We accept contributions in many forms including code,
              documentation, and bug reports. You can also donate to our project
              to show your support.
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} marginTop={3}>
          <Typography
            variant="h2"
            className="Font_Montserrat_Bold"
            sx={{ color: "#5ab1bb", fontSize: 20 }}
          >
            Ways to Contribute
          </Typography>
          <ul>
            <li>
              <Typography
                variant="body2"
                className="Font_Montserrat_550"
                color="text.secondary"
                sx={{ marginTop: 3 }}
              >
                <span style={{ fontWeight: "bold" }}>
                  Reporting bugs and creating issue reports:
                </span>{" "}
                If you encounter a bug or an issue in the project, you can
                report it to the project's maintainers, providing as much detail
                as possible to help them reproduce and fix the problem.
              </Typography>
            </li>
            <li>
              <Typography
                variant="body2"
                className="Font_Montserrat_550"
                color="text.secondary"
              >
                <span style={{ fontWeight: "bold" }}>
                  Contributing code fixes and improvements:{" "}
                </span>{" "}
                This involves writing code that fixes issues or adds new
                features to the project.
              </Typography>
            </li>
            <li>
              <Typography
                variant="body2"
                className="Font_Montserrat_550"
                color="text.secondary"
              >
                <span style={{ fontWeight: "bold" }}>
                  Improving the documentation:
                </span>{" "}
                You can help improve the project's documentation, by writing or
                editing content that helps users understand how to use the
                project or how it works.
              </Typography>
            </li>
            <li>
              <Typography
                variant="body2"
                className="Font_Montserrat_550"
                color="text.secondary"
              >
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  Spreading the word about our project:{" "}
                </span>
                Sharing the project on social media, participating in relevant
                online communities, and recommending the project to others who
                might be interested in contributing.
              </Typography>
            </li>
          </ul>
        </Grid>

        <Grid item xs={12} marginTop={3}>
          <Typography
            variant="h2"
            className="Font_Montserrat_Bold"
            sx={{ color: "#5ab1bb", fontSize: 20 }}
          >
            Get Involved
          </Typography>
          <Typography
            variant="body2"
            className="Font_Montserrat_550"
            color="text.secondary"
            sx={{ marginTop: 3 }}
          >
            If you're interested in contributing to our project, the first step
            is to get involved. Join our community and start contributing today!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Link style={{ textDecoration: "none" }} to="/contact">
            <Button
              sx={{
                borderRadius: 50,
                backgroundColor: "#5AB1BB",
                fontSize: 10,
                "&:hover": {
                  backgroundColor: "#344D67",
                },
              }}
              variant="contained"
              color="primary"
              size="large"
            >
              Join Our Community
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ContributePage;
