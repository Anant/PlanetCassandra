import { Typography } from "@mui/material"
import { BsPersonFill } from "react-icons/bs"
import React from "react"
const ListingCardAuthor = ({ author }) => {
  const maxLetters = 10

  // Truncate the author's name if it exceeds the maximum number of letters
  const truncatedName =
    author.length > maxLetters ? author.slice(0, maxLetters) + "..." : author

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
      {author !== "['']" ? truncatedName : "Unknown"}
    </Typography>
  )
}

export default ListingCardAuthor
