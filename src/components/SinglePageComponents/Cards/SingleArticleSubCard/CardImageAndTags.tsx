import { Link } from "gatsby";
import React from "react";
import { CardMedia, Chip, Box } from "@mui/material";
import NoImg from "../../../../images/NoPreviewImage.png";
interface CardImageAndTagsProps {
  cardTagsItems: string[];
  imageWidth?: string;
  articleUrl: string;
  cardImg?: string;
  addDefaultSrc: (ev: any) => void;
}

const CardImageAndTagsComponent: React.FC<CardImageAndTagsProps> = ({
  cardTagsItems,
  imageWidth,
  articleUrl,
  cardImg,
  addDefaultSrc,
}) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Link to={articleUrl}>
        <CardMedia
          sx={{
            height: "100%",
            width: imageWidth ? imageWidth : "199px",
            objectFit: "cover",
            borderRadius: "4px",
          }}
          component="img"
          image={cardImg ? cardImg : NoImg}
          onError={(ev) => addDefaultSrc(ev)}
        />
      </Link>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          position: "absolute",
          right: 0,
          top: 0,
          left: 0,
        }}
      >
        {cardTagsItems &&
          cardTagsItems.map((tag, index) => (
            <Link
              to={`/tags/${tag
                .split(" ")
                .join(".")
                .replace(/[^a-zA-Z ]/g, "-")}/1`}
              key={tag}
            >
              <Chip
                label={tag}
                className="tuka"
                sx={{
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontWeight: 700,
                  justifyContent: "start",
                  padding: 0,
                  textOverflow: "initial",
                  cursor: "pointer",
                  textTransform: "capitalize",
                  width: "30%",
                  height: "20px",
                  backgroundColor: index % 2 === 0 ? "#163BBF" : "#1B4AF0",
                  borderRadius: "0px",
                  borderTopRightRadius:
                    index === cardTagsItems.length - 1 ? "10px" : "0px",
                  borderBottomRightRadius:
                    index === cardTagsItems.length - 1 ? "10px" : "0px",
                  borderColor: "transparent",
                  fontSize: { xs: "6px", sm: "5px", md: "8px" },
                  color: "#fff",
                  "& .MuiChip-label": {
                    padding: "0px 0px 0px 5px",
                  },
                }}
              />
            </Link>
          ))}
      </Box>
    </Box>
  );
};

export default CardImageAndTagsComponent;
