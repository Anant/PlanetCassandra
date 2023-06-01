import React from "react";
import Layout from "../components/Layout/Layout";
import { Grid, Box, Typography, Button, Container } from "@mui/material";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
const NotFoundPage = () => (
  <Layout>
    <Container maxWidth="xl">
      <Grid
        container
        maxWidth={"xl"}
        sx={{
          mx: "auto",
          width: { xs: "90%", xl: "100%" },
          display: "flex",
          alignItems: "center",
          paddingY: { xs: "50px", lg: "120px" },
        }}
      >
        <Grid item xs={12} sm={6}>
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Box>
              <Typography
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 700,
                  fontSize: { xs: "50px", md: "60px", lg: "83px" },
                }}
                fontFamily={"Poppins,sans-serif"}
              >
                404
              </Typography>
              <Typography
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 700,
                  fontSize: { xs: "50px", md: "60px", lg: "83px" },
                }}
                fontFamily={"Poppins,sans-serif"}
              >
                error page{" "}
              </Typography>
            </Box>
            <Box
              sx={{ marginY: { xs: "35px", md: "55px" }, width: { sm: "70%" } }}
            >
              <Typography
                sx={{ fontSize: { xs: "20px", sm: "18px", lg: "24px" } }}
                fontFamily={"Poppins, sans-serif"}
              >
                Oops, the page you're looking for can't be found!
              </Typography>
            </Box>
            <Box>
              <Link to={"/"}>
                <Button
                  sx={{
                    textTransform: "capitalize",
                    borderRadius: "15px",
                    padding: { xs: "11px 30px", lg: "11px 55px" },
                    background: "#5AB1BB",
                    "&:hover": {
                      background: "#5AB1BB",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: { sm: "18px", xl: "28px" },
                    }}
                    fontFamily={"Open Sans,sans-serif"}
                  >
                    back to homepage
                  </Typography>
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ marginY: { xs: "50px", lg: "0px" } }}>
          <Box>
            <StaticImage src={"../images/404.svg"} alt="ErrorBannerImg" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Layout>
);
export default NotFoundPage;
