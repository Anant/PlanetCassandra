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
    pageContext: {  Title, Publish_date, Eventbrite_Description, Cover_Image },
}) => {
    console.log(Cover_Image)
    return (
        <Layout>
            <Container>
                <Helmet>
                    <title>{Title}</title>
                    <meta name={Title} content={Eventbrite_Description} />
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
