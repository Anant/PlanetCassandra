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
                  color: "#344D67",
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: { xs: "40px", md: "60px", lg: "60px" },
                }}
                fontFamily={"Montserrat,sans-serif"}
              >
                Something's missing?
              </Typography>
            </Box>
            <Box
              sx={{ marginY: { xs: "35px", md: "55px" }, width: { sm: "70%" } }}
            >
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontSize: { xs: "20px", sm: "18px", lg: "24px" },
                  fontWeight: 300,
                }}
                fontFamily={"Lato, sans-serif"}
              >
                Help us fill in the gaps!{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: 300,
                  marginTop: 1,
                  fontSize: { xs: "20px", sm: "18px", lg: "24px" },
                }}
                fontFamily={"Lato, sans-serif"}
              >
                Your contribution might be just what we need.
              </Typography>
              <Typography
                sx={{
                  color: "#344D67",
                  fontWeight: 600,
                  marginTop: 3,
                  fontSize: { xs: "20px", sm: "18px", lg: "32px" },
                }}
                fontFamily={"Lato, sans-serif"}
              >
                We build together!
              </Typography>
            </Box>
            <Box>
              <Link to={"/contribute"}>
                <Button
                  sx={{
                    width: { xs: "250px", lg: "350px", xl: "400px" },
                    textTransform: "capitalize",
                    borderRadius: "15px",
                    padding: { xs: "11px 30px", lg: "11px 55px" },
                    background: "#283B4F",
                    "&:hover": {
                      background: "#283B4F",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: { sm: "18px", xl: "27px" },
                    }}
                    fontFamily={"Open Sans,sans-serif"}
                  >
                    Become a contributor
                  </Typography>
                </Button>
              </Link>
            </Box>
            <Box sx={{ marginTop: 3 }}>
              <Link to={"/"}>
                <Button
                  sx={{
                    width: { xs: "250px", lg: "350px", xl: "400px" },
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
                      fontSize: { sm: "18px", xl: "27px" },
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
