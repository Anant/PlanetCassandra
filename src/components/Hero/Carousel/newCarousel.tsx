import React, { useState } from "react";
import {
  Typography,
  Paper,
  IconButton,
  Grid,
  Box,
  CardMedia,
  CardContent,
  Skeleton,
  Button,
} from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Carousel from "react-material-ui-carousel";
import SendIcon from "@mui/icons-material/Send";

interface Props {
  items: Array<{
    title: string;
    image: string;
    slug: string;
  }>;
}

const NewCarousel: React.FC<Props> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = (e: any) => {
    setCurrentIndex(e);
  };
  return (
    <Carousel onChange={(e) => handleNext(e)}>
      {items.map((item, i) => (
        <Paper>
          {item.image ? (
            <img
              src={items[currentIndex].image}
              height="300px"
              width={"100%"}
              alt="Logo"
            />
          ) : (
            <Skeleton variant="rectangular" width={"100%"} height={300} />
          )}
          <Typography
            marginTop={2}
            textAlign={"center"}
            height="80px"
            variant="h5"
          >
            {item.title}
          </Typography>

          <Link
            style={{
              display: "block",
              textDecoration: "none",
              color: "white",
              margin: "auto",
              textAlign: "center",
            }}
            to={`/post/${items[currentIndex].slug}`}
          >
            <Button
              sx={{
                borderRadius: 50,
                marginBottom: 2,

                backgroundColor: "#344D67",
              }}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Continue reading{" "}
            </Button>
          </Link>
        </Paper>
      ))}
    </Carousel>
  );
};

export default NewCarousel;
