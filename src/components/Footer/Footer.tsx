import React from "react";
import { Grid, Typography, Container, Box, Button } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { Input, ConfigProvider } from "antd";
import { AiOutlineSend } from "react-icons/ai";
import { Link } from "gatsby";

const Footer = () => {
  const { Search } = Input;

  return (
    <Container>
      <Grid
        sx={{
          height: 700,
        }}
        spacing={5}
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
          {/* <Box
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
          </Box> */}
          <Typography
            sx={{
              marginTop: 5,
            }}
            color="#5AB1BB"
            variant="subtitle1"
          >
            Planet Cassandra is a hub for all things Apache Cassandra. From
            tutorials and guides, to discussions and updates, we're here to help
            you get the most out of Cassandra. Connect with us and become part
            of our growing community today
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
              margin: "auto",
            }}
          >
            <Typography marginBottom={2} variant="h4" color={"white"}>
              Get Involved!
            </Typography>
            <Typography variant="subtitle2" color={"black"}>
              Get involved with the Apache Cassandra community. You can get on
              Discord or Slack to chat with the community in realtime or stay up
              to date on the User / Dev mailing lists.
            </Typography>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`https://cassandra.apache.org/_/community.html`}
            >
              <Button
                sx={{
                  fontSize: { xs: 11, sm: 15, md: 12, lg: 14 },
                  borderRadius: 50,
                  margin: 2,
                  backgroundColor: "#344D67",
                }}
                variant="contained"
                className="Font_Mulish_Button_L"
              >
                Cassandra Community
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
