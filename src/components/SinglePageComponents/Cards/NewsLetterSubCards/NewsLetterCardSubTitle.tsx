import { Typography, useTheme } from '@mui/material';
import React from 'react';

interface NewsLetterSubTitleProps {
  subTitle: string;
}

const NewsLetterSubTitle: React.FC<NewsLetterSubTitleProps> = ({
  subTitle,
}) => {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        marginTop: 1,
        color: theme.palette.primary.main,
        fontSize: { xs: 13, md: 20 },
        fontFamily: 'Roboto Condensed, sans-serif',
        fontWeight: 400,
      }}
    >
      {subTitle}
    </Typography>
  );
};

export default NewsLetterSubTitle;
