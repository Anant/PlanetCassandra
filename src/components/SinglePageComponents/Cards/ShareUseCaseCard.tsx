import { Typography, Box, Button, useTheme } from '@mui/material';
import { RiArrowRightCircleLine } from '@react-icons/all-files/ri/RiArrowRightCircleLine';
import React from 'react';

const ShareUseCases: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background:
          'linear-gradient(67.68deg, #5AB1BB -23.68%, #344D67 92.21%)',
        borderRadius: '8px',
        padding: { xs: 2, sm: 3, lg: 4 },
        paddingY: { lg: 10 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        sx={{
          marginTop: 1,
          color: theme.palette.primary.white,
          fontSize: { xs: 13, md: 20, lg: 30 },
          fontFamily: 'Roboto Condensed, sans-serif',
          fontWeight: 700,
          textAlign: 'center',
        }}
      >
        Do you have an Apache® Cassandra Use Case ?
      </Typography>
      <Button
        sx={{
          marginTop: 2,
          paddingX: 1.75,
          paddingY: 1,
          borderRadius: '10px',
          backgroundColor: theme.palette.primary.turqoise,
          '&:hover': {
            backgroundColor: theme.palette.primary.turqoise,
          },
        }}
        variant="contained"
      >
        <Typography
          sx={{
            color: 'white',
            fontSize: { xs: 13, sm: 10, md: 18 },
            fontFamily: 'Roboto Condensed, sans-serif',
            fontWeight: 400,
          }}
        >
          <a
            href="https://airtable.com/shrYlu3mjtCiBTlOG"
            style={{
              textDecoration: 'none',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Share Use Case{' '}
            <RiArrowRightCircleLine style={{ marginLeft: '8px' }} size={20} />
          </a>
        </Typography>
      </Button>
    </Box>
  );
};

export default ShareUseCases;
