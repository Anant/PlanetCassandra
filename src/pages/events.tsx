import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import { Container, Grid, Pagination } from '@mui/material';
import EventCardGrid from '../layouts/EventCardGrid';
//@ts-ignore
import { Helmet } from 'react-helmet';
interface AllEventsData {
  allFile: {
    nodes: {
      parent: {
        id: string;
        table: string;
      };
      childImageSharp: {
        gatsbyImageData: any;
      };
    }[];
  };
  allAirtable: {
    nodes: {
      table: string;
      id: string;
      data: {
        Title: string;
        Publish_date: string;
        Eventbrite_Description: string;
        Cover_Image: {
          url: string;
        }[];
      };
    }[];
  };
}

const Events: React.FC<AllEventsData> = () => {
  const { allAirtable, allFile }: AllEventsData = useStaticQuery(query);
  const cardData = allAirtable.nodes;
  const images = allFile.nodes;

  const events = cardData.map((card) => {
    const image = images.find((img) => img.parent.id === card.id);
    return {
      title: card.data.Title,
      date: card.data.Publish_date,
      thumbnail: image?.childImageSharp?.gatsbyImageData,
    };
  });

  return (
    <Layout>
      <Helmet>
        <title>Upcoming Events - Planet Cassandra</title>
        <meta property="og:image" content="../images/icon.png" />
      </Helmet>
      <EventCardGrid cardData={events} />
    </Layout>
  );
};

const query = graphql`
  {
    allFile(filter: { parent: { id: { ne: null } } }) {
      nodes {
        parent {
          ... on Airtable {
            id
            table
          }
        }
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    allAirtable(
      filter: {
        table: { eq: "Content Production" }
        data: {
          Title: { ne: null }
          Publish_date: { ne: null }
          Cover_Image: { elemMatch: { url: { ne: null } } }
        }
      }
      sort: { data: { Publish_date: DESC } }
    ) {
      nodes {
        table
        id
        data {
          Title
          Publish_date
          Eventbrite_Description
          Cover_Image {
            url
          }
        }
      }
    }
  }
`;

export default Events;
