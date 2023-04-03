import { TextField, Box } from "@mui/material";

import React from "react";

interface NewsLetterTextFieldProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  emailValue: string;
}

const NewsLetterTextField: React.FC<NewsLetterTextFieldProps> = ({
  setEmail,
  emailValue,
}) => {
  return (
    <TextField
      onChange={(e) => setEmail(e.target.value)}
      value={emailValue || ""}
      size="small"
      sx={{
        marginY: 2,
        width: "70%",
        mx: "auto",
        "& fieldset": {
          borderRadius: "8px",
          borderColor: "#EEEEEE",
          padding: "8px 12px",
        },
        backgroundColor: "#EEEEEE",
      }}
      inputProps={{
        style: {
          height: "15px",
          fontSize: "15px",
          color: "#163BBF",
        },
        placeholder: "Email Address",
      }}
    />
  );
};

export default NewsLetterTextField;
