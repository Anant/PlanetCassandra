import { Grid, Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { GiLightBulb } from 'react-icons/gi';
import { Link } from 'gatsby';

interface NotificationProps {
  notificationTitle: string;
  articleUrl: string;
}

const NotificationComponent: React.FC<{ args: NotificationProps }> = ({
  args: { notificationTitle, articleUrl },
}) => {
  const theme = useTheme();
  return (
    <Grid container sx={{ marginY: 2 }}>
      <Grid item>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            background: '#F3F3F3',
            paddingX: 2,
            paddingY: 1.5,
            borderRadius: '5px',
          }}
        >
          <Box
            sx={{
              fontSize: { sm: '18px', md: '28px' },
              marginRight: 1.5,
            }}
          >
            <GiLightBulb
              style={{
                color: theme.palette.primary.turqoise,
                display: 'block',
              }}
            />
          </Box>
          <Link to={articleUrl} style={{ textDecoration: 'none' }}>
            <Typography
              fontFamily="Roboto condensed, sans-serif"
              className="textTruncate-2"
              sx={{
                color: theme.palette.primary.turqoise,
                lineHeight: { xs: '15px', md: '24px' },
                fontSize: { xs: '13px', sm: '11px', md: '20px' },
              }}
            >
              Read this article if you want to know more about{' '}
              {notificationTitle}
            </Typography>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NotificationComponent;
