import { Typography } from "@mui/material";
import React from "react";

interface NewsLetterSubTitleProps {
  subTitle: string;
}

const NewsLetterSubTitle: React.FC<NewsLetterSubTitleProps> = ({
  subTitle,
}) => {
  return (
    <Typography
      sx={{
        marginTop: 1,
        fontSize: { xs: 13, md: 20 },
        fontFamily: "Roboto Condensed, sans-serif",
        fontWeight: 400,
      }}
    >
      {subTitle}
    </Typography>
  );
};

export default NewsLetterSubTitle;
