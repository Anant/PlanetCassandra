import { Link } from "gatsby";
import React from "react";
import { CardMedia, Chip, Box, useTheme } from "@mui/material";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";
interface CardImageAndTagsProps {
  cardTagsItems: string[];
  imageWidth?: string;
  articleUrl: string;
  cardImg?: IGatsbyImageData | null;
  addDefaultSrc: (ev: any) => void;
}

const CardImageAndTagsComponent: React.FC<CardImageAndTagsProps> = ({
  cardTagsItems,
  imageWidth,
  articleUrl,
  cardImg,
  addDefaultSrc,
}) => {
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative" }}>
      <Link to={articleUrl}>
        <Box
          sx={{
            width: imageWidth ? imageWidth : "199px",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {cardImg ? (
            <GatsbyImage
              className="thumbnail"
              image={cardImg}
              alt="logo"
              style={{
                width: "100%",
                objectFit: "contain",
              }}
            />
          ) : (
            <StaticImage
              src="https://i.ibb.co/Bq2J6JT/Static-Thumbnail.png"
              className="thumbnail"
              alt="Placeholder"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          )}
        </Box>
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
            // <Link
            //   to={`/tags/${tag
            //     .split(" ")
            //     .join(".")
            //     .replace(/[^a-zA-Z ]/g, "-")}/1`}
            //   key={tag}
            // >
            <Chip
              key={index}
              label={tag}
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
                backgroundColor:
                  index % 3 === 0
                    ? theme.palette.primary.darkCyan
                    : index % 2 === 0
                    ? theme.palette.primary.darkerTurqoise
                    : theme.palette.primary.turqoise,
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
            // </Link>
          ))}
      </Box>
    </Box>
  );
};

export default CardImageAndTagsComponent;
