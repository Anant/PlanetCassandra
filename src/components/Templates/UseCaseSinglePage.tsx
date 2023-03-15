import React from "react";
// @ts-ignore
import { Helmet } from "react-helmet";
import { Container, Typography } from "@mui/material";
import Layout from "../Layout/Layout";
import './singlePageTemplates.css'

interface UseCasesSinglePageProps {
  pageContext: {
    id: string;
    title: string;
    Description: string;
    Case_Article_Content: string;
  };
}

const UseCasesSinglePage: React.FC<UseCasesSinglePageProps> = ({
  pageContext: { id, title, Description, Case_Article_Content },
}) => {
  return (
    <Layout>
      <Container>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <div className="articleContainer" style={{ marginInline: "30px" }}>
          <article>
            <Typography
              variant="h4"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <Typography
              variant="subtitle2"
              gutterBottom
              dangerouslySetInnerHTML={{ __html: Description }}
            />
            <Typography
              variant="subtitle2"
              gutterBottom
              dangerouslySetInnerHTML={{ __html: Case_Article_Content }}
            />
          </article>
        </div>
      </Container>
    </Layout>
  );
};

export default UseCasesSinglePage;
