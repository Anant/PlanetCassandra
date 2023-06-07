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
  };
}

const PostSinglePage: React.FC<PostSinglePageProps> = ({
  pageContext: { id, title, tags, content, featuredImage, name, date, avatar },
}) => {
  const dateStr = date;
  const dateObj = new Date(dateStr);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[dateObj.getMonth()];
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const metaTagContent = convert(content);

  const metaDescription = metaTagContent ? metaTagContent.slice(0, 40) : title;

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
          <meta
            property="og:image"
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
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={metaDescription} />
          <meta
            name="twitter:image"
            content={
              "https://planetcassandra-stage.netlify.app/static/8715e2d2275d886278d5bf60602d5315/38943/LogoWithText.webp"
            }
          />
        </Helmet>
        <div className="articleContainer" style={{ marginInline: "30px" }}>
          <article>
            <Typography className="title-component">{title}</Typography>
            <Box sx={{ display: "flex", alignItems: "center", marginY: 4 }}>
              {/* <StaticImage
                src="https://secure.gravatar.com/avatar/b1e26b5e4ab1c95642d2fe570ab84839?s=96&d=mm&r=g"
                alt="Avatar"
                layout="fixed"
                width={25}
                height={25}
                style={{ borderRadius: '50%' }}
              /> */}

              <Typography className="author-component">
                {name} on {month} {day}, {year}
              </Typography>
            </Box>
            <GatsbyImage
              image={featuredImage}
              alt={title}
              style={{ marginBottom: "30px" }}
            />
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
