// @ts-ignore
import { Helmet } from "react-helmet";
import React from "react";
import Layout from "../Layout/Layout";
import { Container, Typography } from "@mui/material";

interface PostSinglePageProps {
    pageContext: {
        Title: string;
        Publish_date: string;
        Eventbrite_Description: string;
    };
}

const EventsSinglePage: React.FC<PostSinglePageProps> = ({
    pageContext: {  Title, Publish_date, Eventbrite_Description },
}) => {
    console.log(Eventbrite_Description)
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
