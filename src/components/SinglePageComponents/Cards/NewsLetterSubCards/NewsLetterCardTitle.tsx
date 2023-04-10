import { Typography, useTheme } from '@mui/material';
import React from 'react';

interface NewsLetterCardTitleProps {
  cardTitle: string;
}

const NewsLetterCardTitle: React.FC<NewsLetterCardTitleProps> = ({
  cardTitle,
}) => {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        color: theme.palette.primary.turqoise,
        fontSize: { xs: 24, sm: 25, md: 30, lg: 40 },
        fontFamily: 'Roboto Condensed, sans-serif',
        fontWeight: 700,
      }}
    >
      {cardTitle}
    </Typography>
  );
};

export default NewsLetterCardTitle;
