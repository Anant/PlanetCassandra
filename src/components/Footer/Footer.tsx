import React from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { Input, ConfigProvider } from "antd";
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  const { Search } = Input;

  return (
    <Container>
      <Grid
        sx={{
          height: 700,
        }}
        justifyContent="center"
        alignItems="center"
        container
        maxWidth="lg"
      >
        <Grid
          sx={{ textAlign: { xs: "center", md: "start" } }}
          item
          xs={12}
          md={6}
        >
          <StaticImage
            src="../../images/GrayLogoWithText.png"
            alt="A dinosaur"
            placeholder="blurred"
            height={60}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 5,
              width: "60%",
              marginInline: { xs: "auto", md: 0 },
            }}
          >
            <Typography color={"white"}>What's New?</Typography>
            <Typography color={"white"}>Events</Typography>
            <Typography color={"white"}>Use Cases</Typography>
          </Box>
          <Typography
            sx={{
              marginTop: 5,
            }}
            color="#5AB1BB"
            variant="subtitle1"
          >
            Planet Cassandra is a hub for all things Apache Cassandra.
            From tutorials and guides, to discussions and updates, we're here to help you get the most out of Cassandra. 
            Connect with us and become part of our growing community today
          </Typography>
          <Typography
            sx={{
              fontSize: 12,
              marginTop: 10,
            }}
            color={"white"}
            variant="subtitle1"
          >
            All logos, trademarks and registered trademarks are the property of
            their respective owners.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#5AB1BB",
              padding: 3,
              borderRadius: 5,
              width: "50%",
              margin: "auto",
            }}
          >
            <Typography marginBottom={2} variant="h4" color={"white"}>
              Stay Tuned!
            </Typography>
            <Typography variant="subtitle2" color={"black"}>
              Sign up to our newsletter and never miss out on anything related
              to Cassandra.
            </Typography>
            <Typography variant="subtitle2" color={"black"}>
              Our newsletter is sent once a week, every Thursday
            </Typography>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#344D67",
                },
              }}
            >
              <Search
                style={{ marginTop: 10 }}
                placeholder="Email Adress..."
                enterButton={<AiOutlineSend color="#5AB1BB" />}
              />
            </ConfigProvider>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
