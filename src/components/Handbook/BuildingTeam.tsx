import { Typography, Box } from "@mui/material";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const BuildingTeam: React.FC<any> = () => {
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
          src="../../images/handbook/HandbookLogo3.png"
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
          Building an Organising Team
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
        A diverse organising team is important for building a diverse and
        inclusive community; it also helps distribute the work of organising
        amongst more people. Remember the Prime Directive - Cassandra events are
        organised for the benefit of the community and not a single person or
        organisation. This means that your organising team must include people
        from more than one company or organisation, reducing the risk of people
        using the community to promote themselves or their business.
      </Typography>
      <Typography
        sx={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "12px", sm: "13px", md: "22px" },
          marginTop: 3,
        }}
      >
        You can find additional organisers for your team in the Planet Cassandra
        Discord, by posting on social media, or by asking people you know who
        are interested in data on Kubernetes.
      </Typography>
    </>
  );
};

export default BuildingTeam;
