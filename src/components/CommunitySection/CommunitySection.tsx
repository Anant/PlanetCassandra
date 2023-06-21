import React from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import {
  BsSlack,
  BsYoutube,
  BsTwitch,
  BsStackOverflow,
  BsGithub,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { FaDiscord } from "react-icons/fa";

const CommunitySection = () => {
  const socialIcons = [
    // { name: "Slack", url: "Hide", icon: <BsSlack style={{ cursor: 'pointer' }} color="#FFFFFF" size="32px" /> },
    {
      name: "Discord",
      url: "https://discord.com/invite/pPjPcZN",
      icon: (
        <FaDiscord style={{ cursor: "pointer" }} color="#FFFFFF" size="32px" />
      ),
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/@PlanetCassandra",
      icon: (
        <BsYoutube style={{ cursor: "pointer" }} color="#FFFFFF" size="32px" />
      ),
    },
    {
      name: "Github",
      url: "https://github.com/PlanetCassandra",
      icon: (
        <BsGithub style={{ cursor: "pointer" }} color="#FFFFFF" size="32px" />
      ),
    },
    {
      name: "Twitch",
      url: "Hide",
      icon: (
        <BsTwitch style={{ cursor: "pointer" }} color="#FFFFFF" size="32px" />
      ),
    },
    {
      name: "Stackoverflow",
      url: "https://stackoverflow.com/questions/tagged/cassandra",
      icon: (
        <BsStackOverflow
          style={{ cursor: "pointer" }}
          color="#FFFFFF"
          size="32px"
        />
      ),
    },
    {
      name: "Twitter",
      url: "https://twitter.com/PlanetCassandra",
      icon: (
        <BsTwitter style={{ cursor: "pointer" }} color="#FFFFFF" size="32px" />
      ),
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/company/apache-cassandra/",
      icon: (
        <BsLinkedin style={{ cursor: "pointer" }} color="#FFFFFF" size="32px" />
      ),
    },
    // { name: "Facebook", url: "Hide", icon: <GrFacebook style={{ cursor: 'pointer' }} color="#FFFFFF" size="32px" /> }
  ];
  return (
    <Grid
      sx={{
        backgroundColor: "#5AB1BB",
      }}
      container
    >
      <Container
        sx={{
          paddingY: 3,
        }}
        maxWidth="xl"
      >
        <Grid justifyContent="center" container>
          <Typography
            color={"white"}
            align={"center"}
            variant="h5"
            gutterBottom
            fontFamily={"Lato, sans-serif"}
            fontWeight={700}
            sx={{
              fontSize: "25px",
            }}
          >
            Become part of our
          </Typography>
          <Typography
            marginX={1}
            align={"center"}
            variant="h5"
            gutterBottom
            fontFamily={"Lato, sans-serif"}
            fontWeight={700}
            sx={{
              color: "#344D67",
              fontSize: "25px",
            }}
          >
            growing community!
          </Typography>
        </Grid>

        <Typography
          align={"justify"}
          variant="subtitle2"
          gutterBottom
          fontFamily={"Lato, sans-serif"}
          fontWeight={600}
          sx={{
            fontSize: "20px",
            color: "#1E1E1E",
          }}
        >
          Welcome to Planet Cassandra, a community for Apache Cassandra®! We're
          a passionate and dedicated group of users, developers, and enthusiasts
          who are working together to make Cassandra the best it can be. Whether
          you're just getting started with Cassandra or you're an experienced
          user, there's a place for you in our community.
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "70%",
            margin: "34px auto",
          }}
        >
          {socialIcons.map(
            (icon, index) =>
              icon.url !== "Hide" && (
                <a href={icon.url} key={index}>
                  {icon.icon}
                </a>
              )
          )}
        </Box>
      </Container>
    </Grid>
  );
};

export default CommunitySection;
