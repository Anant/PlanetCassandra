import { Typography, Box, Link } from "@mui/material";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const OrganisingEvents: React.FC<any> = () => {
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
          Organising Cassandra Events in an External Group
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
        If you are an organiser for another meetup group that isn’t exclusively about Cassandra but you are facilitating Cassandra-focused topics, 
        then we would still love to promote your events to the Cassandra community. You can submit event details via 
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKY6FG27OlcF2jsUxs0-JyxtWWpYOTZnq7-78ZCTzgw-sVgg/viewform" target="_blank" rel="noopener noreferrer"> this form</a>,
         and we will add them to the central events calendar.
      </Typography>
    </>
  );
};

export default OrganisingEvents;
