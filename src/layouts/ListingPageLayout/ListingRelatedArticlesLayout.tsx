import React from "react";
import { Grid } from "@mui/material";
import RelatedArticleCard from "../../components/SinglePageComponents/Cards/RelatedArticlesCard";
interface Props {
  data: Array<object>;
  hasVideoLink: boolean;
}

function ListingRelatedArticlesLayout({ data, hasVideoLink }: Props) {
  return (
    <Grid
      container
      sx={{
        padding: 2,
        border: "1px solid rgba(56, 61, 59, 0.1)",
        borderRadius: 1,
        boxShadow: "1.64527px 1.64527px 4.11317px rgba(0, 0, 0, 0.15)",
      }}
      rowSpacing={2}
    >
      {data.map((item: any) => (
        <Grid key={item.id} item xs={12}>
          <RelatedArticleCard
            hasVideoLink={hasVideoLink}
            title={item.title}
            description={item.description}
            link={item.url}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default ListingRelatedArticlesLayout;
