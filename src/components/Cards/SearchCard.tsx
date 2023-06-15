import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { Link } from "gatsby";
import {
  StaticImage,
  GatsbyImage,
  IGatsbyImageData,
} from "gatsby-plugin-image";

interface SearchResultCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  slug?: string;
  cardType?: string;
  ID_Case?: number;
  image: IGatsbyImageData;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({
  id,
  cardType,
  title,
  date,
  description,
  author,
  slug,
  ID_Case,
  image,
}) => {
  let url;

  if (cardType === "usecases" && ID_Case !== undefined) {
    url = `/${cardType}/${slug}/${ID_Case}`;
  } else {
    url = `/${cardType}/${slug}`;
  }

  const formatDate = (dateStr: string) => {
    const dateObj = new Date(dateStr);
    return dateObj.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Link style={{ textDecoration: "none", color: "white" }} to={`${url}`}>
      <Card
        className="px-6 py-4"
        sx={{
          display: "flex",
          flexDirection: "column",
          "&:hover": {
            backgroundColor: "#f9f9f9",
          },
        }}
      >
        {image ? (
          <Box
            sx={{
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              borderRadius: 2,
            }}
          >
            <GatsbyImage
              className="h-100 object-contain thumbnail"
              image={image}
              alt={"test"}
              style={{ width: cardType == "usecases" ? "85%" : "100%" }}
              imgStyle={{ objectFit: "contain" }}
            />
          </Box>
        ) : (
          <Box
            sx={{
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              borderRadius: 2,
            }}
          >
            <StaticImage
              src="https://i.ibb.co/Bq2J6JT/Static-Thumbnail.png"
              className="thumbnail"
              alt="Placeholder"
            />
          </Box>
        )}
        <Box
          className="p-0"
          sx={{ flexGrow: 1, alignItems: "center", marginTop: 1 }}
        >
          <Typography
            sx={{
              height: "80px",
              fontWeight: 700,
              fontSize: "1rem",
              fontFamily: "Roboto Condensed, sans-serif",
            }}
            className="textTruncate-3"
            variant="h6"
            component="h2"
          >
            {title}
          </Typography>
          {description && (
            <Typography
              sx={{
                marginY: 1,
                fontSize: "0.90rem",
                fontFamily: "Roboto Condensed, sans-serif",
              }}
              color="textSecondary"
              className="textTruncate-3"
            >
              {description}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            color="textSecondary"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            {formatDate(date)}
          </Typography>
          {author && (
            <Typography
              sx={{ fontWeight: 700 }}
              color="textSecondary"
              gutterBottom
            >
              Author: {author}
            </Typography>
          )}
        </Box>
      </Card>
    </Link>
  );
};

export default SearchResultCard;
