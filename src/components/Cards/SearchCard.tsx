import React from "react";
import { Card, Typography, Box, Button } from "@mui/material";
import { Link } from "gatsby";
import {
  StaticImage,
  GatsbyImage,
  IGatsbyImageData,
} from "gatsby-plugin-image";
import SendIcon from "@mui/icons-material/Send";
import ShareComponent from "../SinglePageComponents/Cards/SingleArticleSubCard/CardShare";
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#5AB1BB",
              marginRight: "10px",
            }}
          />
          <Typography
            color="textSecondary"
            sx={{ fontWeight: 500, textTransform: "uppercase", fontSize: 12 }}
          >
            {cardType === "usecases"
              ? "Use Case"
              : cardType === "leaf"
              ? "Link"
              : cardType}
          </Typography>
        </Box>

        <Typography color="textSecondary" gutterBottom sx={{ fontWeight: 500 }}>
          {formatDate(date)}
        </Typography>
      </Box>
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
            imgStyle={{ objectFit: "contain", borderRadius: "16px" }}
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
          marginTop: 2,
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            textAlign: "center",
          }}
          to={url}
        >
          <Button
            sx={{
              borderRadius: 50,
              fontSize: 12,
              backgroundColor: "#5AB1BB",
            }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Continue reading{" "}
          </Button>
        </Link>

        <ShareComponent
          color="#FFA62B"
          dataFontSize={{ sm: "18px", md: "18px" }}
          url={`https://planetcassandra.org/${url}`}
          quote={"test"}
        />
      </Box>
    </Card>
  );
};

export default SearchResultCard;
