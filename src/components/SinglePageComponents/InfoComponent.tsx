import React from "react"
import { Box, Grid, Typography, Button, Icon } from "@mui/material"
import { BsBookmark, BsShare, BsThreeDots } from "react-icons/bs"

const DescriptionCard = ({
  //@ts-ignore
  title,
  //@ts-ignore
  readingTime,
  //@ts-ignore
  dateCreated,
  //@ts-ignore
  author,
  //@ts-ignore
  description,
}) => {
  const formattedContent = description.replace(/<[^>]+>/g, "")
  const lines = formattedContent.split("\n")
  const truncatedContent =
    lines.slice(0, 7).join("\n") + (lines.length > 7 ? "\n..." : "")
  return (
    <Grid container sx={{ marginY: 3 }}>
      <Grid item>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                marginRight: 5,
                fontFamily: "Roboto Condensed, sans-serif",
                color: "#7C7C7C",
                fontSize: { xs: "14px", sm: "10px", md: "22px" },
              }}
            >
              {dateCreated}
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "10px", md: "22px" } }}
            >
              <span
                style={{
                  color: "#7C7C7C",
                  marginRight: "5px",
                  fontFamily: "Roboto Condensed, sans-serif",
                }}
              >
                {" "}
                Reading time:
              </span>
              <span
                style={{
                  color: "#383D3B",
                  fontWeight: 600,
                  fontFamily: "Roboto Condensed, sans-serif",
                }}
              >
                {readingTime ? readingTime : "N/A"}{" "}
                {readingTime > 0 && readingTime > 10 ? "mins" : "min"}
              </span>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Roboto Condensed, sans-serif",
                color: "#000000",
                marginRight: 1.25,
                fontSize: { xs: "14px", sm: "10px", md: "22px" },
              }}
              onClick={() => console.log("this is bookmark")}
            >
              <BsBookmark />
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto Condensed, sans-serif",
                color: "#000000",
                marginRight: 1.25,
                fontSize: { xs: "14px", sm: "10px", md: "22px" },
              }}
              onClick={() => console.log("this is share")}
            >
              <BsShare />
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto Condensed, sans-serif",
                color: "#000000",
                fontSize: { xs: "14px", sm: "10px", md: "22px" },
              }}
              onClick={() => console.log("this is see more")}
            >
              <BsThreeDots />
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { sm: "24px", md: "60px" },
              fontFamily: "Roboto Condensed, sans-serif",
              lineHeight: { sm: "30px", md: "73.5px" },
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box sx={{ marginY: { sm: 1, md: 0 } }}>
          <Typography
            sx={{
              fontSize: { sm: "11px", md: "25px" },
              color: "#FFA62B",
              fontWeight: 700,
              lineHeight: { sm: "17px", md: 4.25 },
              fontFamily: "Roboto Condensed, sans-serif",
            }}
          >
            by {author ? author : "John Doe"}
          </Typography>
        </Box>
        <Box>
          <Typography
            className="textTruncateEightLine"
            sx={{
              fontSize: { sm: "14px", md: "22px" },
              color: "#535A57",
              fontWeight: 400,
              lineHeight: { sm: "17px", md: "26px" },
              fontFamily: "Roboto Condensed, sans-serif",
              textAlign: "justify",
            }}
          >
            {description
              ? truncatedContent
              : "Description not available at the moment"}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
export default DescriptionCard