import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout/Layout';
import NewsCardGrid from '../layouts/NewsCardGrid'
import { IGatsbyImageData } from 'gatsby-plugin-image';


interface TtrsData {
    allFile: {
      nodes: {
        parent: {
          id: string;
          table: string;
        };
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      }[];
    };
    allFeedTtrs: {
      totalCount: number;
      nodes: {
        title: string;
        summary: string;
        pubDate: string;
        link: string;
        id: string;
        content: string;
        author: string;
      }[];
    };
  }

const News: React.FC<TtrsData> = () => {
    const { allFile, allFeedTtrs }: TtrsData = useStaticQuery(query);
    const posts = allFeedTtrs.nodes.map((post) => {
        const image = allFile.nodes.find((img) => img.parent.id === post.id);
        return {
          title: post.title,
          pubDate: post.pubDate,
          link: post.link,
          id: post.id,
          content: post.content,
          author: post.author,
          summary: post.summary,
          thumbnail: image?.childImageSharp?.gatsbyImageData,
        };
      });

    return (
        <Layout>
            <NewsCardGrid cardData={posts} />
        </Layout>
    );
};

const query = graphql`
query TTRSData {
    allFile(filter: {parent: {id: {ne: null}}}) {
      nodes {
        parent {
          ... on FeedTTRS {
            id
          }
        }
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    allFeedTtrs(sort: {pubDate: DESC}) {
      totalCount
      nodes {
        title
        summary
        pubDate
        link
        id
        content
        author
      }
    }
  }
`;

export default News;