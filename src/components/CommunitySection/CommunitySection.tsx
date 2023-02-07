import React from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';
import {
  BsSlack,
  BsYoutube,
  BsTwitch,
  BsStackOverflow,
  BsGithub,
  BsTwitter,
  BsLinkedin,
} from 'react-icons/bs';
import { GrFacebook } from 'react-icons/gr';
import { FaDiscord } from 'react-icons/fa';

const CommunitySection = () => {
  return (
    <Grid
      sx={{
        backgroundColor: '#5AB1BB',
      }}
      container
    >
      <Container
        sx={{
          paddingY: 3,
        }}
      >
        <Grid justifyContent="center" container>
          <Typography
            color={'white'}
            align={'center'}
            variant="h5"
            gutterBottom
            className="Font_Lato_Bold"
            sx={{
              fontSize: '25px',
            }}
          >
            Become part of our
          </Typography>
          <Typography
            marginX={1}
            align={'center'}
            variant="h5"
            gutterBottom
            className="Font_Lato_Bold"
            sx={{
              color: '#344D67',
              fontSize: '25px',
            }}
          >
            growing community!
          </Typography>
        </Grid>

        <Typography
          align={'center'}
          variant="subtitle2"
          gutterBottom
          className="Font_Lato_Bold"
          sx={{
            fontSize: '20px',
            color: '#1E1E1E',
          }}
        >
          Welcome to the Apache Cassandra community! We're a passionate and dedicated group of users, developers, and enthusiasts who are working together to make Cassandra the best it can be. Whether you're just getting started with Cassandra or you're an experienced user, there's a place for you in our community.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '70%',
            margin: '20px auto',
          }}
        >
          <BsSlack style={{ cursor: 'pointer' }} color="#FFFFFF" size="32px" />
          <BsYoutube
            style={{
              cursor: 'pointer',
            }}
            color="#FFFFFF"
            size="32px"
          />
          <FaDiscord
            style={{ cursor: 'pointer' }}
            color="#FFFFFF"
            size="32px"
          />
          <BsTwitch style={{ cursor: 'pointer' }} color="#FFFFFF" size="32px" />
          <BsStackOverflow
            style={{ cursor: 'pointer' }}
            color="#FFFFFF"
            size="32px"
          />
          <BsGithub style={{ cursor: 'pointer' }} color="#FFFFFF" size="32px" />
          <BsTwitter
            style={{ cursor: 'pointer' }}
            color="#FFFFFF"
            size="32px"
          />
          <BsLinkedin
            style={{ cursor: 'pointer' }}
            color="#FFFFFF"
            size="32px"
          />
          <GrFacebook
            style={{ cursor: 'pointer' }}
            color="#FFFFFF"
            size="32px"
          />
        </Box>
      </Container>
    </Grid>
  );
};

export default CommunitySection;
