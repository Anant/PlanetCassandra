import React, { useState } from 'react';
import { Container, Grid, Pagination } from '@mui/material';
import PostCard from '../PostCard/PostCard';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface PostCardData {
  categories: {
    name: string;
    slug: string;
    count: number;
  }[];
  author: {
    node: {
      avatar: {
        url: string;
      };
      name: string;
    }
  };
  date: string;
  slug: string;
  title: string;
  featuredImage: {
    node: {
      localFile: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    };
  };
  excerpt: string;
}

interface PostCardGridProps {
  cardData: PostCardData[];
}

const PostCardGrid: React.FC<PostCardGridProps> = (props: PostCardGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const { cardData } = props;
  const totalPages = Math.ceil(cardData.length / itemsPerPage);

  const handlePageChange = (event: any, value: number) => {
    setCurrentPage(value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = cardData.slice(indexOfFirstItem, indexOfLastItem);



  console.log(cardData)
  return (
    <Container maxWidth="xl" style={{
      padding: '25px'
    }} >

      <Grid container spacing={3}>
        {currentPosts.map((card, index) => (
          <Grid item xs={3} key={index}>
            <PostCard
              title={card.title}
              date={card.date}
              thumbnail={card?.featuredImage?.node.localFile.childImageSharp?.gatsbyImageData}
              slug={card.slug}
            />
          </Grid>
        ))}
      </Grid>
      <Grid item style={{
        display: "flex",
        justifyContent: "center",
        padding: "30px"
      }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
        />
      </Grid>
    </Container>

  );
};

export default PostCardGrid;