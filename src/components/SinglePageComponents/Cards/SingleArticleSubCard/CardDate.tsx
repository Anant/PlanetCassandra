import { Typography, Box } from "@mui/material";
import { FaRegCalendarAlt } from "@react-icons/all-files/fa/FaRegCalendarAlt";
import React from "react";

interface CardDateComponentProps {
  dataFontSize?: string | { sm: string; md: string };
  dateCreated: string;
}

const CardDateComponent: React.FC<CardDateComponentProps> = ({
  dataFontSize,
  dateCreated,
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", fontSize: "8px" }}>
      <FaRegCalendarAlt color="#FFA62B" />
      <Typography
        component="p"
        fontFamily="Roboto Condensed, sans-serif"
        fontWeight={500}
        sx={{
          marginLeft: "5px",
          color: "#383D3B",
          fontSize: dataFontSize ? dataFontSize : { sm: "12px", md: "15px" },
        }}
      >
        {new Date(dateCreated).toLocaleDateString("en-US")}
      </Typography>
    </Box>
  );
};

export default CardDateComponent;
