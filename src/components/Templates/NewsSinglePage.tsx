// @ts-ignore
import { Helmet } from "react-helmet";
import React from "react";
import Layout from "../Layout/Layout";
import { Container, Typography } from "@mui/material";

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
                <div style={{ marginInline: "30px" }}>
                    <Typography variant="h4">{title}</Typography>
                    <Typography
                        variant="subtitle2"
                        gutterBottom
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </Container>
        </Layout>
    );
};

export default PostSinglePage;
