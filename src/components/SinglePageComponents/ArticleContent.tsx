import React from "react";
import { Grid } from "@mui/material";
import "./articleContent.css";
import showdown from "showdown";

interface ArticleContentProps {
  content: string;
}

function ArticleContent({ content }: ArticleContentProps) {
  let converter = new showdown.Converter(),
    html = converter.makeHtml(content);

  return (
    <Grid
      className="articleContainer"
      dangerouslySetInnerHTML={{
        __html: `<article> ${html} </article>`,
      }}
    />
  );
}

export default ArticleContent;
