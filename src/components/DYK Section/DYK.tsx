import React from 'react';
import BannerBackground from '../../images/BannerBackground.png';
import Tshirts from '../../images/TShirts.png';
import { Grid, Typography, Container, Button } from '@mui/material';

const DidYouKnowSection = () => {
  return (
    <Grid
      sx={{
        backgroundImage: `url(${BannerBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      container
    >
      <Container
        sx={{
          paddingY: 3,
        }}
        maxWidth="xl"
      >
        <Grid container spacing={3}>
          {/* Left side */}
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                color: '#F9F8F8',
                fontFamily: 'Poppins',
                fontSize: '25px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '122.5%',
                letterSpacing: '0.52px',
                paddingBottom: 2
              }}
              gutterBottom
            >
              Claim Your <span style={{ color: '#5AB1BB', fontWeight: 700 }}>Free</span> Planet
              <span style={{ fontWeight: 700 }}> Cassandra Contributor T-shirt!</span>
            </Typography>
            <Typography
              sx={{
                color: '#FFF',
                fontFamily: 'Lato',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 300,
                lineHeight: '122.5%',
                letterSpacing: '0.36px',
                paddingBottom: 5
              }}
              gutterBottom
            >
              Make your contribution and score a FREE Planet Cassandra Contributor T-Shirt!
              We value our incredible Cassandra community, and we want to express our gratitude
              by sending an exclusive Planet Cassandra Contributor T-Shirt you can wear with pride.
            </Typography>
            <Button
              sx={{
                borderRadius: '16.583px',
                background: '#5AB1BB',
                color: '#FFF',
                textAlign: 'center',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '24px',
                letterSpacing: '0.36px',
                width: "180px"
              }}
            >
              Claim Now
            </Button>
          </Grid>
          {/* Right side */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={Tshirts} alt="T-shirts" style={{ maxWidth: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default DidYouKnowSection;
