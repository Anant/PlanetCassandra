import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import ThumbnailImage from "../Cards/Thumbnail/Thumbnail";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface UseCaseTitleSectionProps {
  title: string;
  thumbnail: IGatsbyImageData | null;
}

const UseCaseTitleSection: React.FC<UseCaseTitleSectionProps> = ({ title, thumbnail }) => {
  const theme = useTheme();

  return (
    <Grid
      sx={{ borderBottom: "1px solid black", marginBottom: 5 }}
      container
      spacing={2}
    >
      <Grid item xs={12} sm={6}>
        <ThumbnailImage thumbnail={thumbnail} />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        item
        xs={12}
      >
        <Typography
          fontFamily="Roboto Condensed, sans-serif"
          fontWeight={600}
          sx={{
            marginY: 2,
            color: theme.palette.primary.darkblue,
            fontSize: {
              xs: "18px",
              sm: "24px",
              md: "20px",
              lg: "36px",
            },
          }}
        >
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default UseCaseTitleSection;
