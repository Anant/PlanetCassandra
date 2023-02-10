// gatsby-config.js
interface WpPost {
    totalCount: Number;
    author: {
        node: {
            name: string;
        };
    };
    date: string;
    slug: string;
    title: string;
}

interface QueryResult {
    allWpPost: {
        totalCount: number,
        nodes: WpPost[],
    }
}

const PostQuery = `
query Posts {
    allWpPost(sort: {date: DESC}) {
      totalCount
      nodes {
        id
        author {
          node {
            name
          }
        }
        date
        slug
        title
      }
    }
  }
`;

const queries = [
    {
        query: PostQuery,
        queryVariables: {},
        transformer: ({ data }: { data: QueryResult }) => data.allWpPost.nodes,
        indexName: 'PlanetCassandra',
        settings: {},
        mergeSettings: false,
    },
];

module.exports = queries
