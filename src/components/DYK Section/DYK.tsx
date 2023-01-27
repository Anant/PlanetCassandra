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
      >
        <Grid justifyContent="center" container>
          <Typography
            color={'white'}
            align={'center'}
            variant="h5"
            gutterBottom
            className="Font_Lato_Bold"
          >
            Did You
          </Typography>
          <Typography marginX={1} align={'center'} variant="h5" gutterBottom>
            Know?
          </Typography>
        </Grid>

        <Typography
          className="Font_Lato_Light"
          align={'center'}
          variant="subtitle2"
          gutterBottom
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          voluptate ipsa voluptatibus accusamus nobis nostrum doloribus quidem
          aut provident est neque debitis quos minima, error deleniti ipsum
          commodi culpa facilis.
        </Typography>
      </Container>
    </Grid>
  );
};

export default DidYouKnowSection;
