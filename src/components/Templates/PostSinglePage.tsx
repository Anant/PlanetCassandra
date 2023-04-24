// @ts-ignore

import { Helmet } from "react-helmet";
import React from "react";
import Layout from "../Layout/Layout";
import { Box, Container, Typography } from "@mui/material";
import { IGatsbyImageData, StaticImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import "./singlePageTemplates.css";
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
  return (
    <Layout>
      <Container>
        <Helmet>
          <title>{title}</title>
          <meta name={title} content={tags.join(",")} />
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
            <GatsbyImage image={featuredImage} alt={title} />
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
