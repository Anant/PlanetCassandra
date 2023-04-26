import React from 'react';
import { Grid, Typography, Container, Box, Button } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import { Input, ConfigProvider } from 'antd';
import { AiOutlineSend } from 'react-icons/ai';
import { Link } from 'gatsby';
import CommunitySection from '../CommunitySection/CommunitySection';

const Footer = () => {
  const { Search } = Input;

  return (
    <>
      <Grid item xs={12}>
        <CommunitySection />
      </Grid>
      <Container maxWidth="xl">
        <Grid
          justifyContent="center"
          alignItems="center"
          container
          spacing={3}
          paddingY={{ xs: 2, sm: 5, md: 10 }}
        >
          <Grid
            sx={{ textAlign: { xs: 'center', md: 'start' } }}
            item
            xs={12}
            md={6}
          >
            <StaticImage
              src="../../images/GrayLogoWithText.png"
              alt="A dinosaur"
              placeholder="blurred"
              height={60}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 5,
                width: '60%',
                marginInline: { xs: 'auto', md: 0 },
              }}
            >
              <Link style={{ textDecoration: 'none', color: 'white' }} to={`/`}>
                <Typography color={'white'}>What's New?</Typography>
              </Link>
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to={`https://blog.planetcassandra.org/events/`}
              >
                <Typography color={'white'}>Events</Typography>
              </Link>
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to={`/usecases`}
              >
                <Typography color={'white'}>Use Cases</Typography>
              </Link>
            </Box>
            <Typography
              sx={{
                marginTop: 5,
              }}
              color="#5AB1BB"
              variant="subtitle1"
            >
              Planet Cassandra is a hub for all things Apache Cassandra. From
              tutorials and guides, to discussions and updates, we're here to
              help you get the most out of Cassandra. Connect with us and become
              part of our growing community today
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                marginTop: 10,
              }}
              color={'white'}
              variant="subtitle1"
            >
              © 2009-2023 The Apache Software Foundation under the terms of the
              Apache License 2.0. Apache, the Apache feather logo, Apache
              Cassandra, Cassandra, and the Cassandra logo, are either
              registered trademarks or trademarks of The Apache Software
              Foundation.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: '#5AB1BB',
                padding: 3,
                borderRadius: 5,
                margin: 'auto',
              }}
            >
              <Typography marginBottom={2} variant="h4" color={'white'}>
                Get Involved with PlanetCassandra!
              </Typography>
              <Typography variant="subtitle2" color={'black'}>
                We believe that the power of the Planet Cassandra community lies
                in the contributions of its members. Do you have content,
                articles, videos, or use cases you want to share with the world?
              </Typography>
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to={`https://planetcassandra.org/contribute/`}
              >
                <Button
                  sx={{
                    fontSize: { xs: 11, sm: 15, md: 12, lg: 14 },
                    borderRadius: 50,
                    margin: 2,
                    backgroundColor: '#344D67',
                  }}
                  variant="contained"
                  className="Font_Mulish_Button_L"
                >
                  Get Started
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Footer;
