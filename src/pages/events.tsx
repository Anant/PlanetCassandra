import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import { Container, Grid, Pagination } from "@mui/material";
import EventCardGrid from "../layouts/EventCardGrid";
//@ts-ignore
import { Helmet } from "react-helmet";
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={"Planet Cassandra"} />
        <meta
          name="keywords"
          content="Cassandra events, database conferences, webinars, meetups, NoSQL database community"
        />
        <meta
          name="description"
          content="Stay updated with the latest events and happenings related to Cassandra database on Planet Cassandra. Discover upcoming events, conferences, webinars, meetups, and other activities related to Cassandra and NoSQL database community."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://planetcassandra.org/",
            "@type": "WebPage",
            name: "Upcoming Events - Planet Cassandra",
            keywords: "Upcoming Events - Planet Cassandra",
            author: {
              "@type": "Organization",
              name: "Upcoming Events - Planet Cassandra",
            },
          })}
        </script>
        {/* Open Graph */}
        <meta
          property="og:title"
          content={"Upcoming Events - Planet Cassandra"}
        />
        <meta
          property="og:description"
          content="Stay updated with the latest events and happenings related to Cassandra database on Planet Cassandra. Discover upcoming events, conferences, webinars, meetups, and other activities related to Cassandra and NoSQL database community."
        />
        {/* Other meta tags you may consider adding */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={"Upcoming Events - Planet Cassandra"}
        />
        <meta name="twitter:image" content={"../../images/icon.png"} />
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
