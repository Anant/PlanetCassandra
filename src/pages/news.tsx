import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout';
import NewsCardGrid from '../layouts/NewsCardGrid'


interface Props {
    data: {
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
    };
}

const News: React.FC<Props> = (props: Props) => {
    const { data } = props;
    const posts = data.allFeedTtrs.nodes;

    return (
        <Layout>
            <NewsCardGrid cardData={posts} />
        </Layout>
    );
};

export const query = graphql`
query TTRSS {
    allFeedTtrs {
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