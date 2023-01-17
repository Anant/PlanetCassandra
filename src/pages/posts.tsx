// src/pages/posts.tsx
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout';
import PostCardGrid from '../components/PostCardGrid/PostCardGrid';

interface Props {
  data: {
    allWpPost: {
      nodes: {
        title: string;
        date: string;
      }[];
    };
  };
}

const Posts: React.FC<Props> = (props: Props) => {
  const { data } = props;
  const posts = data.allWpPost.nodes;

  return (
    <Layout>
      <PostCardGrid cardData={posts} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpPost {
      nodes {
        title
        date
      }
    }
  }
`;

export default Posts;