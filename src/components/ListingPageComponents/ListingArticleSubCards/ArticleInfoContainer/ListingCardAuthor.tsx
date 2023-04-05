import { Typography } from "@mui/material";
import { BsPersonFill } from "react-icons/bs";
import React from "react";

interface Props {
  author: string;
}

const ListingCardAuthor: React.FC<Props> = ({ author }) => {
  const maxLetters = 9;
  // Truncate the author's name if it exceeds the maximum number of letters
  const truncatedName =
    author && author.length > maxLetters
      ? author.slice(0, maxLetters) + "..."
      : author;

  return (
    <Typography
      fontFamily="Roboto Condensed, sans-serif"
      fontWeight={400}
      sx={{
        fontSize: { xs: "10px", sm: "9px", lg: "20px" },
        marginRight: { xs: 0, md: 0 },
        color: "#535A57",
        display: "flex",
        alignItems: "center",
      }}
    >
      <BsPersonFill style={{ marginRight: "8px" }} color="#FFA62B" />
      {author === "['']" || author === null ? "Unknown" : truncatedName}
    </Typography>
  );
};

export default ListingCardAuthor;
