import React from "react";
// @ts-ignore
import { Helmet } from "react-helmet";
import { Container, Typography } from "@mui/material";
import Layout from "../Layout/Layout";

interface UseCasesSinglePageProps {
  pageContext: {
    id: string;
    title: string;
    Description: string;
  };
}

const UseCasesSinglePage: React.FC<UseCasesSinglePageProps> = ({
  pageContext: { id, title, Description },
}) => {
  return (
    <Layout>
      <Container>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <div style={{ margin: "30px" }}>
          <Typography variant="h4">{title}</Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            dangerouslySetInnerHTML={{ __html: Description }}
          />
        </div>
      </Container>
    </Layout>
  );
};

export default UseCasesSinglePage;
