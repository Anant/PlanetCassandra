import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import ThumbnailImage from "../Thumbnail/Thumbnail";
import { IGatsbyImageData } from "gatsby-plugin-image";
import NotificationComponent from "../NotificationComponent";
import DescriptionCard from "../DescriptionCard";

interface LeavesTitleSectionProps {
  singlePage: any;
  title: string;
  thumbnail: IGatsbyImageData | null;
}

const LeavesTitleSection: React.FC<LeavesTitleSectionProps> = ({
  title,
  thumbnail,
  singlePage,
}) => {
  const theme = useTheme();

  // Customize the component based on your requirements
  return (
    <Grid
      sx={{ borderBottom: "1px solid black", marginBottom: 5 }}
      container
      spacing={2}
    >
      <Grid item xs={12} sm={6}>
        <DescriptionCard
          //@ts-ignore
          article={singlePage}
        />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        item
        xs={12}
        sm={6}
      >
        <ThumbnailImage thumbnail={singlePage.thumbnail} />
        <NotificationComponent
          args={{
            notificationTitle: "resource",
            //@ts-ignore
            articleUrl: singlePage.url,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default LeavesTitleSection;
