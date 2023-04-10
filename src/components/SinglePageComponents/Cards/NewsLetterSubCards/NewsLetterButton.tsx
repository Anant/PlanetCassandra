import { Button, Box, useTheme } from '@mui/material';
import { RiArrowRightCircleLine } from '@react-icons/all-files/ri/RiArrowRightCircleLine';
import React from 'react';

interface Props {
  handleSubmit: () => void;
}

const NewsLetterButton: React.FC<Props> = ({ handleSubmit }: Props) => {
  const theme = useTheme();
  return (
    <Box>
      <Button
        sx={{
          borderRadius: 2,
          backgroundColor: theme.palette.primary.darkblue,
          fontSize: { xs: 14, sm: 8, md: 18 },
          fontFamily: 'Roboto Condensed, sans-serif',
          fontWeight: 700,
          textTransform: 'uppercase',
          '&:hover': {
            backgroundColor: '#2e51d1',
          },
        }}
        onClick={() => handleSubmit()}
        variant="contained"
        endIcon={<RiArrowRightCircleLine size={24} />}
      >
        Subscribe Now
      </Button>
    </Box>
  );
};

export default NewsLetterButton;
