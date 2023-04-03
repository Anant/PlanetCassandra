import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  desc?: string;
}

const DescriptionComponent: React.FC<Props> = ({ desc }) => {
  return (
    <Box>
      <Typography
        fontFamily="Roboto Condensed, sans-serif"
        fontWeight={400}
        sx={{
          color: "#383D3B",
          fontSize: { sm: "12px", md: "22px" },
          lineHeight: { sm: "14px", md: "25px" },
          marginTop: "5px",
        }}
      >
        {desc
          ? desc
          : "There is no description available at the moment for this article"}
      </Typography>
    </Box>
  );
};

export default DescriptionComponent;
