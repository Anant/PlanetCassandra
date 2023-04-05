import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import HeroSectionCardsLayout from "../../layouts/ListingPageLayout/HeroSectionCardsLayout";
interface ListingArticleHeroSectionProps {
  data: any;
  hasVideoContent: boolean;
  title: string;
}

function ListingArticleHeroSection({
  data,
  hasVideoContent,
  title,
}: ListingArticleHeroSectionProps) {
  return (
    <Box
      sx={{
        height: { xs: "720px", sm: "auto" },
        backgroundColor: "#EEEEEE",
        padding: { xs: 2, sm: 6, md: 14 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "41px", sm: "54px", md: "100px" },
              height: { xs: "29px", sm: "41px", md: "54px" },
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StaticImage
              style={{
                width: "inherit",
                height: "inherit",
              }}
              objectFit="contain"
              src="../../images/Logo.svg"
              alt="Logo"
            />
          </Box>
          <Typography
            sx={{
              color: "#FFA62B",
              fontSize: { xs: 25, sm: 32, lg: 80 },
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 700,
            }}
            component="h1"
          >
            <span style={{ color: "black" }}>Explore our top {title} on </span>{" "}
            Cassandra
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 13, sm: 12, md: 22 },
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 400,
            }}
          >
            Welcome to our article directory on Cassandra database! Here you can
            find a wide range of informative articles that cover various aspects
            of Cassandra database management, administration, optimization, and
            best practices.
          </Typography>
        </Box>
        <HeroSectionCardsLayout hasVideoContent={hasVideoContent} data={data} />
      </Container>
    </Box>
  );
}

export default ListingArticleHeroSection;
