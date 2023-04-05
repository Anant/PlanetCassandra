import { Box, Typography } from "@mui/material";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "gatsby";
import getSlug from "speakingurl";
import { AiFillPlayCircle } from "react-icons/ai";

interface ReadMoreButtonProps {
  title: string;
  url: string;
  hasVideoContent: boolean;
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({
  title,
  url,
  hasVideoContent,
}) => {
  return (
    <Box>
      {hasVideoContent ? (
        <a href={url} target="_blank">
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
            watch now
            <AiFillPlayCircle
              style={{ marginLeft: 2.5, fontSize: "25px", color: "#FFA62B" }}
            />
          </Typography>
        </a>
      ) : (
        <Link to={`/leaf/${getSlug(title)}`}>
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
      )}
    </Box>
  );
};

export default ReadMoreButton;
