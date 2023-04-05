import React from "react";
import ListingCardAuthor from "./ListingCardAuthor";
import ListingCardDate from "./ListingCardDate";
import ListingCardShareButton from "./ListingCardShareButton";
import { Box } from "@mui/material";

interface ArticleInfoContainerProps {
  author: string;
  dateCreated: string;
  title: string;
  url: string;
}

const ArticleInfoContainer: React.FC<ArticleInfoContainerProps> = ({
  author,
  dateCreated,
  title,
  url,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "space-between", sm: "space-between" },
        alignItems: "center",
        marginY: { xs: "12px", lg: "20px" },
      }}
    >
      <ListingCardAuthor author={author} />
      <ListingCardDate dateCreated={dateCreated} />
      <ListingCardShareButton url={url} title={title} />
    </Box>
  );
};

export default ArticleInfoContainer;
