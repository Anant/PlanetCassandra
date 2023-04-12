import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Box, Typography, Button } from '@mui/material';
import { IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import { CiFacebook, CiLinkedin, CiTwitter } from 'react-icons/ci';
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import getSlug from 'speakingurl';

interface Props {
  name: string;
  description: string;
  url: string;
  gatsbyImageData: IGatsbyImageData | null;
}

const UseCaseCard = ({ name, description, url, gatsbyImageData }: Props) => {
  return (
    <Card sx={{ height: '480px', borderRadius: 5, margin: { xs: 'auto', md: 0 } }}>
      <Box sx={{ padding: 3 }}>
        <CardContent
          sx={{
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          {gatsbyImageData && (
            <Box
              sx={{
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                borderRadius: 2,
              }}
            >
              <GatsbyImage
                className="w-full h-100 object-cover thumbnail"
                image={gatsbyImageData}
                alt={name}
              />
            </Box>
          )}

          <Typography
            sx={{ color: '#5ab1bb', fontSize: 20, mt: 2 }}
            gutterBottom
            variant="h6"
            className="Font_Montserrat_Bold truncate"
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            className="Font_Montserrat_550 truncateDescription"
            color="text.secondary"
            sx={{ flexGrow: 1 }}
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
          }}
        >
          <Link style={{ textDecoration: 'none' }} to={`/use-cases/${getSlug(name)}`}>
            <Button
              sx={{
                borderRadius: 50,
                backgroundColor: '#5AB1BB',
                fontSize: 10,
                '&:hover': {
                  backgroundColor: '#344D67',
                },
                textTransform: 'none',
              }}
              variant="contained"
            >
              <Typography className="Font_Mulish_Button_M">Continue Reading</Typography>
            </Button>
          </Link>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CiFacebook style={{ cursor: 'pointer' }} color="#32A5EE" size="24px" />
            <CiLinkedin style={{ cursor: 'pointer' }} color="#32A5EE" size="24px" />
            <CiTwitter style={{ cursor: 'pointer' }} color="#32A5EE" size="24px" />
          </Box>
        </CardActions>
      </Box>
    </Card>
  );
};

export default UseCaseCard;
