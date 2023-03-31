import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import Layout from '../components/Layout/Layout';
import VideoCardGrid from '../layouts/VideoCardGrid';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface VideoData {
    allYoutubeVideo: {
      nodes: {
        channelTitle: string;
        title: string;
        videoId: string;
        description: string;
        localThumbnail: {
          id: string;
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
        publishedAt: string;
      }[];
    };
}

const Videos: React.FC<VideoData> = () => {
  const { allYoutubeVideo }: VideoData = useStaticQuery(query);
  const cardData = allYoutubeVideo.nodes;

  const videos = cardData.map((video) => {
    return {
      channelTitle: video.channelTitle,
      title: video.title,
      videoId: video.videoId,
      thumbnail: video.localThumbnail.childImageSharp.gatsbyImageData,
      description: video.description,
      date: video.publishedAt,
    };
  });


  return (
    <Layout>
      <VideoCardGrid cardData={videos} />
    </Layout>
  );
};

const query = graphql`
{
  allYoutubeVideo {
    totalCount
    nodes {
      channelTitle
      title
      videoId
      description
      localThumbnail {
        id
        childImageSharp {
          gatsbyImageData
        }
      }
      publishedAt
    }
  }
}
`;

export default Videos;
