import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout';
import PostCardGrid from '../components/PostCardGrid/PostCardGrid';

interface LastEditedByNode {
    name: string;
    id: string;
  }
  
  interface ContentNode {
    date: string;
    slug: string;
    lastEditedBy: {
      node: LastEditedByNode;
    };
    uri: string;
    link: string;
  }
  
  interface WpCategoryNode {
    name: string;
    contentNodes: {
      nodes: ContentNode[];
    };
  }
  
  interface Props {
    data: {
      allWpCategory: {
        nodes: WpCategoryNode[];
      };
    };
  }
const Events: React.FC<Props> = (props: Props) => {
  const { data } = props;
  //console.log(data.allWpCategory.nodes[0].contentNodes.nodes)

  return (
    <Layout>
      {/* Follow the same principle as PostCard and PostCardGrid components */}
      <h1>Events</h1>
    </Layout>
  );
};

export const query = graphql`
query MyQuery {
    allWpCategory(filter: {name: {eq: "Events"}}) {
      nodes {
        name
        contentNodes {
          nodes {
            date(fromNow: false)
            slug
            lastEditedBy {
              node {
                name
                id
              }
            }
            uri
            link
          }
        }
      }
    }
  }
`;

export default Events;