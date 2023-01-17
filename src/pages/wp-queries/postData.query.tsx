import { graphql } from 'gatsby';

export const query = graphql`
  query PostData {
    allWpPost {
      nodes {
        title
        date
      }
    }
  }
`;