import React from 'react';
import { Grid, Typography, Button } from '@mui/material'


const HeroSection = () => {
    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <Typography variant="h3" component="h1">
                    Welcome to Planet Cassandra
                </Typography>
                <Typography variant="subtitle1">
                The best knowledge base on Apache Cassandra to help platform leaders, architects, engineers, and operators to build scalable platforms
                </Typography>
                <Button variant="contained" color="primary">
                    Get Started
                </Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <img src="image1.jpg" alt="Image 1" />
            </Grid>
        </Grid>
    )
}

export default HeroSection;