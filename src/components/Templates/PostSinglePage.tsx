// @ts-ignore
import { Helmet } from "react-helmet";
import React from "react";
import Layout from "../Layout/Layout";
import { Typography } from "@mui/material";

interface PostSinglePageProps {
  pageContext: {
    id: string;
    title: string;
    content: string;
    tags: string[];
  };
}

const PostSinglePage: React.FC<PostSinglePageProps> = ({
  pageContext: { id, title, tags, content },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name={title} content={tags.join(",")} />
      </Helmet>
      <div style={{ marginInline: "30px" }}>
        <Typography variant="h4">Post with id: {id}</Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </Layout>
  );
};

export default PostSinglePage;
