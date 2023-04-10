import {
  Box,
  Button,
  Typography,
  Grid,
  Container,
  useTheme,
} from '@mui/material';
import { Link } from 'gatsby';
import React from 'react';
import { RiArrowRightCircleLine } from '@react-icons/all-files/ri/RiArrowRightCircleLine';

const TrainingAdComponent: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        paddingX: { xs: 3, sm: 3, md: 5 },
        paddingY: { xs: 3, sm: 2, md: 5 },
        background:
          'linear-gradient(67.68deg, #5AB1BB -23.68%, #344D67 92.21%)',
      }}
    >
      <Grid container>
        <Grid item sm={12}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                color: theme.palette.primary.white,
                fontSize: { xs: 24, sm: 25, lg: 40 },
                marginRight: 1,
              }}
              component="h1"
              fontFamily="Roboto Condensed, sans-serif"
              fontWeight={700}
            >
              Need Cassandra Training?
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h6"
              fontFamily="Roboto Condensed, sans-serif"
              fontWeight={400}
              component="h2"
              sx={{
                marginTop: 1,
                color: theme.palette.primary.white,
                display: 'flex',
                justifyContent: 'center',
                textTransform: 'uppercase',
                fontSize: { xs: 13, sm: 14, lg: 22 },
              }}
            >
              we got you covered
            </Typography>
            <Typography
              sx={{
                color: '#FFF',
                fontSize: { xs: 13, sm: 12, md: 20 },
                marginTop: 2,
              }}
              fontFamily="Roboto Condensed, sans-serif"
              fontWeight={400}
            >
              Anant US provides online training for Apache Cassandra that covers
              all the important skills you need to know in order to work with
              this high performance, open source NoSQL database.
            </Typography>
            <Link
              to={'/training/cassandra'}
              style={{ marginTop: '30px', textDecoration: 'none' }}
            >
              <Button
                sx={{
                  borderRadius: 1,
                  backgroundColor: theme.palette.primary.white,
                  color: theme.palette.primary.turqoise,
                  fontSize: { xs: '14px', sm: '10px', md: '18px' },
                  textTransform: 'uppercase',
                  fontFamily: 'Roboto Condensed, sans-serif',
                  fontWeight: 700,
                  '&:hover': {
                    backgroundColor: '#2e51d1',
                  },
                }}
                variant="contained"
              >
                Get Started
                <Box
                  sx={{
                    marginLeft: 1,
                    height: { xs: '24px', sm: '18px', md: '29px' },
                    width: { xs: '24px', sm: '18px', md: '29px' },
                  }}
                >
                  <RiArrowRightCircleLine
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </Box>
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrainingAdComponent;
