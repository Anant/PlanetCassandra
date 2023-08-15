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
  cardTitle: string;
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
  cardTitle,
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
      <Typography
        variant="h6" // This roughly corresponds to font-size: 20px in MUI's default theme
        style={{
          color: '#383D3B',
          fontFamily: 'Montserrat, sans-serif', // Fallback to sans-serif if Montserrat isn't available
          fontWeight: 600,
          lineHeight: 1.225, // 122.5% is the same as 1.225
          letterSpacing: '-0.4px',
          paddingTop: '10px'
        }}
      >{cardTitle || '' }</Typography>
      <Divider sx={{ margin: "15px 3px", borderColor: "#5AB1BB" }} />
      <Box
        className="p-0"
        sx={{ flexGrow: 1, alignItems: "center", marginTop: 1 }}
      >
        <Typography
          sx={{
            color: "#283B4F",
            fontWeight: 600,
            fontSize: "16px",
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "131.5%", // equivalent to 1.315
            letterSpacing: "0.48px",
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
              fontSize: "16px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 500,
              lineHeight: "131.5%", // equivalent to 1.315
              letterSpacing: "0.48px",
              color: "#796F82",
            }}
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
        <Typography
          color="#383D3B"
          gutterBottom
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "145.959%", // equivalent to 23.353px
          }}
        >
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
              fontFamily: "Montserrat, sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "131.5%", // equivalent to 21.04px
              letterSpacing: "-0.64px",
              color: "#5AB1BB",
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Continue reading
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
