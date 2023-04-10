import { Typography } from "@mui/material";
import React from "react";
import { BsPersonFill } from "react-icons/bs";

interface AuthorProps {
  dataFontSize?: { sm: string; md: string } | string;
  author?: string;
}

const AuthorComponent: React.FC<AuthorProps> = ({ dataFontSize, author }) => {
  return (
    <Typography
      fontFamily="Roboto Condensed, sans-serif"
      fontWeight={400}
      sx={{
        fontSize: dataFontSize ? dataFontSize : { sm: "12px", md: "15px" },
        color: "#383D3B",
        display: "flex",
        alignItems: "center",
      }}
    >
      <BsPersonFill color="#FFA62B" style={{ marginRight: "3px" }} />
      {author ? author : "John Doe"}
    </Typography>
  );
};

export default AuthorComponent;
