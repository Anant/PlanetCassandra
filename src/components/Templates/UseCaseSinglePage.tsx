import React from "react";
// @ts-ignore
import { Helmet } from "react-helmet";
import { Container, Typography } from "@mui/material";
import Layout from "../Layout/Layout";
import './singlePageTemplates.css'
import { IGatsbyImageData } from "gatsby-plugin-image";

interface UseCasesSinglePageProps {
  pageContext: {
    id: string;
    title: string;
    Description: string;
    Case_Article_Content: string;
    RelatedArticles: Array<{
      Case_Name: string;
      gatsbyImageData: IGatsbyImageData | null;
    }>;
    gatsbyImageData: IGatsbyImageData | null;
  };
}




const UseCasesSinglePage: React.FC<UseCasesSinglePageProps> = ({
  pageContext: { id, title, Description, Case_Article_Content, RelatedArticles },
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
        <div className="relatedArticles">
            <Typography variant="h6">More Articles:</Typography>
            {RelatedArticles.map(article => (
              <div key={article.Case_Name}>
                <Typography variant="h6">{article.Case_Name}</Typography>
              </div>
            ))}
          </div>
      </Container>
    </Layout>
  );
};

export default UseCasesSinglePage;
