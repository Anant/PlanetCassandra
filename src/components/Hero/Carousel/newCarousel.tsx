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
import Carousel from "react-material-ui-carousel";
interface Props {
  items: Array<{
    title: string;
    image: string;
    slug: string;
  }>;
}

const NewCarousel: React.FC<Props> = ({ items }) => {
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
      <Carousel>
        {items.map((item, i) => (
          <Paper>
            <h2>Test</h2>

            <Button className="CheckButton">Check it out!</Button>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default NewCarousel;
