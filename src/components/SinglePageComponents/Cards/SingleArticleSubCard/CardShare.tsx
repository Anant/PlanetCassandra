import React from "react";
import { FacebookShareButton } from "react-share";
import { Typography, Box } from "@mui/material";
import { AiOutlineShareAlt } from "react-icons/ai";

type ShareComponentProps = {
  dataFontSize?: { sm: string; md: string };
  quote: string;
  url: string;
  color: string;
};

const ShareComponent: React.FC<ShareComponentProps> = ({
  dataFontSize,
  quote,
  url,
  color,
}) => {
  return (
    <Box
      sx={{ marginLeft: 1 }}
      fontFamily="Roboto Condensed, sans-serif"
      fontWeight={700}
    >
      <FacebookShareButton url={url} quote={quote}>
        <Typography
          sx={{
            fontSize: dataFontSize ? dataFontSize : { sm: "12px", md: "15px" },
            color: "#3b3D3B",
            display: "flex",
            alignItems: "center",
          }}
        >
          <AiOutlineShareAlt
            size={20}
            style={{ color: color ? "#5AB1BB" : "#FFA62B" }}
          />
            Share
        </Typography>
      </FacebookShareButton>
    </Box>
  );
};

export default ShareComponent;
