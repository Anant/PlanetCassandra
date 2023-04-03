import React from "react";
import { Container, Grid } from "@mui/material";
import Layout from "../../components/Layout/Layout";

import ExploreFurtherLayout from "./ExploreFurtherLayout";
import ExploreRelatedTopics from "./ExploreRelatedTopics";
import RelatedArticlesLayout from "./RelatedArticlesLayout";
import ArticleContent from "../../components/SinglePageComponents/ArticleContent";
import TrainingAdComponent from "../../components/SinglePageComponents/Cards/TrainingAdComponent";
import NotificationComponent from "../../components/SinglePageComponents/Cards/NotificationComponent";
import ThumbnailImage from "../../components/SinglePageComponents/Cards/Thumbnail/Thumbnail";
import DescriptionCard from "../../components/SinglePageComponents/Cards/DescriptionCard";
import NewsLetterCard from "../../components/SinglePageComponents/Cards/NewsLetterCard";
import { IGatsbyImageData } from "gatsby-plugin-image";
interface SinglePageProps {
  args: {
    singlePage: {
      title: string;
      reading_time?: number;
      wallabag_created_at: string;
      published_by?: string;
      url: string;
      content: string;
    };
    thumbnail: IGatsbyImageData;
    articles: {
      id: string;
      preview_picture: string;
      published_at: string;
      tags: string[];
      title: string;
      reading_time: number;
      wallabag_created_at: string;
      published_by: string;
      url: string;
      content: string;
    }[];
    title: string;
  };
}

const SinglePageBaseGrid: React.FC<SinglePageProps> = ({
  args: { singlePage, thumbnail, articles, title },
}) => {
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
          <Grid item xs={12} sm={6}>
            <ThumbnailImage thumbnail={thumbnail} />
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
            {/* <ArticleContent content={singlePage.content} /> */}
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <RelatedArticlesLayout data={articles} />
              </Grid>
              <Grid item xs={12}>
                <TrainingAdComponent />
              </Grid>
              <Grid item xs={12}>
                <NewsLetterCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ExploreRelatedTopics />
        </Grid>
        <Grid sx={{ marginBottom: 4 }} item xs={12}>
          <ExploreFurtherLayout
            args={{
              data: articles,
              isListingPage: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          {/* comments section */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SinglePageBaseGrid;
