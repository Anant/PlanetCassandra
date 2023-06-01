import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import { Container, Grid, Pagination } from "@mui/material";
import EventCardGrid from "../layouts/EventCardGrid";
//@ts-ignore
import { Helmet } from "react-helmet";
interface EventsData {
  allApiEvents: {
    edges: {
      node: {
        events: {
          alternative_id: string;
          author: string;
          date: string;
          title: string;
        }[];
      };
    }[];
  };
}

const Events: React.FC<EventsData> = () => {
  const data = useStaticQuery(query);

  const cardData = data.allApiEvents.edges[0].node.events;

  const events = cardData.map((card: any) => {
    return {
      title: card.title,
      date: card.date,
      thumbnail: undefined,
    };
  });

  return (
    <Layout>
      <Helmet>
        <title>Upcoming Events - Planet Cassandra</title>
        <meta property="og:image" content="../images/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content={"Upcoming Events - Planet Cassandra"}
        />
        <meta name="author" content={"Planet Cassandra"} />
        <meta
          name="keywords"
          content="Cassandra events, database conferences, webinars, meetups, NoSQL database community"
        />
        <meta
          name="description"
          content="Stay updated with the latest events and happenings related to Cassandra database on Planet Cassandra. Discover upcoming events, conferences, webinars, meetups, and other activities related to Cassandra and NoSQL database community."
        />
        <meta
          property="og:description"
          content="Stay updated with the latest events and happenings related to Cassandra database on Planet Cassandra. Discover upcoming events, conferences, webinars, meetups, and other activities related to Cassandra and NoSQL database community."
        />
      </Helmet>
      <EventCardGrid cardData={events} />
    </Layout>
  );
};

const query = graphql`
  query EventsData {
    allApiEvents {
      edges {
        node {
          events {
            alternative_id
            author
            date
            title
          }
        }
      }
    }
  }
`;

export default Events;
