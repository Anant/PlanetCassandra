import React from "react";
//@ts-ignore
import { Helmet } from "react-helmet";
import { Container, Typography } from "@mui/material";
import Layout from "../Layout/Layout";
import YouTube from "react-youtube";
import './singlePageTemplates.css'

interface YouTubeSinglePageProps {
  pageContext: {
    id: string;
    title: string;
    description: string;
    videoId: string;
  };
}

const YouTubeSinglePage: React.FC<YouTubeSinglePageProps> = ({
  pageContext: { id, title, description, videoId },
}) => {


  return (
    <Layout>
      <Container>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <div className="videoContainer">
          <YouTube videoId={videoId} />
        </div>
      </Container>
    </Layout>
  );
};

export default YouTubeSinglePage;
