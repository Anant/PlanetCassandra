import { Typography, Box, useTheme } from '@mui/material';
import { FaRegCalendarAlt } from '@react-icons/all-files/fa/FaRegCalendarAlt';
import React from 'react';

interface CardDateComponentProps {
  dataFontSize?: string | { sm: string; md: string };
  dateCreated: string;
}

const CardDateComponent: React.FC<CardDateComponentProps> = ({
  dataFontSize,
  dateCreated,
}) => {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '8px' }}>
      <FaRegCalendarAlt color={theme.palette.primary.turqoise} />
      <Typography
        component="p"
        fontFamily="Roboto Condensed, sans-serif"
        fontWeight={500}
        sx={{
          marginLeft: '5px',
          color: theme.palette.primary.main,
          fontSize: dataFontSize ? dataFontSize : { sm: '12px', md: '15px' },
        }}
      >
        {new Date(dateCreated).toLocaleDateString('en-US')}
      </Typography>
    </Box>
  );
};

export default CardDateComponent;
