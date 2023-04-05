import { Grid, Typography, Box } from "@mui/material";
import React from "react";

import SingleArticleCard from "../../components/SinglePageComponents/Cards/SingleArticleCard";
interface Article {
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
}

type Props = {
  data: Article[];
};

const MoreListingCardsLayout: React.FC<Props> = ({ data }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#F3F3F3",
        paddingY: { xs: 2, sm: 2, md: 4 },
        paddingX: { xs: 2, sm: 2, md: 7 },
      }}
    >
      <Typography
        fontSize={{ xs: 20, sm: 17, md: 40 }}
        fontWeight={700}
        fontFamily="Roboto Condensed, sans-serif"
        color={"#163BBF"}
        marginBottom={2}
      >
        Explore Further
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 2, md: 4 }}
        columnSpacing={{ xs: 2, sm: 3, md: 5 }}
      >
        {data.map((item: any) => (
          <Grid key={item.id} item xs={12} sm={4} md={6} lg={4}>
            <SingleArticleCard
              cardHeight={{ xs: "84px", sm: "54px", md: "124px" }}
              imageWidth={{ xs: "119px", sm: "87px", md: "200px" }}
              titleFontSize={{ xs: "13px", sm: "8px", md: "18px" }}
              dataFontSize={{ xs: "9px", sm: "6px", md: "15px" }}
              item={item}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MoreListingCardsLayout;
