import { Typography, Box } from "@mui/material";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const FindingSponsors: React.FC<any> = () => {
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
          src="../../images/handbook/HandbookLogo6.png"
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
          Finding Sponsors
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
        If you need a sponsor for your events, any company can come on board as
        a sponsor for your local Cassandra meetup; however, it is best to select
        sponsors that offer relevant products or services to Cassandra community
        members. Sponsors can come on board to cover any financial costs related
        to your events - venue hire, refreshments, etc. - or they can provide
        material sponsorship - venue, workshop materials, etc.
      </Typography>
      <Typography
        sx={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "12px", sm: "13px", md: "22px" },
          marginTop: 3,
        }}
      >
        In return for sponsorship, sponsors should receive some benefits. Some
        ideas for this are:
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
            Promotion in event communications
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "12px", sm: "13px", md: "22px" },
            }}
            component="li"
          >
            Branding posted at the event
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "12px", sm: "13px", md: "22px" },
            }}
            component="li"
          >
            Discount codes for products/services provided to attendees
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "12px", sm: "13px", md: "22px" },
            }}
            component="li"
          >
            Distribution of company swap
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto Condensed, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "12px", sm: "13px", md: "22px" },
            marginTop: 3,
          }}
        >
          Organisers can be creative with the benefits they provide to sponsors,
          but please bear in mind the following non-negotiable restrictions:
        </Typography>
        <Typography sx={{ marginLeft: 5 }} component="ul">
          <Typography
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "12px", sm: "13px", md: "22px" },
            }}
            component="li"
          >
            Speaking spots are not provided to sponsors in return for their
            sponsorship under any circumstances.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "12px", sm: "13px", md: "22px" },
            }}
            component="li"
          >
            A list of attendee names or contact details may not be given to
            sponsors (or anyone else) - aggregate demographic data is fine to
            share, but specific details about attendees are not.{" "}
          </Typography>
        </Typography>
      </Box>
    </>
  );
};

export default FindingSponsors;
