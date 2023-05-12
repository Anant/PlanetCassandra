import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Link } from "gatsby";

interface SearchResultCardProps {
  title: string;
  date: string;
  author?: string;
  slug?: string;
  cardType?: string;
  ID_Case?: number;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({
  cardType,
  title,
  date,
  author,
  slug,
  ID_Case,
}) => {

  let url
  
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
    
    <Link
      style={{ textDecoration: "none", color: "white" }}
      to={`${url}`}
    >
      <Card
        className="px-6 py-4"
        sx={{
          height: "150px",
          display: "flex",
          flexDirection: "column",
          "&:hover": {
            backgroundColor: "#f9f9f9",
          },
        }}
      >
        <Box className="p-0" sx={{ flexGrow: 1, alignItems: "center" }}>
          <Typography
            sx={{ fontWeight: 700, fontSize: "1rem" }}
            variant="h6"
            component="h2"
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography color="textSecondary" gutterBottom>
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
