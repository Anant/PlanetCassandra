import { Typography } from "@mui/material"
import { FaRegCalendarAlt } from "@react-icons/all-files/fa/FaRegCalendarAlt"
import React from "react"
const ListingCardDate = ({ dateCreated }) => {
  return (
    <Typography
      fontFamily="Roboto Condensed, sans-serif"
      fontWeight={400}
      sx={{
        color: "#535A57",
        fontSize: { xs: "10px", sm: "9px", lg: "20px" },
        marginRight: { xs: 0, md: 0 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <FaRegCalendarAlt style={{ marginRight: "8px" }} color="#FFA62B" />{" "}
      {dateCreated}
    </Typography>
  )
}

export default ListingCardDate
