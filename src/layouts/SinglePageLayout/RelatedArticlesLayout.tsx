import { Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import SingleArticleCard from '../../components/SinglePageComponents/Cards/SingleArticleCard';

interface ArticleData {
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
}
interface RelatedArticlesLayoutProps {
  data: ArticleData[];
  routePrefix : string;
}

function RelatedArticlesLayout({ data,routePrefix  }: RelatedArticlesLayoutProps) {
  const theme = useTheme();
  return (
    <Grid
      sx={{
        backgroundColor: '#F3F3F3',
        paddingY: { xs: 2, sm: 2, md: 4 },
        paddingX: { xs: 2, sm: 2, md: 5 },
      }}
    >
      <Typography
        fontSize={{ xs: 24, sm: 18, md: 32 }}
        fontWeight={700}
        fontFamily="Roboto Condensed, sans-serif"
        color={theme.palette.primary.darkblue}
        marginBottom={2}
      >
        Related Articles
      </Typography>
      <Grid container spacing={{ xs: 2, sm: 1.5, md: 3 }}>
        {data.map((item: ArticleData) => (
          <Grid key={item.id + item.title + item.url} item xs={12}>
            <SingleArticleCard
              cardHeight={{ xs: '84px', sm: '54px', md: '124px' }}
              imageWidth={{ xs: '119px', sm: '87px', md: '200px' }}
              titleFontSize={{ xs: '13px', sm: '8px', md: '18px' }}
              dataFontSize={{ xs: '9px', sm: '6px', md: '15px' }}
              item={item}
              routePrefix={routePrefix}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default RelatedArticlesLayout;
