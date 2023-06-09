import { Typography, Box, Button } from "@mui/material";
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
        events{" "}
        <Button 
              variant="contained" 
              color="primary" 
              onClick={() => window.open('https://www.apache.org/foundation/policies/conduct.html', '_blank')} 
              style={{marginTop: '0px'}}
            >
              View the Apache Software Foundation Code of Conduct
            </Button>
      </Typography>
    </>
  );
};

export default CodeOfConduct;
