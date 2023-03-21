import Layout from '../../components/Layout/Layout';
import React from 'react';
import { Link } from 'gatsby';
import { Box, Grid } from '@mui/material';
interface SinglePageProps {
    cardData: {
        title: string;
        pubDate: string;
        id: string;
        readngtime: string;
        author: string;
        summary: string;
        thumbnail: any;
        content: string;
        relatedArticles: {
            title: string;
            thumbnail: any;
            slug: string;
        }[];
    }[];
}



const singlePageGrid: React.FC<SinglePageProps> = ({ cardData }) => {
    return (
        <Layout>
            <Grid container>
                <Grid item xs={12} md={12} lg={12}>
                    <Link to={'/'}>Back To Articles</Link>
                </Grid>
                <Grid item xs={12} md={6} lg={6}><Box height='300px'>Info about article</Box></Grid>
                <Grid item xs={12} md={6} lg={6}><Box height='300px'>Thumbnail</Box></Grid>
                <Grid item xs={12} md={8} lg={8}><Box height='1000px'>Content</Box></Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <Grid container>
                            <Grid item xs={12}><Box height='600px'>Related Articles</Box></Grid>
                            <Grid item xs={12}><Box height='300px'>AD#1</Box></Grid>
                            <Grid item xs={12}><Box height='300px'>AD#1</Box></Grid>
                        </Grid>
                    </Grid>
                </Grid>
        </Layout>
    )
}

export default singlePageGrid;