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

interface UseCaseAlgoliaData {
  allAirtable: {
    nodes: {
      data: {
        Case_URL: string;
        Case_Name: string;
        Case_Article_Content: string;
        Case_Description: string;
        Case_Company: {
          data: {
            Name: string;
          };
        };
      };
    }[];
  };
}

interface LeavesAlgoliaData {
  allApiLeaves: {
    nodes: {
      tags: string[];
      title: string;
      wallabag_created_at: string;
      description: string;
      id: string;
    }[];
  };
}







const PostQuery = `
query PostsAlgolia {
  allWpPost(sort: {date: DESC}, filter: {authorId: {ne: "dXNlcjoy"}}) {
    totalCount
    nodes {
      id
      authorId
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

const UseCasequery = `
query UseCasesDataListing {
  allAirtable(
    filter: {table: {eq: "Cases"}, data: {Case_URL: {ne: null}}}
    sort: {data: {Case_Published: DESC}}
  ) {
    nodes {
      table
      id
      data {
        Case_URL
        Case_Name
        Case_Company {
          data {
            Name
          }
        }
      }
    }
  }
}
`;

const NewsQuery = `
query NewsAlgolia {
  allFeedTtrs {
    totalCount
    nodes {
      title
      id
      link
      pubDate
    }
  }
}
`

const Leavesquery = `
query LeavesData {
  allApiLeaves(limit: 100, sort: { wallabag_created_at: DESC }) {
    nodes {
      tags
      title
      wallabag_created_at
      description
      id
    }
  }
}
`;

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
    query: UseCasequery,
    queryVariables: {},
    transformer: ({ data }: { data: UseCaseAlgoliaData }) => data.allAirtable.nodes,
    indexName: 'PlanetCassandraUseCases',
    settings: {},
    mergeSettings: false,
  },
  {
    query: Leavesquery,
    queryVariables: {},
    transformer: ({ data }: { data: LeavesAlgoliaData }) => data.allApiLeaves.nodes,
    indexName: 'PlanetCassandraLeaves',
    settings: {},
    mergeSettings: false,
  },
];

module.exports = queries
