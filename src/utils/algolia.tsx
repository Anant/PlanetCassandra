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

interface NewsAlgoliaData {
  allFeedTtrs: {
    totalCount: number;
    nodes: {
      title: string;
      id: string;
      author: string;
    }[];
  };
}


const PostQuery = `
query PostsAlgolia {
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

const NewsQuery =`
query NewsAlgolia {
  allFeedTtrs {
    totalCount
    nodes {
      title
      id
      author
    }
  }
}
`

const queries = [
    {
        query: PostQuery,
        queryVariables: {},
        transformer: ({ data }: { data: QueryResult }) => data.allWpPost.nodes,
        indexName: 'PlanetCassandra',
        settings: {},
        mergeSettings: false,
    },
  //   {
  //     query: NewsQuery,
  //     queryVariables: {},
  //     transformer: ({ data }: { data: NewsAlgoliaData }) => data.allFeedTtrs.nodes,
  //     indexName: 'PlanetCassandra',
  //     settings: {},
  //     mergeSettings: false,
  // },
];

module.exports = queries
