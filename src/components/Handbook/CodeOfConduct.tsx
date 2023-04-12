import { Typography, Box } from "@mui/material";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const CodeOfConduct: React.FC<any> = () => {
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
          src="../../images/handbook/HandbookLogo11.png"
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
          Code of Conduct
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
        The code of conduct applies to all Cassandra community spaces, including
        events:{" "}
        <a href="https://www.figma.com/exit?url=https%3A%2F%2Fconstantia.io%2Fcode-of-conduct%2F">
          https://constantia.io/code-of-conduct/.
        </a>
      </Typography>
    </>
  );
};

export default CodeOfConduct;
