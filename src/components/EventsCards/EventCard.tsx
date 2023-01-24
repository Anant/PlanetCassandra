import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Box, Typography, Button } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";

const EventCard: React.FC = () => {
  return (
    <Card sx={{ width: "70%", borderRadius: 5, margin: { xs: "auto", md: 0 } }}>
      <StaticImage
        style={{ borderRadius: 5, height: 200 }}
        src="../../images/PostTag.jpg"
        alt="A dinosaur"
        placeholder="blurred"
      />
      <Box sx={{ padding: 3 }}>
        <CardContent sx={{ padding: 0 }}>
          <Typography
            sx={{ color: "#5ab1bb" }}
            gutterBottom
            variant="h6"
            component="div"
          >
            Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            cum ducimus expedita recusandae esse nihil, aliquid quo quia atque
            quibusdam amet inventore pariatur, consectetur earum dolore a
            exercitationem laborum tempora.
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingInline: 0,
            alignItems: "center",
            marginTop: 3,
          }}
        >
          <Button
            sx={{
              borderRadius: 50,
              backgroundColor: "#344D67",
              fontSize: 10,
              "&:hover": {
                backgroundColor: "#344D67",
              },
            }}
            variant="contained"
          >
            Go to Event
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <CiFacebook
              style={{ cursor: "pointer" }}
              color="#32A5EE"
              size="24px"
            />
            <CiLinkedin
              style={{ cursor: "pointer" }}
              color="#32A5EE"
              size="24px"
            />
            <CiTwitter
              style={{ cursor: "pointer" }}
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
