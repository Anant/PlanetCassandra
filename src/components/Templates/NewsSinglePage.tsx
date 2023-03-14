// @ts-ignore
import { Helmet } from "react-helmet";
import React from "react";
import Layout from "../Layout/Layout";
import { Container, Typography } from "@mui/material";
import './singlePageTemplates.css'

interface PostSinglePageProps {
    pageContext: {
        id: string;
        title: string;
        content: string;
        author: string;
        summary: string;
    };
}

const PostSinglePage: React.FC<PostSinglePageProps> = ({
    pageContext: { id, title, author, content, summary },
}) => {
    return (
        <Layout>
            <Container>
                <Helmet>
                    <title>{title}</title>
                    <meta name={title} content={summary} />
                </Helmet>
                <div className="articleContainer" style={{ marginInline: "30px" }}>
          <article>
            <Typography
              variant="subtitle2"
              gutterBottom
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </article>
        </div>
            </Container>
        </Layout>
    );
};

export default PostSinglePage;
