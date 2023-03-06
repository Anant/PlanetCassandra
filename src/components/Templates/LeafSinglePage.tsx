// @ts-ignore
import { Helmet } from "react-helmet";
import React from "react";
import Layout from "../Layout/Layout";
import { Container, Typography } from "@mui/material";

interface LeafSinglePageProps {
  pageContext: {
    tags: string[];
    title: string;
    wallabag_created_at: string;
    description: string;
    id: string;
    content: string;
    preview_picture: string;
  };
}

const LeafSinglePage: React.FC<LeafSinglePageProps> = ({
  pageContext: { tags, title, wallabag_created_at, description, content, preview_picture },
}) => {
  return (
    <Layout>
      <Container>
        <Helmet>
          <title>{title}</title>
          <meta name={title} content={description} />
        </Helmet>
        <div style={{ marginInline: "30px" }}>
          <div style={{ marginInline: "30px" }}>
                    <Typography variant="h4">{title}</Typography>
                    <img src={preview_picture} alt={preview_picture} />
                    <Typography
                        variant="subtitle2"
                        gutterBottom
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
        </div>
      </Container>
    </Layout>
  );
};

export default LeafSinglePage;
