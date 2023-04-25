import React from "react";
import { Container, Grid, Typography, useTheme } from "@mui/material";
import { IGatsbyImageData } from "gatsby-plugin-image";

import ArticleContent from "../../components/SinglePageComponents/ArticleContent";
import NotificationComponent from "../../components/SinglePageComponents/Cards/NotificationComponent";
import ThumbnailImage from "../../components/SinglePageComponents/Cards/Thumbnail/Thumbnail";

import UseCaseTitleSection from "../../components/SinglePageComponents/UseCaseTitle/UseCaseTitleSection";
import LeavesTitleSection from "../../components/SinglePageComponents/Cards/LeafTitle/LeavesTitleSection";

export interface BaseGridProps {
  singlePage: {
    Case_Stack?: {
      data: {
        Name: string;
      }[];
    };
    Case_Function?: {
      data: {
        Function_Name: string;
      }[];
    };
    Case_Industry?: {
      data: {
        Industry_Name: string;
      }[];
    };
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
  titleSectionType: "usecase" | "leaves";
  routePrefix: string;
}

const BaseGrid: React.FC<BaseGridProps> = ({
  routePrefix,
  singlePage,
  titleSectionType,
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
        {titleSectionType === "usecase" ? (
          <UseCaseTitleSection
            title={singlePage.title}
            thumbnail={singlePage.thumbnail}
            Case_Stack={singlePage.Case_Stack}
            Case_Function={singlePage.Case_Function}
            Case_Industry={singlePage.Case_Industry}
          />
        ) : (
          <LeavesTitleSection
            title={singlePage.title}
            thumbnail={singlePage.thumbnail}
          />
        )}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            {validUrl && (
              <NotificationComponent
                args={{
                  notificationTitle: singlePage.title,
                  //@ts-ignore
                  articleUrl: singlePage.url,
                }}
              />
            )}
          </Grid>
        </Grid>
        <Grid container spacing={{ sm: 4, lg: 7 }}>
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
