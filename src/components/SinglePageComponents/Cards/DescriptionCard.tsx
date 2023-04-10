import React, { FC } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { BsBookmark, BsShare, BsThreeDots } from 'react-icons/bs';

interface ArticleProps {
  title: string;
  reading_time?: number;
  wallabag_created_at: string;
  published_by?: string;
  content?: string;
}

const DescriptionCard: FC<{ article: ArticleProps }> = ({
  article: { title, reading_time, wallabag_created_at, published_by, content },
}) => {
  const theme = useTheme();

  const author = published_by && published_by.slice(2, -2);

  const formattedContent = content?.replace(/<[^>]+>/g, '');
  const dateCreated = new Date(wallabag_created_at).toLocaleDateString();
  const lines = formattedContent?.split('\n') ?? [];

  const handleBookmarkClick = () => {
    // Add bookmark logic here
  };

  const handleShareClick = () => {
    // Add share logic here
  };

  const handleSeeMoreClick = () => {
    // Add see more logic here
  };
  return (
    <Box sx={{ marginY: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Typography
            sx={{
              marginRight: 5,
              fontFamily: 'Roboto Condensed, sans-serif',
              color: '#7C7C7C',
              fontSize: { xs: '14px', sm: '10px', md: '22px' },
            }}
          >
            {dateCreated}
          </Typography>
          <Typography sx={{ fontSize: { xs: '14px', sm: '10px', md: '22px' } }}>
            <span
              style={{
                color: '#7C7C7C',
                marginRight: '5px',
                fontFamily: 'Roboto Condensed, sans-serif',
              }}
            >
              {' '}
              Reading time:
            </span>
            <span
              style={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                fontFamily: 'Roboto Condensed, sans-serif',
              }}
            >
              {reading_time ? reading_time : 'N/A'}{' '}
            </span>
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              cursor: 'pointer',
              fontFamily: 'Roboto Condensed, sans-serif',
              color: '#000000',
              marginRight: 1.25,
              fontSize: { xs: '14px', sm: '10px', md: '22px' },
            }}
            onClick={handleBookmarkClick}
          >
            <BsBookmark />
          </Typography>
          <Typography
            sx={{
              cursor: 'pointer',
              fontFamily: 'Roboto Condensed, sans-serif',
              color: '#000000',
              marginRight: 1.25,
              fontSize: { xs: '14px', sm: '10px', md: '22px' },
            }}
            onClick={handleShareClick}
          >
            <BsShare />
          </Typography>
          <Typography
            sx={{
              cursor: 'pointer',
              fontFamily: 'Roboto Condensed, sans-serif',
              color: '#000000',
              fontSize: { xs: '14px', sm: '10px', md: '22px' },
            }}
            onClick={handleSeeMoreClick}
          >
            <BsThreeDots />
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            fontWeight: 700,
            color: theme.palette.primary.darkblue,
            fontSize: { sm: '24px', md: '60px' },
            fontFamily: 'Roboto Condensed, sans-serif',
            lineHeight: { sm: '30px', md: '73.5px' },
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box sx={{ marginY: { sm: 1, md: 0 } }}>
        <Typography
          sx={{
            fontSize: { sm: '11px', md: '25px' },
            color: theme.palette.primary.turqoise,
            fontWeight: 700,
            lineHeight: { sm: '17px', md: 4.25 },
            fontFamily: 'Roboto Condensed, sans-serif',
          }}
        >
          by {author ? author : 'John Doe'}
        </Typography>
      </Box>
      <Box>
        <Typography
          className="textTruncate-8"
          sx={{
            fontSize: { sm: '14px', md: '22px' },
            color: theme.palette.primary.main,
            fontWeight: 400,
            lineHeight: { sm: '17px', md: '26px' },
            fontFamily: 'Roboto Condensed, sans-serif',
            textAlign: 'justify',
          }}
        >
          {content ? lines : 'Description not available at the moment'}
        </Typography>
      </Box>
    </Box>
  );
};

export default DescriptionCard;
