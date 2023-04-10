import { Typography, useTheme } from '@mui/material';
import React from 'react';
import { BsPersonFill } from 'react-icons/bs';

interface AuthorProps {
  dataFontSize?: { sm: string; md: string } | string;
  author?: string;
}

const AuthorComponent: React.FC<AuthorProps> = ({ dataFontSize, author }) => {
  const theme = useTheme();
  return (
    <Typography
      fontFamily="Roboto Condensed, sans-serif"
      fontWeight={400}
      sx={{
        fontSize: dataFontSize ? dataFontSize : { sm: '12px', md: '15px' },
        color: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <BsPersonFill
        color={theme.palette.primary.turqoise}
        style={{ marginRight: '3px' }}
      />
      {author ? author : 'John Doe'}
    </Typography>
  );
};

export default AuthorComponent;
