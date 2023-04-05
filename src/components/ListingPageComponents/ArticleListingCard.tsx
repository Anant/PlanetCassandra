import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import ArticleInfoContainer from "./ListingArticleSubCards/ArticleInfoContainer/ArticleInfoContainer";
import CardTitle from "./ListingArticleSubCards/CardTitle/CardTitle";
import ReadMoreButton from "./ListingArticleSubCards/ReadMoreButton/ReadMoreButton";
import NoImg from "../../images/NoPreviewImage.png";

type ArticleListingCardProps = {
  hasVideoContent: boolean;
  item: {
    title: string;
    published_by: string;
    wallabag_created_at: string;
    url: string;
    preview_picture?: string;
    content?: string;
  };
};

const ArticleListingCard: React.FC<ArticleListingCardProps> = ({
  hasVideoContent,
  item: {
    title,
    published_by,
    wallabag_created_at,
    url,
    preview_picture,
    content,
  },
}) => {
  const dateCreated = new Date(wallabag_created_at).toLocaleDateString("en-US");
  const formattedContent = content ? content.replace(/<[^>]+>/g, "") : null;
  return (
    <Card
      sx={{
        backgroundColor: "#FEFEFE",
        border: "1px solid rgba(56, 61, 59, 0.1)",
        boxShadow: "3px 4px 6px 2px rgba(0, 0, 0, 0.25)",
        borderRadius: "8px",
      }}
    >
      {hasVideoContent && (
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            paddingX: { sm: 1, lg: 1.5 },
            paddingTop: { sm: 1, lg: 2 },
          }}
        >
          <CardMedia
            component="img"
            sx={{ borderRadius: 1 }}
            image={preview_picture ? preview_picture : NoImg}
            alt={"Youtube video preview image for " + title}
          />
        </Box>
      )}
      <Box sx={{ padding: { xs: 3, sm: 2, xl: 5 } }}>
        <CardTitle title={title} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Typography
            className="textTruncate-5"
            sx={{
              fontSize: { xs: "14px", lg: "22px" },
              fontFamily: "Roboto condensed, sans-serif",
              fontWeight: 400,
            }}
          >
            {formattedContent}
          </Typography>
        </Box>

        <ArticleInfoContainer
          author={published_by}
          dateCreated={dateCreated}
          title={title}
          url={url}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: hasVideoContent ? "flex-end" : "flex-start",
          }}
        >
          <ReadMoreButton
            hasVideoContent={hasVideoContent}
            url={url}
            title={title}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default ArticleListingCard;
