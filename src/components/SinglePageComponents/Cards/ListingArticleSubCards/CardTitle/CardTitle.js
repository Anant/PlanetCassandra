import { Box, Typography } from "@mui/material"
import React from "react"
const CardTitle = ({ title }) => {
  return (
    <Box sx={{ marginBottom: { sm: "25px", md: "50px" } }}>
      <Typography
        className="textTruncate-2"
        fontFamily="Roboto condensed, sans-serif"
        sx={{
          fontSize: { xs: "16px", sm: "13px", lg: "32px" },
          fontWeight: 700,
          lineHeight: { lg: "39px" },
        }}
      >
        {title ? title : "Title"}
      </Typography>
    </Box>
  )
}
export default CardTitle
