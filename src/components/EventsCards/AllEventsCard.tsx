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
      <Link style={{ textDecoration: "none"}} to={`/event/${getSlug(title)}`}>
        <Typography color="#5AB1BB">{title}</Typography>
      </Link>
      <Box>
        <Typography variant="subtitle2">
          Online - {date}
        </Typography>
      </Box>
      <Typography variant="subtitle2">at Youtube</Typography>
    </Box>
  );
};


export default EventCard;
