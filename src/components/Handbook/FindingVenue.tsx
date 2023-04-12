import { Typography, Box } from "@mui/material";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const FindingVenue: React.FC<any> = () => {
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
          src="../../images/handbook/HandbookLogo7.png"
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
          Finding A Venue
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
        Organisers can use any venue that is appropriate for the event and the
        people attending it. Here are some things to consider when selecting a
        venue:
      </Typography>
      <Box>
        <Typography sx={{ marginLeft: 5 }} component="ul">
          <Typography
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "12px", sm: "13px", md: "22px" },
            }}
            component="li"
          >
            Ensure that the venue has adequate accessibility features for all
            potential attendees.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "12px", sm: "13px", md: "22px" },
            }}
            component="li"
          >
            The venue should be able to accommodate the number of expected
            attendees with seating for everyone, as well as include any features
            that are required for the format of the event (e.g. desks/tables for
            workshops that require attendees to use their laptops)
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "12px", sm: "13px", md: "22px" },
            }}
            component="li"
          >
            Avoid venues that could be potentially problematic for some
            attendees - this could include political or religious venues.{" "}
          </Typography>
        </Typography>
      </Box>
    </>
  );
};

export default FindingVenue;
