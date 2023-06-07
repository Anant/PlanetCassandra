import React, { useState } from "react";
import { Box, Snackbar, Alert } from "@mui/material";
import addToMailchimp from "gatsby-plugin-mailchimp";
import NewsLetterCardTitle from "./NewsLetterSubCards/NewsLetterCardTitle";
import NewsLetterSubTitle from "./NewsLetterSubCards/NewsLetterCardSubTitle";
import NewsLetterButton from "./NewsLetterSubCards/NewsLetterButton";
import NewsLetterTextField from "./NewsLetterSubCards/NewsLetterTextField";

interface Props {
  cardTitle?: string;
  subtitle?: string;
}

const NewsLetterCard: React.FC<Props> = ({
  cardTitle = "Join Our Newsletter!",
  subtitle = "Sign up below to receive email updates and see what's going on with our company",
}) => {
  const [email, setEmail] = useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleSubmit = async () => {
    const res = await addToMailchimp(email);
    setMessage(res.msg);
    setOpen(true);
    setEmail("");
  };

  return (
    <Box
      sx={{
        borderRadius: "5px",
        textAlign: "center",
        paddingX: { xs: 3, sm: 3, md: 5 },
        paddingY: { xs: 3, sm: 2, md: 5 },
        backgroundColor: "#F3F3F3",
      }}
    >
      <NewsLetterCardTitle cardTitle={cardTitle} />
      <NewsLetterSubTitle subTitle={subtitle} />
      <NewsLetterTextField setEmail={setEmail} emailValue={email} />
      <NewsLetterButton handleSubmit={handleSubmit} />
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default NewsLetterCard;
