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
    className='thumbnail-img-box'
      sx={{
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "start",
        marginTop: 1,
        width: "100%",
      }}
    >
      {thumbnail ? (
        <GatsbyImage
          image={thumbnail}
          alt="logo"
          style={{
            width: "50%",
            margin:'auto',
            objectFit:"contain",
            borderRadius:'5px'
          }}
        />
      ) : (
        <StaticImage
          src="https://i.ibb.co/Bq2J6JT/Static-Thumbnail.png"
          className="thumbnail"
          alt="Placeholder"
          style={{
            width: "50%",
            margin:'auto',
            objectFit:"contain",
            borderRadius:'5px'
          }}
        />
      )}
    </Box>
  );
};

export default ThumbnailImage;
