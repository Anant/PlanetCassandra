import { Grid } from "@mui/material";
import React from "react";
import ArticleListingCard from "../../components/ListingPageComponents/ArticleListingCard";
interface Props {
  data: [];
  hasVideoContent: boolean;
}

function HeroSectionCardsLayout({ data, hasVideoContent }: Props) {
  return (
    <Grid sx={{ marginTop: 3 }} container spacing={2}>
      {data.slice(0, 3).map((item: any) => (
        <Grid key={item.id} item xs={12} sm={4}>
          <ArticleListingCard hasVideoContent={hasVideoContent} item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default HeroSectionCardsLayout;
