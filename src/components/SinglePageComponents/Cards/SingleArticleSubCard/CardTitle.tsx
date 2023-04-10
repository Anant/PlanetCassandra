import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

interface CardTitleProps {
  titleFontSize?: string;
  title: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ titleFontSize, title }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        className="textTruncate-2"
        fontFamily="Roboto Condensed, sans-serif"
        fontWeight={600}
        sx={{
          color: theme.palette.primary.darkblue,
          fontSize: titleFontSize ? titleFontSize : '18px',
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default CardTitle;
