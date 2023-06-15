// gatsby-config.js
interface WpPost {
  totalCount: Number;
  excerpt: string;
  author: {
    node: {
      name: string;
    };
  };
  date: string;
  slug: string;
  title: string;
  categories: {
    nodes: {
      name: string;
    };
  };
  tags: {
    nodes: {
      name: string;
    }[];
  };
  featuredImage: {
    node: {
      localFile: {
        childImageSharp: {
          gatsbyImageData: any;
        };
      };
    };
  };
}

interface QueryResult {
  allWpPost: {
    totalCount: number;
    nodes: WpPost[];
  };
}

interface NewsAlgoliaData {
  allFeedTtrs: {
    totalCount: number;
    nodes: {
      title: string;
      id: string;
      author: string;
      link: string;
      pubDate: string;
      summary: string;
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
        ID_Case: number;
        Created: string;
        Case_Company: {
          data: {
            Name: string;
          };
        };
        Case_Stack: {
          data: {
            Name: string;
          };
        };
        Case_Function: {
          data: {
            Function_Name: string;
          };
        };
        Case_Industry: {
          data: {
            Industry_Name: string;
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
      alternative_id: string;
      domain_name: string;
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
      excerpt
      author {
        node {
          name
        }
      }
      date
      slug
      title
      categories {
        nodes {
          name
        }
      }
      tags {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
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
        Case_Published
        Case_Description
        ID_Case
        Created
        Case_Company {
          data {
            Name
          }
        }
        Case_Stack {
          data {
            Name
          }
        }
        Case_Function {
          data {
            Function_Name
          }
        }
        Case_Industry {
          data {
            Industry_Name
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
    nodes {
      title
      id
      link
      pubDate
      summary
    }
  }
}
`;

const Leavesquery = `
query LeavesData {
  allApiLeaves(
    limit: 100
    sort: {wallabag_created_at: DESC}
    filter: {title: {ne: null}}
  ) {
    nodes {
      tags
      title
      wallabag_created_at
      description
      id
      alternative_id
      domain_name
    }
  }
}
`;

const queries = [
  {
    query: PostQuery,
    queryVariables: {},
    transformer: ({ data }: { data: QueryResult }) => data.allWpPost.nodes,
    indexName: "PlanetCassandraPosts",
    settings: {},
    mergeSettings: false,
  },
  {
    query: NewsQuery,
    queryVariables: {},
    transformer: ({ data }: { data: NewsAlgoliaData }) =>
      data.allFeedTtrs.nodes,
    indexName: "PlanetCassandraNews",
    settings: {},
    mergeSettings: false,
  },
  {
    query: UseCasequery,
    queryVariables: {},
    transformer: ({ data }: { data: UseCaseAlgoliaData }) =>
      data.allAirtable.nodes,
    indexName: "PlanetCassandraUseCases",
    settings: {},
    mergeSettings: false,
  },
  {
    query: Leavesquery,
    queryVariables: {},
    transformer: ({ data }: { data: LeavesAlgoliaData }) =>
      data.allApiLeaves.nodes.map((node) => ({
        ...node,
        objectID: node.alternative_id, // Use alternative_id as objectID
      })),
    indexName: "PlanetCassandraLeaves",
    settings: {},
    mergeSettings: false,
  },
];

module.exports = queries;
