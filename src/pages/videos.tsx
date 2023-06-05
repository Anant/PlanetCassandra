import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import VideoCardGrid from "../layouts/VideoCardGrid";
import { IGatsbyImageData } from "gatsby-plugin-image";
//@ts-ignore
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Video Library - Planet Cassandra</title>
        <meta property="og:image" content="../images/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={"Planet Cassandra"} />
        <meta
          name="keywords"
          content="Cassandra videos, database tutorials, video demonstrations, case studies, best practices, NoSQL database"
        />
        <meta
          name="description"
          content="Explore a collection of informative and educational videos on Cassandra database on Planet Cassandra. Watch videos on various topics related to Cassandra, including tutorials, demonstrations, case studies, and best practices, to learn more about this popular NoSQL database."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://planetcassandra.org/",
            "@type": "WebPage",
            name: "Video Library - Planet Cassandra",
            keywords:
              "Cassandra videos, database tutorials, video demonstrations, case studies, best practices, NoSQL database",
            author: {
              "@type": "Organization",
              name: "Video Library - Planet Cassandra",
            },
          })}
        </script>
        {/* Open Graph */}
        <meta property="og:title" content={"Videos - Planet Cassandra"} />
        <meta
          property="og:description"
          content="Explore a collection of informative and educational videos on Cassandra database on Planet Cassandra. Watch videos on various topics related to Cassandra, including tutorials, demonstrations, case studies, and best practices, to learn more about this popular NoSQL database."
        />
        {/* Other meta tags you may consider adding */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={"Video Library - Planet Cassandra"}
        />
        <meta name="twitter:image" content={"../../images/icon.png"} />
      </Helmet>
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
