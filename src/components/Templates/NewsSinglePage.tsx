// @ts-ignore
import { Helmet } from "react-helmet";
import React from "react";
import Layout from "../Layout/Layout";
import { Button, Container, Grid, Typography } from "@mui/material";
import "./singlePageTemplates.css";
import { Link } from "gatsby";
import { convert } from "html-to-text";

interface PostSinglePageProps {
  pageContext: {
    id: string;
    title: string;
    content: string;
    author: string;
    summary: string;
    link: string;
    image: any;
  };
}

const PostSinglePage: React.FC<PostSinglePageProps> = ({
  pageContext: { id, title, author, content, summary, link, image },
}) => {
  const metaDescription = convert(summary);
  const metaImage = image?.images?.fallback?.src
    ? `https://planetcassandra.org${image?.images?.fallback?.src}`
    : "https://planetcassandra-stage.netlify.app/static/8715e2d2275d886278d5bf60602d5315/38943/LogoWithText.webp";

  return (
    <Layout>
      <Container>
        <Helmet>
          <title>{title}</title>
          <meta name="title" content={title} />
          <meta name="description" content={metaDescription} />

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://planetcassandra.org/",
              "@type": "WebPage",
              name: title,
              description: metaDescription,
              keywords: title,
              author: author,
            })}
          </script>
          {/* Open Graph */}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:image" content={metaImage} />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={metaDescription} />
          <meta name="twitter:image" content={metaImage} />
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
                See Original
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default PostSinglePage;
