// @ts-ignore
import { Helmet } from "react-helmet";
import React from "react";
import Layout from "../Layout/Layout";
import { Container, Typography } from "@mui/material";

interface EventsSinglePageProps {
  pageContext: {
    Title: string;
    Publish_date: string;
    Eventbrite_Description: string;
    Cover_Image: {
      url: string;
      filename: string;
    };
  };
}

const EventsSinglePage: React.FC<EventsSinglePageProps> = ({
  pageContext: { Title, Publish_date, Eventbrite_Description, Cover_Image },
}) => {
  return (
    <Layout>
      <Container>
        <Helmet>
          <title>{Title}</title>
          <meta name="description" content={Eventbrite_Description} />
          <meta name="keywords" content={Title} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://planetcassandra.org/",
              "@type": "WebPage",
              name: Title,
              description: Eventbrite_Description,
              keywords: Title,
              author: {
                "@type": "Organization",
                name: Title,
              },
            })}
          </script>
          {/* Open Graph */}
          <meta property="og:title" content={Title} />
          <meta property="og:description" content={Eventbrite_Description} />
          {/* Other meta tags you may consider adding */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="twitter:card" content="summary_large_image" />
          {/* Twitter Card */}
          <meta name="twitter:title" content={Title} />
          <meta name="twitter:description" content={Eventbrite_Description} />
          <meta name="twitter:image" content={"../../images/icon.png"} />
        </Helmet>
        <div style={{ marginInline: "30px" }}>
          <Typography variant="h4">{Title}</Typography>
          <Typography>{Eventbrite_Description}</Typography>
        </div>
      </Container>
    </Layout>
  );
};

export default EventsSinglePage;
