import React from "react";
import { Grid } from "@mui/material";
import "../../components/Templates/singlePageTemplates.css";
interface ArticleContentProps {
  content: string;
}

function ArticleContent({ content }: ArticleContentProps) {
  return (
    <Grid
      className="articleContainer"
      dangerouslySetInnerHTML={{
        __html: `<article> ${content} </article>`,
      }}
    />
  );
}

export default ArticleContent;
