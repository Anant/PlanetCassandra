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
            className="Lato_Bold"
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
            className="Lato_Bold"
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
          className="Lato_Light"
          sx={{
            fontSize: '20px',
            fontWeight: 100,
            color: '#1E1E1E',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          rutrum venenatis neque, vitae feugiat risus tempus vel. Aenean neque
          ligula, feugiat vitae massa sed, placerat pharetra justo.
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
