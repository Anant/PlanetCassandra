import React from "react";
import { Container, Grid } from "@mui/material";
import { IGatsbyImageData } from "gatsby-plugin-image";

import ExploreFurtherLayout from "./ExploreFurtherLayout";
import ExploreRelatedTopics from "./ExploreRelatedTopics";
import RelatedArticlesLayout from "./RelatedArticlesLayout";
import ArticleContent from "../../components/SinglePageComponents/ArticleContent";
import TrainingAdComponent from "../../components/SinglePageComponents/Cards/TrainingAdComponent";
import NotificationComponent from "../../components/SinglePageComponents/Cards/NotificationComponent";
import ThumbnailImage from "../../components/SinglePageComponents/Cards/Thumbnail/Thumbnail";
import DescriptionCard from "../../components/SinglePageComponents/Cards/DescriptionCard";
import NewsLetterCard from "../../components/SinglePageComponents/Cards/NewsLetterCard";

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
  routePrefix : string;
}


const BaseGrid: React.FC<BaseGridProps> = ({ routePrefix, singlePage, relatedArticles, renderExploreFurther }) => {
  //console.log(singlePage)
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid
          sx={{ borderBottom: "1px solid black", marginBottom: 5 }}
          container
          spacing={2}
        >
          <Grid item xs={12} sm={6}>
            <DescriptionCard article={singlePage} />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            item
            xs={12}
            sm={6}
          >
            <ThumbnailImage thumbnail={singlePage.thumbnail} />
            <NotificationComponent
              args={{
                notificationTitle: singlePage.title,
                articleUrl: singlePage.url,
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <ArticleContent content={singlePage.content} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <RelatedArticlesLayout data={relatedArticles} routePrefix={routePrefix} />
              </Grid>
            </Grid>
          </Grid>
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

