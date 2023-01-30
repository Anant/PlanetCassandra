import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Box, Typography, Button } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import { CiFacebook, CiLinkedin, CiTwitter } from 'react-icons/ci';

interface Props {
  width: string;
  name: string;
  description: string;
}

const UseCaseCard = ({ name, description, width }: Props) => {
  return (
    <Card
      sx={{
        width: { width },
        height: '272.85px',
        borderRadius: 5,
        margin: { xs: 'auto', md: 0 },
      }}
    >
      <Box sx={{ padding: 3 }}>
        <CardContent sx={{ padding: 0 }}>
          <Typography
            sx={{ color: '#5ab1bb' }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            className="Font_Montserrat_Regular"
            color="text.secondary"
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingInline: 0,
            alignItems: 'center',
            marginTop: 3,
          }}
        >
          <Button
            sx={{
              borderRadius: 50,
              backgroundColor: '#5AB1BB',
              fontSize: 10,
              '&:hover': {
                backgroundColor: '#344D67',
              },
            }}
            variant="contained"
          >
            Continue Reading
          </Button>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CiFacebook
              style={{ cursor: 'pointer' }}
              color="#32A5EE"
              size="24px"
            />
            <CiLinkedin
              style={{ cursor: 'pointer' }}
              color="#32A5EE"
              size="24px"
            />
            <CiTwitter
              style={{ cursor: 'pointer' }}
              color="#32A5EE"
              size="24px"
            />
          </Box>
        </CardActions>
      </Box>
    </Card>
  );
};

export default UseCaseCard;
