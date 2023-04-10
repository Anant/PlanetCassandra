import { Grid, Typography, Card, Box } from "@mui/material";
import React from "react";

import { BsBookHalf } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "gatsby";
import getSlug from "speakingurl";

interface Props {
  title: string;
  description?: string;
  link: string;
}

const RelatedArticleCard: React.FC<Props> = ({ title, description, link }) => {
  return (
    <Card sx={{ boxShadow: "none", marginBottom: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ marginRight: 2, display: { sm: "none", md: "flex" } }}>
          <BsBookHalf color="#FFA62B" fontSize="25px" />
        </Box>
        <Typography
          className="textTruncate-2"
          sx={{
            fontSize: { sm: "15px", md: "25px" },
            fontFamily: "Roboto Condensed, sans-serif",
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box sx={{ marginTop: 3, marginBottom: 1 }}>
        <Typography
          sx={{
            fontFamily: "Roboto Condensed, sans-serif",
            fontSize: { sm: "12px", md: "20px" },
            color: "#535A57",
          }}
          className="textTruncate-3"
        >
          {description ? description : "No description provided"}
        </Typography>
      </Box>
      <Box>
        <Link to={`/leaf/${getSlug(title)}`}>
          <Typography
            sx={{
              color: "#163BBF",
              fontSize: { sm: "10px", md: "16px" },
              fontWeight: 600,
              fontFamily: "Roboto Condensed, sans-serif",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            read more
            <AiOutlineArrowRight style={{ marginLeft: 1.5 }} />
          </Typography>
        </Link>
      </Box>
    </Card>
  );
};

export default RelatedArticleCard;
