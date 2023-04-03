import { Typography } from "@mui/material";
import React from "react";

interface NewsLetterCardTitleProps {
  cardTitle: string;
}

const NewsLetterCardTitle: React.FC<NewsLetterCardTitleProps> = ({
  cardTitle,
}) => {
  return (
    <Typography
      sx={{
        color: "#FFA62B",
        fontSize: { xs: 24, sm: 25, md: 30, lg: 40 },
        fontFamily: "Roboto Condensed, sans-serif",
        fontWeight: 700,
      }}
    >
      {cardTitle}
    </Typography>
  );
};

export default NewsLetterCardTitle;
