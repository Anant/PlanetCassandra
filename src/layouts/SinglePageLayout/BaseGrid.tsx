import React from "react";
import { Container, Grid, Typography, useTheme } from "@mui/material";
import { IGatsbyImageData } from "gatsby-plugin-image";

import RelatedArticlesLayout from "./RelatedArticlesLayout";
import ArticleContent from "../../components/SinglePageComponents/ArticleContent";
import NotificationComponent from "../../components/SinglePageComponents/Cards/NotificationComponent";
import ThumbnailImage from "../../components/SinglePageComponents/Cards/Thumbnail/Thumbnail";
import DescriptionCard from "../../components/SinglePageComponents/Cards/DescriptionCard";
import ShareUseCases from "../../components/SinglePageComponents/Cards/ShareUseCaseCard";

export interface BaseGridProps {
  singlePage: {
    tags?: string[]; // Optional property
    title: string;
    wallabag_created_at?: string; // Optional property
    description: string;
    id?: string; // Optional property
    content: string;
    preview_picture?: string; // Optional property
    url?: string; // Optional property for Leaves
    origin_url?: string; // Optional property
    reading_time?: number; // Optional property
    domain_name?: string; // Optional property
    thumbnail: IGatsbyImageData | null;
  };
  relatedArticles: Array<{
    Case_Name?: string; // Optional property for UseCases
    title?: string; // Optional property for Leaves
    gatsbyImageData: IGatsbyImageData | null;
  }>;
  tagSets?: any[]; // Optional property
  renderExploreFurther?: () => React.ReactNode;
  renderRelatedArticles?: () => React.ReactNode;
  renderShareUseCard?: () => React.ReactNode;

  routePrefix: string;
}

const BaseGrid: React.FC<BaseGridProps> = ({
  routePrefix,
  singlePage,
  relatedArticles,
  renderExploreFurther,
  renderRelatedArticles,
  renderShareUseCard,
}) => {
  const urlRegex = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/;
  const validUrl = urlRegex.test(singlePage.url ? singlePage.url : "");
  const theme = useTheme();

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid
          sx={{ borderBottom: "1px solid black", marginBottom: 5 }}
          container
          spacing={2}
        >
          <Grid item xs={12} sm={6}>
            <ThumbnailImage thumbnail={singlePage.thumbnail} />
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
              {singlePage.title}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            {validUrl && (
              <NotificationComponent
                args={{
                  notificationTitle: singlePage.title,
                  articleUrl: singlePage.url,
                }}
              />
            )}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <ArticleContent content={singlePage.content} />
          </Grid>
          {renderRelatedArticles && (
            <Grid item xs={12} sm={4}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {renderRelatedArticles()}
                </Grid>
              </Grid>
            </Grid>
          )}
          {renderShareUseCard && (
            <Grid item xs={12} sm={4}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {renderShareUseCard()}
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
        <Grid sx={{ marginBottom: 4 }} item xs={12}>
          {renderExploreFurther && (
            <Grid sx={{ marginBottom: 4 }} item xs={12}>
              {renderExploreFurther()}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default BaseGrid;
