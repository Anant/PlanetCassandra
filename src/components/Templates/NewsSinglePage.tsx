// @ts-ignore
import { Helmet } from "react-helmet";
import React from "react";
import Layout from "../Layout/Layout";
import { Button, Container,  Grid,  Typography } from "@mui/material";
import './singlePageTemplates.css'
import { Link } from "gatsby";

interface PostSinglePageProps {
    pageContext: {
        id: string;
        title: string;
        content: string;
        author: string;
        summary: string;
        link: string;
    };
}

const PostSinglePage: React.FC<PostSinglePageProps> = ({
    pageContext: { id, title, author, content, summary, link },
}) => {
    return (
        <Layout>
            <Container>
                <Helmet>
                    <title>{title}</title>
                    <meta name={title} content={summary} />
                </Helmet>
                <Grid container spacing={2}> 
                <Grid item className="articleContainer" style={{ marginInline: "30px" }}>
                    <article>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    </article>
                    <Link style={{ textDecoration: "none", marginLeft:3}} to={link} >
                        <Button variant="contained" color="primary" >Continue Reading</Button>
                    </Link>
                </Grid>
                </Grid>

            </Container>
        </Layout>
    );
};

export default PostSinglePage;
