import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
} from "@mui/material";

import Layout from "../components/Layout/Layout";
import { Link } from "gatsby";

const ContributePage: React.FC = () => {
  return (
    <Layout>
      <Grid container spacing={3} sx={{ padding: 10 }}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
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
            Our project is open-source and always looking for new contributors.
            If you want to help us build a better product, you're in the right
            place!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h3"
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
                Reporting bugs and creating issue reports
              </Typography>
            </li>
            <li>
              <Typography
                variant="body2"
                className="Font_Montserrat_550"
                color="text.secondary"
              >
                Contributing code fixes and improvements
              </Typography>
            </li>
            <li>
              <Typography
                variant="body2"
                className="Font_Montserrat_550"
                color="text.secondary"
              >
                Improving the documentation
              </Typography>
            </li>
            <li>
              <Typography
                variant="body2"
                className="Font_Montserrat_550"
                color="text.secondary"
              >
                Spreading the word about our project and helping us grow the
                community
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h3"
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
          <Link style={{ textDecoration: "none" }} to="/contactus">
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



