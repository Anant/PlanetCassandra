import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby";
import Layout from '../components/Layout/Layout';
import { Container, Grid, Pagination } from '@mui/material';
import YoutubeCard from '../components/Cards/YouTubeCard';
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
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const cardData = allYoutubeVideo.nodes;
    const totalPages = Math.ceil(cardData.length / itemsPerPage);
  
    const handlePageChange = (event: any, value: number) => {
      setCurrentPage(value);
    };
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentVideos = cardData.slice(indexOfFirstItem, indexOfLastItem);
  
    const opts = {
      height: "300",
      width: "100%",
    };
  
    return (
      <Layout>
        <Container maxWidth="xl" style={{ padding: "25px" }}>
          <Grid container spacing={3}>
            {currentVideos.map((video, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <YoutubeCard
                    channelTitle={video.channelTitle}
                    title={video.title}
                    videoId={video.videoId}
                    thumbnail={video.localThumbnail.childImageSharp.gatsbyImageData}
                    description={video.description}
                    date={video.publishedAt}
                  />
                </Grid>
              );
            })}
          </Grid>
          <Grid
            item
            style={{ display: "flex", justifyContent: "center", padding: "30px" }}
          >
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              color="primary"
            />
          </Grid>
        </Container>
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
  