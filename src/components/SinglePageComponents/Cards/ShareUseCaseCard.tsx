import { Typography, Box, Button, useTheme } from "@mui/material";
import React from "react";

const ShareUseCases: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        border: "3px solid",
        borderColor: theme.palette.primary.turqoise,
        borderRadius: "20px",
        padding: { xs: 2, sm: 3, lg: 5 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          marginTop: 1,
          color: theme.palette.primary.main,
          fontSize: { xs: 13, md: 20 },
          fontFamily: "Roboto Condensed, sans-serif",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Do you have an Apache® Cassandra Use Case ?
      </Typography>
      <Button
        sx={{
          marginTop: 2,
          padding: 2,
          borderRadius: "10px",
          backgroundColor: theme.palette.primary.turqoise,
          "&:hover": {
            backgroundColor: theme.palette.primary.turqoise,
          },
        }}
        variant="contained"
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: 13, md: 18 },
            fontFamily: "Roboto Condensed, sans-serif",
            fontWeight: 400,
          }}
        >
          <a
            href="https://airtable.com/shrYlu3mjtCiBTlOG"
            style={{ textDecoration: "none", color: "white" }}
          >
            Share a Use Case
          </a>
        </Typography>
      </Button>
    </Box>
  );
};

export default ShareUseCases;
