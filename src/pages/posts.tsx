// // src/pages/posts.tsx
// import React from 'react'
// import { graphql } from 'gatsby'
// import Layout from '../components/Layout/Layout';
// import PostCardGrid from '../layouts/PostCardGrid'
// import { IGatsbyImageData } from 'gatsby-plugin-image';

// interface Props {
//   data: {
//     allWpPost: {
//       totalCount: number;
//       nodes: {
//         categories: {
//           nodes: {
//             name: string;
//             slug: string;
//             count: number;
//           }[];
//         };
//         author: {
//           node: {
//             avatar: {
//               url: string;
//             };
//             name: string;
//           };
//         };
//         date: string;
//         slug: string;
//         title: string;
//         featuredImage: {
//           node: {
//             localFile: {
//               childImageSharp: {
//                 gatsbyImageData: IGatsbyImageData;
//               };
//             };
//           };
//         };
//         excerpt: string;
//       }[];
//     };
//   };
// }

// const Posts: React.FC<Props> = (props: Props) => {
//   const { data } = props;
//   const posts = data.allWpPost.nodes as any

//   return (
//     <Layout>
//       <PostCardGrid cardData={posts} />
//     </Layout>
//   );
// };


// export const query = graphql`
//   query Posts {
//     allWpPost(sort: {date: DESC}) {
//       totalCount
//       nodes {
//         categories {
//           nodes {
//             name
//             slug
//             count
//           }
//         }
//         author {
//           node {
//             avatar {
//               url
//             }
//             name
//           }
//         }
//         date
//         slug
//         title
//         featuredImage {
//           node {
//             localFile {
//               childImageSharp {
//                 gatsbyImageData
//               }
//             }
//           }
//         }
//         excerpt
//       }
//     }
//   }
// `;

// export default Posts;