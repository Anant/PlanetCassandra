import React from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';

const DidYouKnowSection = () => {
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
        maxWidth="xl"
      >
        <Grid justifyContent="center" container>
          <Typography
            color={'white'}
            align={'center'}
            variant="h5"
            gutterBottom
            fontFamily={'Lato, sans-serif'}
            fontWeight={700}
          >
            Did You
          </Typography>
          <Typography
            marginX={1}
            fontFamily={'Lato, sans-serif'}
            fontWeight={700}
            align={'center'}
            variant="h5"
            gutterBottom
          >
            Know?
          </Typography>
        </Grid>

        <Typography
          fontFamily={'Lato, sans-serif'}
          fontWeight={550}
          align={'center'}
          variant="subtitle2"
          gutterBottom
          sx={{
            fontSize: '20px',
          }}
        >
          Cassandra has a robust and active community of users and developers,
          who contribute to its development and use it in a variety of
          applications, ranging from e-commerce to real-time analytics.
        </Typography>
      </Container>
    </Grid>
  );
};

export default DidYouKnowSection;
