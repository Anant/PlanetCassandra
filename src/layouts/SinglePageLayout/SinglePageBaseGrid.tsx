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

interface SinglePageProps {
  args: {
    singlePage: {
      tags: string[];
      title: string;
      wallabag_created_at: string;
      description: string;
      id: string;
      content: string;
      preview_picture: string;
      url: string;
      origin_url: string;
      reading_time: number;
      domain_name: string;
      thumbnail: IGatsbyImageData | null;
    };
    relatedArticles: any[];
    tagSets: any[];
  };
}

const SinglePageBaseGrid: React.FC<SinglePageProps> = ({
  args: { singlePage, relatedArticles, tagSets },
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
                {/* <RelatedArticlesLayout data={relatedArticles} /> */}
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
          {/* <ExploreFurtherLayout
            args={{
              data: tagSets,
              isListingPage: false,
            }}
          /> */}
        </Grid>
        <Grid item xs={12}>
          {/* comments section */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SinglePageBaseGrid;
