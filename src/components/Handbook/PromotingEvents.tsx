import { Typography, Box, Link } from "@mui/material";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const PromotingEvents: React.FC<any> = () => {
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
          src="../../images/handbook/HandbookLogo4.png"
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
          Promoting Events
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
        It is strongly recommended that you finalise your event details (date,
        venue, speakers, etc.) at least one month before the event. The earlier
        you can start promoting your event, the better, so it’s best to get
        those details finalised well in advance.
      </Typography>
      <Typography
        sx={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "12px", sm: "13px", md: "22px" },
          marginTop: 3,
        }}
      >
        You can use any platform you like for your group’s local events. If the
        platform incurs fees, then you should find local sponsors to cover your
        costs (see the Finding Sponsors section below). You may use any
        advertising platform or format you like for promoting your event,
        provided you use the correct Cassandra and sponsor branding where
        appropriate.
      </Typography>
      <Typography
        sx={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "12px", sm: "13px", md: "22px" },
          marginTop: 3,
        }}
      >
        Once your event is published on your platform of choice, submit the
        details via <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKY6FG27OlcF2jsUxs0-JyxtWWpYOTZnq7-78ZCTzgw-sVgg/viewform" target="_blank" rel="noopener noreferrer">this form</a> to be added to the central Cassandra calendar. If
        the platform allows for automated posting, then we will look into
        enabling that so you don’t need to submit each event individually.
      </Typography>

    </>
  );
};

export default PromotingEvents;
