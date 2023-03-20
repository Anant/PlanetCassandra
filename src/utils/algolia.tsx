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

interface LeavesAlgoliaData {
  allApiLeaves: {
    totalCount: number;
    nodes: {
      id: string;
      title: string;
      description: string;
      tags: string[];
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

const LeavesAlgoliaQuery = `
query LeavesAlgolia {
  allApiLeaves(
    sort: {wallabag_created_at: DESC}
    limit: 250
    filter: {title: {ne: null}}
  ) {
    nodes {
      id
      title
      description
      tags
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
    }
  }
}
`

const queries = [
    {
        query: PostQuery,
        queryVariables: {},
        transformer: ({ data }: { data: QueryResult }) => data.allWpPost.nodes,
        indexName: 'PlanetCassandraPosts',
        settings: {},
        mergeSettings: false,
    },
    {
      query: NewsQuery,
      queryVariables: {},
      transformer: ({ data }: { data: NewsAlgoliaData }) => data.allFeedTtrs.nodes,
      indexName: 'PlanetCassandraNews',
      settings: {},
      mergeSettings: false,
    },
    {
      query: LeavesAlgoliaQuery,
      queryVariables: {},
      transformer: ({ data }: { data: LeavesAlgoliaData }) => data.allApiLeaves.nodes,
      indexName: 'PlanetCassandraLeaves',
      settings: {},
      mergeSettings: false,
    },
];

module.exports = queries
