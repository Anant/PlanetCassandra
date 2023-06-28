// @ts-ignore

import { Helmet } from "react-helmet";
import React from "react";
import Layout from "../Layout/Layout";
import { Box, Container, Typography } from "@mui/material";
import { IGatsbyImageData, StaticImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import "./singlePageTemplates.css";
import { convert } from "html-to-text";

interface PostSinglePageProps {
  pageContext: {
    id: string;
    title: string;
    content: string;
    tags: string[];
    featuredImage: IGatsbyImageData;
    name: string;
    date: Date;
    avatar: string;
    excerpt: string;
  };
}

const PostSinglePage: React.FC<PostSinglePageProps> = ({
  pageContext: {
    id,
    title,
    tags,
    content,
    featuredImage,
    name,
    date,
    excerpt,
    avatar,
  },
}) => {
  const metaDescription = convert(excerpt);
  const metaImage = featuredImage?.images?.fallback?.src
    ? `https://planetcassandra.org${featuredImage?.images?.fallback?.src}`
    : "https://planetcassandra-stage.netlify.app/static/8715e2d2275d886278d5bf60602d5315/38943/LogoWithText.webp";

  let dateObj = new Date(date);
  let year = dateObj.getFullYear();
  let month = dateObj.getMonth() + 1; // getMonth() is zero-based, so we add 1
  let day = dateObj.getDate();

  return (
    <Layout>
      <Container>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={metaDescription} />
          <meta name="keywords" content={tags.join(", ")} />

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://planetcassandra.org/",
              "@type": "WebPage",
              name: title,
              description: metaDescription,
              keywords: title,
              author: {
                "@type": "Organization",
                name: title,
              },
            })}
          </script>
          {/* Open Graph */}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:image" content={metaImage} />

          {/* Other meta tags you may consider adding */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={metaDescription} />
          <meta name="twitter:image" content={metaImage} />
        </Helmet>
        <div className="articleContainer" style={{ marginInline: "30px" }}>
          <article>
            <Typography className="title-component">{title}</Typography>
            <Box sx={{ display: "flex", alignItems: "center", marginY: 4 }}>
              <img
                src={avatar}
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
              />
              <Typography className="author-component">
                {name} on {month} {day}, {year}
              </Typography>
            </Box>
            <Box
              className="thumbnail-img-box img"
              sx={{ width: "100%", marginBottom: "30px", textAlign: "center" }}
            >
              <GatsbyImage image={featuredImage} alt={title} />
            </Box>

            <Typography
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
