import React, { useState } from "react";
import {
  Typography,
  Paper,
  IconButton,
  Grid,
  Box,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import "../Carousel/styles.css";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";

interface Props {
  items: Array<{
    title: string;
    image: string;
    slug: string;
  }>;
}

const Carousel: React.FC<Props> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + items.length - 1) % items.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className={"root"}>
      <img src={items[currentIndex].image} alt="Logo" />
      <Paper elevation={3} className={"carousel"}>
        <Grid className={"carousel"}>
          <Grid item xs={12} sm={10} md={8}>
            <Box className={"card"}>
              <CardMedia
                className={"media"}
                title={items[currentIndex].title}
              />
              <CardContent className={"content"}>
                <Typography variant="h5" className={"title"}>
                  {items[currentIndex].title}
                </Typography>
                <Button
                  sx={{
                    marginTop: 2,
                    borderRadius: 50,
                    backgroundColor: "#5AB1BB",
                    ":hover": {
                      bgcolor: "#5AB1BB",
                      color: "white",
                    },
                  }}
                  variant="contained"
                >
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/post/${items[currentIndex].slug}`}
                  >
                    Continue reading
                  </Link>
                </Button>
              </CardContent>
            </Box>
          </Grid>
        </Grid>
        <div className={"controls"}>
          <IconButton
            className={"button"}
            onClick={handlePrev}
            aria-label="previous slide"
          >
            {"<"}
          </IconButton>
          <IconButton
            className={"button"}
            onClick={handleNext}
            aria-label="next slide"
          >
            {">"}
          </IconButton>
        </div>
      </Paper>
    </div>
  );
};

export default Carousel;
