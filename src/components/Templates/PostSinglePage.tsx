// @ts-ignore
import { Helmet } from "react-helmet";
import React from "react";
import Layout from "../Layout/Layout";
import { Container, Typography } from "@mui/material";
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { GatsbyImage } from "gatsby-plugin-image"

interface PostSinglePageProps {
  pageContext: {
    id: string;
    title: string;
    content: string;
    tags: string[];
    featuredImage: IGatsbyImageData;
  };
}

const PostSinglePage: React.FC<PostSinglePageProps> = ({
  pageContext: { id, title, tags, content, featuredImage },
}) => {
  return (
    <Layout>
      <Container>
      <Helmet>
        <title>{title}</title>
        <meta name={title} content={tags.join(",")} />
      </Helmet>
      <div style={{ marginInline: "30px" }}>
        <Typography variant="h4">{title}</Typography>
        <GatsbyImage image={featuredImage} alt={title} />
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
