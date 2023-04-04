import { Box } from "@mui/material";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { IGatsbyImageData } from "gatsby-plugin-image";
interface ThumbnailInterface {
  thumbnail: IGatsbyImageData;
}
const ThumbnailImage: React.FC<ThumbnailInterface> = ({
  thumbnail,
}: ThumbnailInterface) => {
  return (
    <Box
      sx={{
        marginTop: 1,
        width: "100%",
        // height: imageHeight ? imageHeight : { sm: "250px", md: "600px" },
      }}
    >
      <GatsbyImage alt="test" image={thumbnail} />
      {/* Static image is not working so we must use img tag */}
    </Box>
  );
};

export default ThumbnailImage;
