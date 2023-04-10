import { Typography } from "@mui/material"
import React from "react"
import { AiOutlineShareAlt } from "react-icons/ai"
import { FacebookShareButton } from "react-share"
const ListingCardShareButton = ({ url, title }) => {
  return (
    <FacebookShareButton
      sx={{ display: "flex", alignItems: "center" }}
      url={url}
      quote={title}
    >
      <Typography
        sx={{
          fontSize: { xs: "10px", sm: "9px", lg: "20px" },
          color: "#535A57",
          display: "flex",
          alignItems: "center",
        }}
      >
        <AiOutlineShareAlt style={{ color: "#FFA62B" }} />  Share
      </Typography>
    </FacebookShareButton>
  )
}

export default ListingCardShareButton
