import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import YouTube from 'react-youtube';

const YoutubeSection = () => {
  const opts = {
    height: '300',
    width: '100%',
  };
  return (
    <Grid sx={{ backgroundColor: '#F9F8F8' }}>
      <Container maxWidth="xl">
        <Grid
          justifyContent="center"
          alignItems="center"
          container
          spacing={3}
          sx={{ paddingY: 10 }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              fontWeight={400}
              fontFamily="Poppins, sans-serif"
              variant="h3"
              component="h1"
            >
              Want to become a
            </Typography>
            <Grid container>
              <Typography
                color="#344D67"
                component="h1"
                variant="h3"
                gutterBottom
                fontWeight={400}
                fontFamily="Poppins, sans-serif"
              >
                pro in
              </Typography>
              <Typography
                marginLeft={2}
                component="h1"
                variant="h3"
                color="#5AB1BB"
                align={'center'}
                gutterBottom
                fontWeight={700}
                fontFamily="Poppins, sans-serif"
              >
                Cassandra?
              </Typography>
            </Grid>
            <Typography
              sx={{
                marginTop: 5,
                fontSize: 20,
                width: { lg: '90%' },
              }}
              variant="subtitle1"
              fontFamily="Lato, sans-serif"
              color="#1E1E1E"
              fontWeight={550}
            >
              Visit our YouTube channel and look through our extensive library
              of tutorials, quick fixes, pro tips, tricks and lunch ideas from
              some of the biggest personalities in the industry.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <YouTube videoId="CKdT6f6wQyo" opts={opts} />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default YoutubeSection;
