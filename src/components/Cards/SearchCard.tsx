import React from "react";
import { Card, Typography, Box, Button } from "@mui/material";
import { Link } from "gatsby";
import {
  StaticImage,
  GatsbyImage,
  IGatsbyImageData,
} from "gatsby-plugin-image";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Divider from '@mui/material/Divider';
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
      <Divider sx={{ margin: "15px 3px", borderColor: "#5AB1BB" }} />
      <Box
        className="p-0"
        sx={{ flexGrow: 1, alignItems: "center", marginTop: 1 }}
      >
        <Typography
          sx={{
            height: "35px",
            fontWeight: 700,
            fontSize: "1rem",
            fontFamily: "Roboto Condensed, sans-serif",
          }}
          className="textTruncate-3"
          variant="h6"
          component="h2"
        >
          Company: {title}
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
        <Typography color="textSecondary" gutterBottom sx={{ fontWeight: 700 }}>
          {formatDate(date)}
        </Typography>
        <Link
          style={{
            textDecoration: "none",
            textAlign: "center",
            marginLeft: "auto"
          }}
          to={url}
        >
          <Button
            sx={{
              fontSize: 12,
              color: "#5AB1BB",
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Continue reading{" "}
          </Button>
        </Link>

        {/* <ShareComponent
          color="#FFA62B"
          dataFontSize={{ sm: "18px", md: "18px" }}
          url={`https://planetcassandra.org/${url}`}
          quote={"test"}
        /> */}
      </Box>
    </Card>
  );
};

export default SearchResultCard;
