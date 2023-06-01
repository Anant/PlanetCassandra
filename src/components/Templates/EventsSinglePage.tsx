// @ts-ignore
import { Helmet } from "react-helmet";
import React from "react";
import Layout from "../Layout/Layout";
import { Container, Typography } from "@mui/material";

interface EventsSinglePageProps {
  pageContext: {
    id: string;
    title: string;
    pubDate: string;
    content: string;
    author: string;
  };
}

const EventsSinglePage: React.FC<EventsSinglePageProps> = ({
  pageContext: { title, pubDate, content, author },
}) => {
  return (
    <Layout>
      <Container>
        <Helmet>
          <title>{title}</title>
          <meta name={title} content={content} />
        </Helmet>
        <div style={{ marginInline: "30px" }}>
          <Typography variant="h4">{title}</Typography>
          <Typography>{content}</Typography>
        </div>
      </Container>
    </Layout>
  );
};

export default EventsSinglePage;
