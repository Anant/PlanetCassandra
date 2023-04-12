import { Typography, Box, Link } from "@mui/material";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const BecomeAnOrganizer: React.FC<any> = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 3,
          marginTop: 6,
        }}
      >
        <StaticImage
          src="../../images/handbook/HandbookLogo1.png"
          alt="HandbookLogo"
          style={{
            height: "100%",
            marginRight: "20px",
            objectFit: "cover",
          }}
        />
        <Typography
          sx={{
            fontFamily: "Roboto Condensed, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "15px", sm: "25px", md: "40px" },
            color: "#344D67",
          }}
        >
          Become an Organiser
        </Typography>
      </Box>
      <Typography
        sx={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "12px", sm: "13px", md: "22px" },
          marginTop: 3,
        }}
      >
        Any community member can organise events for their local Cassandra
        meetup. Organisers need to have some familiarity with data on
        Kubernetes, and they need to agree to the guidelines and expectations
        outlined below. Anyone interested in starting a new local Cassandra
        meetup group must fill in <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFN7n6RI6Oy4CzLD7MpoHatjzeZX-8tEVVeI3ilLyNAHOp3A/viewform" target="_blank" rel="noopener noreferrer">the application form.</a> If you are already a
        member of a local Cassandra meetup group and would like to get involved
        as an organiser, talk to the current organisers, and they will gladly
        accept your assistance. Organising team members cannot all be from the
        same company (see the Building an Organising Team section below).
      </Typography>
      <Typography
        sx={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "12px", sm: "13px", md: "22px" },
          marginTop: 3,
        }}
      >
        Once your meetup group is live, we will add your group to the Cassandra
        meetup directory. See the Promoting Events section below for more
        information about promoting individual events.
      </Typography>
    </>
  );
};

export default BecomeAnOrganizer;
