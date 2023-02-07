import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import getSlug from "speakingurl";
import { Link } from "gatsby";


interface EventProps {
  title: string;
  date: string;
}

const EventCard: React.FC<EventProps> = ({ title, date }) => {
  return (
    <Box sx={{ borderBottom: 1, padding: 1 }}>
      <Link style={{ textDecoration: "none" }} to={`/event/${getSlug(title)}`}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 17
          }}
          color="#5AB1BB"
        >
          {title}
        </Typography>
      </Link>
      <Box>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 14,
          }}
          variant="subtitle2"
          color="#000000CC"
        >
          Online - {date}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: 14,
        }}
        variant="subtitle2"
        color="#5AB1BB"
      >
        at Youtube
      </Typography>
    </Box>
  );
};


export default EventCard;
