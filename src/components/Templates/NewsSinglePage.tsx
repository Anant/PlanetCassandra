// @ts-ignore
import { Helmet } from "react-helmet";
import React from "react";
import Layout from "../Layout/Layout";
import { Button, Container, Grid, Typography } from "@mui/material";
import "./singlePageTemplates.css";
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
          <meta name="title" content={title} />
          <meta name="description" content={summary.slice(0, 40)} />

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://planetcassandra.org/",
              "@type": "WebPage",
              name: title,
              description: summary.slice(0, 40),
              keywords: title,
              author: {
                "@type": "Organization",
                name: title,
              },
            })}
          </script>
          {/* Open Graph */}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={summary.slice(0, 40)} />
          <meta
            property="og:image"
            content={
              "https://planetcassandra-stage.netlify.app/static/8715e2d2275d886278d5bf60602d5315/38943/LogoWithText.webp"
            }
          />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={summary.slice(0, 40)} />
          <meta
            name="twitter:image"
            content={
              "https://planetcassandra-stage.netlify.app/static/8715e2d2275d886278d5bf60602d5315/38943/LogoWithText.webp"
            }
          />
          {/* Other meta tags you may consider adding */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        </Helmet>
        <Grid container spacing={2}>
          <Grid
            item
            className="articleContainer"
            style={{ marginInline: "30px" }}
          >
            <h1>{title}</h1>
            <article>
              <Typography
                variant="subtitle2"
                gutterBottom
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </article>
            <Link style={{ textDecoration: "none", marginLeft: 3 }} to={link}>
              <Button variant="contained" color="primary">
                Continue Reading
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default PostSinglePage;
