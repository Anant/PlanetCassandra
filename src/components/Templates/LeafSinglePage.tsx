// @ts-ignore
import { Helmet } from "react-helmet";
import React from "react";
import Layout from "../Layout/Layout";
import { Container, Typography } from "@mui/material";

interface LeafSinglePageProps {
  pageContext: {
    tags: string[];
    title: string;
    last_sourced_from_wallabag: string;
    description: string;
    id: string;
    content: string;
  };
}

const LeafSinglePage: React.FC<LeafSinglePageProps> = ({
  pageContext: { tags, title, last_sourced_from_wallabag, description, content },
}) => {
  return (
    <Layout>
      <Container>
        <Helmet>
          <title>{title}</title>
          <meta name={title} content={description} />
        </Helmet>
        <div style={{ marginInline: "30px" }}>
          <Typography variant="h4">{title}</Typography>
          <Typography>{description}</Typography>
        </div>
      </Container>
    </Layout>
  );
};

export default LeafSinglePage;
