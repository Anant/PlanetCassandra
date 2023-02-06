import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Box, Typography, Button } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import { CiFacebook, CiLinkedin, CiTwitter } from 'react-icons/ci';
import { GatsbyImage } from "gatsby-plugin-image"
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { Link } from "gatsby";
import getSlug from "speakingurl";
interface Props {
  width: string;
  eventName: string;
  eventDescription: string;
  eventImg: IGatsbyImageData;
}
const EventCard = ({ width, eventDescription, eventName, eventImg }: Props) => {
  return (
    <Card
      sx={{ width: { width }, borderRadius: 5, margin: { xs: 'auto', md: 0 } }}
    >
      <GatsbyImage
        image={eventImg}
        alt={eventName}
        style={{ borderRadius: 5, height: 320 }}
      />
      <Box sx={{ padding: 3 }}>
        <CardContent sx={{ padding: 0 }}>
          <Typography
            sx={{ color: '#5ab1bb' }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {eventName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {eventDescription}
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
          <Link style={{ textDecoration: "none", color: "white" }} to={`/event/${getSlug(eventName)}`}>
            <Button
              sx={{
                borderRadius: 50,
                backgroundColor: '#344D67',
                fontSize: 10,
                '&:hover': {
                  backgroundColor: '#344D67',
                },
              }}
              variant="contained"
            >
              Go to Event
            </Button>
          </Link>
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

export default EventCard;
