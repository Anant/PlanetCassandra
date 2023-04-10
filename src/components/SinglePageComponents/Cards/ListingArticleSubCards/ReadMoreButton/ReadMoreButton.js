import { Box, Typography } from "@mui/material"
import React from "react"
import { BsArrowRightShort } from "react-icons/bs"
import { Link } from "gatsby"
import getSlug from "speakingurl"
const ReadMoreButton = ({ title }) => {
  return (
    <Box>
      <Link to={`/post/${getSlug(title)}`}>
        <Typography
          sx={{
            color: "#163BBF",
            fontSize: { xs: "13px", sm: "9px", lg: "20px" },
            fontWeight: 600,
            fontFamily: "Roboto Condensed, sans-serif",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
          }}
        >
          read more
          <BsArrowRightShort style={{ marginLeft: 1.5 }} />
        </Typography>
      </Link>
    </Box>
  )
}
export default ReadMoreButton
