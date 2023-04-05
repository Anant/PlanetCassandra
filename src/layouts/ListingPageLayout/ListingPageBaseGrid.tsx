import React from "react";
import { Grid, Container } from "@mui/material";

import NewsLetterCard from "../../components/SinglePageComponents/Cards/NewsLetterCard";
import ExploreFurtherLayout from "../SinglePageLayout/ExploreFurtherLayout";
import TrainingAdComponent from "../../components/SinglePageComponents/Cards/TrainingAdComponent";
import ListingArticleHeroSection from "../../components/ListingPageComponents/ListingArticlesHeroSection";
import ArticlesFilters from "../../components/ListingPageComponents/ArticlesFilters";
import ListArticlesLayout from "./ListArticlesLayout";
import ListingRelatedArticlesLayout from "./ListingRelatedArticlesLayout";
import MoreListingCardsLayout from "./MoreListingCardsLayout";
interface ListingPageGridLayoutProps {
  args: {
    articles: {
      id: string;
      title: string;
      url: string;
      content: string;
      description: string;
      domain_name: string;
      preview_picture: string | null;
      reading_time: number | null;
      published_by: string[];
      origin_url: string | null;
      wallabag_created_at: string;
      tags: string[];
    }[];
    listingItems: Array<{
      id: string;
      title: string;
      url: string;
      content: string;
      description: string;
      domain_name: string;
      preview_picture: string | null;
      reading_time: number | null;
      published_by: string[];
      origin_url: string | null;
      wallabag_created_at: string;
      tags: string[];
    }>;
    selectedTag: string;
    setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
    sortedTags: string[];
  };
}

const ListingPageGridLayout: React.FC<ListingPageGridLayoutProps> = ({
  args: { articles, listingItems, selectedTag, setSelectedTag, sortedTags },
}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ListingArticleHeroSection
          title={"articles"}
          data={articles.slice(0, 3)}
          hasVideoContent={false}
        />
      </Grid>
      <Container sx={{ marginTop: { xs: 6, sm: 0 } }} maxWidth="xl">
        <Grid sx={{ marginY: 5 }} item xs={12}>
          <ArticlesFilters
            args={{
              fileItems: sortedTags,
              selectedTag: selectedTag,
              setSelectedTag: setSelectedTag,
            }}
          />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <ListArticlesLayout data={listingItems} hasSharingContent={false} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TrainingAdComponent />
              </Grid>
              <Grid item xs={12}>
                <ListingRelatedArticlesLayout
                  data={articles.slice(7, 10)}
                  hasVideoLink={false}
                />
              </Grid>
              <Grid item xs={12}>
                <NewsLetterCard />
              </Grid>
              <Grid item xs={12}>
                <ListingRelatedArticlesLayout
                  data={articles.slice(10, 13)}
                  hasVideoLink={false}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ marginY: 3 }} item xs={12}>
          <MoreListingCardsLayout data={articles.slice(0, 12)} />
        </Grid>
      </Container>
    </Grid>
  );
};

export default ListingPageGridLayout;
