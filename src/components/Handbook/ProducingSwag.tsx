import { Typography, Box } from "@mui/material";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const ProducingSwag: React.FC<any> = () => {
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
          src="../../images/handbook/HandbookLogo9.png"
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
          Producing Swag
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
        You may produce an event or community-related swag for your community
        members at your discretion. While there are no restrictions on this,
        here are some guidelines to help organisers make good choices:
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
            Only produce swag that you are certain will be useful to the
            majority of attendees - conference and event swag is routinely
            discarded into landfills, so be conscious of the environment when
            selecting swag. You could even poll your local community on what
            swag they want in order to ensure real interest in the items.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "12px", sm: "13px", md: "22px" },
            }}
            component="li"
          >
            If you are producing t-shirts as swag, make sure to select a vendor
            that provides shirts in fitted and straight cuts from size XS to 5XL
            - this ensures that you will be able to cater to all members of the
            community.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "12px", sm: "13px", md: "22px" },
            }}
            component="li"
          >
            Also, if you are producing t-shirts, experience has shown that
            people generally don’t want to continue wearing shirts that are
            covered in sponsor logos. It is better to stick to designs related
            to Cassandra or the community.
          </Typography>
        </Typography>
      </Box>
    </>
  );
};

export default ProducingSwag;
