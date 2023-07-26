import React, { FC, ReactElement } from "react";
import { Card, Box } from "@mui/material";

import getSlug from "speakingurl";
import NoImg from "../../../images/NoPreviewImage.png";
import CardTitle from "./SingleArticleSubCard/CardTitle";
import DescriptionComponent from "./SingleArticleSubCard/CardDescription";
import ShareComponent from "./SingleArticleSubCard/CardShare";
import CardDateComponent from "./SingleArticleSubCard/CardDate";
import AuthorComponent from "./SingleArticleSubCard/CardAuthor";
import CardImageAndTagsComponent from "./SingleArticleSubCard/CardImageAndTags";
import { Link } from "gatsby";

type SingleArticleCardProps = {
  data?: any;
  item: any;
  cardHeight?: any;
  imageWidth?: any;
  titleFontSize?: any;
  dataFontSize?: any;
  isShared?: boolean;
  hasDescription?: boolean;
  baseUrl?: string;
  routePrefix: string;
};

const SingleArticleCard: FC<SingleArticleCardProps> = ({
  data,
  item,
  cardHeight,
  imageWidth,
  titleFontSize,
  dataFontSize,
  isShared,
  hasDescription,
  baseUrl,
  routePrefix,
}): ReactElement => {
  let articleUrl = `${routePrefix}/${getSlug(item.title)}`;
  if (item.url && item.url.includes("https://planetcassandra.org")) {
    let newUrl = item.url.replace("https://planetcassandra.org/post/", "");
    articleUrl = `/post/${newUrl}`;
  } else {
    articleUrl = `${routePrefix}/${getSlug(item.title)}`;
  }
  const addDefaultSrc = (ev: any) => {
    ev.target.src = NoImg;
  };

  let author = item.published_by;
  if (
    item.published_by &&
    item.published_by.startsWith("[") &&
    item.published_by.endsWith("]")
  ) {
    // If the string contains brackets, remove them
    author = item.published_by.slice(2, -2);
  }
  const cardTagsItems = item.tags ? item.tags.slice(0, 3) : [];

  return (
    <Card
      sx={{
        height: cardHeight ? cardHeight : "124px",
        width: "100%",
        backgroundColor: "#EEEEEE",
        border: "0.937343px solid rgba(56, 61, 59, 0.1)",
        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)",
        borderRadius: "7.5px",
      }}
      style={{ display: "flex" }}
    >
      <CardImageAndTagsComponent
        cardTagsItems={cardTagsItems}
        imageWidth={imageWidth}
        articleUrl={articleUrl}
        cardImg={item.thumbnail}
        addDefaultSrc={addDefaultSrc}
      />
      <Box
        sx={{
          flexGrow: 1,
          padding: { xs: 1, sm: 1, md: 2 },
          display: "flex",
        }}
      >
        <Link
          to={articleUrl}
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: "1",
            justifyContent: "space-between",
          }}
        >
          <CardTitle title={item.title} titleFontSize={titleFontSize} />
          {hasDescription && <DescriptionComponent desc={item.description} />}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: isShared ? { sm: "70%", md: "60%" } : "100%",
            }}
          >
            {/* <AuthorComponent dataFontSize={dataFontSize} author={author} /> */}

            <CardDateComponent
              dataFontSize={dataFontSize}
              dateCreated={item.wallabag_created_at}
            />
            {isShared && (
              <ShareComponent
                color="#FFA62B"
                dataFontSize={dataFontSize}
                url={item.url}
                quote={item.title}
              />
            )}
          </Box>
        </Link>
      </Box>
    </Card>
  );
};
export default SingleArticleCard;
