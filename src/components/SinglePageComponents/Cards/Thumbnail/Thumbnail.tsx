import { Box } from "@mui/material";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";
interface ThumbnailInterface {
  thumbnail: IGatsbyImageData | null;
}
const ThumbnailImage: React.FC<ThumbnailInterface> = ({
  thumbnail,
}: ThumbnailInterface) => {
  return (
    <Box
      sx={{
        marginTop: 1,
        width: "100%",
      }}
    >
      {thumbnail ? (
        <GatsbyImage
          className="thumbnail"
          image={thumbnail}
          alt="logo"
        />
      ) : (
        <StaticImage
          src="https://i.ibb.co/Bq2J6JT/Static-Thumbnail.png"
          className="thumbnail"
          alt="Placeholder"
        />
      )}
    </Box>
  );
};

export default ThumbnailImage;
