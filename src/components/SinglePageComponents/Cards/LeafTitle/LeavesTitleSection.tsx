import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import ThumbnailImage from "../Thumbnail/Thumbnail";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface LeavesTitleSectionProps {
  title: string;
  thumbnail: IGatsbyImageData | null;
}

const LeavesTitleSection: React.FC<LeavesTitleSectionProps> = ({ title, thumbnail }) => {
  const theme = useTheme();

  // Customize the component based on your requirements
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
              xs: "14px",
              sm: "18px",
              md: "16px",
              lg: "24px",
            },
          }}
        >
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LeavesTitleSection;
