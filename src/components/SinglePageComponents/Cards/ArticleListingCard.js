import { Box, Card } from "@mui/material"
import React from "react"

import ArticleInfoContainer from "./ListingArticleSubCards/ArticleInfoContainer/ArticleInfoContainer"
import CardTitle from "./ListingArticleSubCards/CardTitle/CardTitle"
import ReadMoreButton from "./ListingArticleSubCards/ReadMoreButton/ReadMoreButton"

const ArticleListingCard = ({
  item: { title, published_by, wallabag_created_at, url },
}) => {
  const dateCreated = new Date(wallabag_created_at).toLocaleDateString("en-US")

  return (
    <Card
      sx={{
        backgroundColor: "#FEFEFE",
        border: "1px solid rgba(56, 61, 59, 0.1)",
        boxShadow: "3px 4px 6px 2px rgba(0, 0, 0, 0.25)",
        borderRadius: "8px",
      }}
    >
      <Box sx={{ padding: { xs: 3, sm: 2, md: 5 } }}>
        <CardTitle title={title} />
        <ArticleInfoContainer
          author={published_by}
          dateCreated={dateCreated}
          title={title}
          url={url}
        />
        <ReadMoreButton title={title} />
      </Box>
    </Card>
  )
}

export default ArticleListingCard
