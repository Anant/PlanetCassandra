// // src/pages/posts.tsx
// import React, { useState } from 'react'
// import { useStaticQuery, graphql } from "gatsby";
// import Layout from '../components/Layout/Layout';
// import PostCardGrid from '../components/PostCardGrid/PostCardGrid';
// import { IGatsbyImageData } from 'gatsby-plugin-image';
// import { Container, Grid, Pagination } from '@mui/material';
// import EventCard from '../components/Cards/EventCard';

// interface AllEventsData {
//   allFile: {
//     nodes: {
//       parent: {
//         id: string;
//         table: string;
//       };
//       childImageSharp: {
//         gatsbyImageData: any;
//       };
//     }[];
//   };
//   allAirtable: {
//     nodes: {
//       table: string;
//       id: string;
//       data: {
//         Title: string;
//         Publish_date: string;
//         Eventbrite_Description: string;
//         Cover_Image: {
//           url: string;
//         }[];
//       };
//     }[];
//   };
// }

// const Events: React.FC<AllEventsData> = () => {
//   const { allAirtable, allFile }: AllEventsData = useStaticQuery(query);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 12;
//   const cardData = allAirtable.nodes;
//   const images = allFile.nodes;
//   const totalPages = Math.ceil(cardData.length / itemsPerPage);
  
//   const handlePageChange = (event: any, value: number) => {
//     setCurrentPage(value);
//   };
  
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentPosts = cardData.slice(indexOfFirstItem, indexOfLastItem);

//   return (
//     <Layout>
//       <Container maxWidth="xl" style={{
//       padding: '25px'
//     }} >
//       <Grid container spacing={3}>
//         {currentPosts.map((card, index) => {
//           const image = images.find(img => img.parent.id === card.id);
//           return (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <EventCard
//                 title={card.data.Title}
//                 date={card.data.Publish_date}
//                 thumbnail={image?.childImageSharp?.gatsbyImageData}
//               />
//             </Grid>
//           );
//         })}
//       </Grid>
//       <Grid item style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
//         <Pagination
//           count={totalPages}
//           page={currentPage}
//           onChange={handlePageChange}
//           variant="outlined"
//           color="primary"
//         />
//       </Grid>
//     </Container>
//     </Layout>
//   );
// };


// const query = graphql`
// {
//   allFile(filter: {parent: {id: {ne: null}}}) {
//     nodes {
//       parent {
//         ... on Airtable {
//           id
//           table
//         }
//       }
//       childImageSharp {
//         gatsbyImageData
//       }
//     }
//   }
//   allAirtable(
//     filter: {table: {eq: "Content Production"}, data: {Title: {ne: null}, Publish_date: {ne: null}, Cover_Image: {elemMatch: {url: {ne: null}}}}}
//     sort: {data: {Publish_date: DESC}}
//   ) {
//     nodes {
//       table
//       id
//       data {
//         Title
//         Publish_date
//         Eventbrite_Description
//         Cover_Image {
//           url
//         }
//       }
//     }
//   }
// }
// `;

// export default Events;